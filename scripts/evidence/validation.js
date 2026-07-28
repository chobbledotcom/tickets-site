import { isAbsolute, posix } from "node:path";

const fail = (location, message) => {
  throw new Error(`${location}: ${message}`);
};

export const recordAt = (value, location) => {
  if (typeof value !== "object" || value === null || Array.isArray(value)) {
    fail(location, "must be an object");
  }
  return value;
};

export const arrayAt = (value, location) => {
  if (!Array.isArray(value)) fail(location, "must be an array");
  return value;
};

export const exactKeys = (value, keys, location) => {
  const actual = Object.keys(recordAt(value, location));
  const unknown = actual.filter((key) => !keys.includes(key));
  const missing = keys.filter((key) => !actual.includes(key));
  if (unknown.length > 0)
    fail(location, `has unknown fields: ${unknown.join(", ")}`);
  if (missing.length > 0)
    fail(location, `is missing fields: ${missing.join(", ")}`);
  return value;
};

export const stringAt = (value, location) => {
  if (typeof value !== "string" || value.trim() === "") {
    fail(location, "must be a non-empty string");
  }
  return value;
};

export const enumAt = (value, allowed, location) => {
  stringAt(value, location);
  if (!allowed.includes(value)) {
    fail(location, `must be one of: ${allowed.join(", ")}`);
  }
  return value;
};

export const idAt = (
  value,
  location,
  pattern = /^[a-z0-9]+(?:[.-][a-z0-9]+)*$/,
) => {
  stringAt(value, location);
  if (!pattern.test(value)) fail(location, "has an invalid ID");
  return value;
};

export const positiveIntegerAt = (value, location) => {
  if (!Number.isInteger(value) || value <= 0) {
    fail(location, "must be a positive whole number");
  }
  return value;
};

export const positiveNumberAt = (value, location) => {
  if (typeof value !== "number" || !Number.isFinite(value) || value <= 0) {
    fail(location, "must be a positive number");
  }
  return value;
};

export const sha256At = (value, location) => {
  stringAt(value, location);
  if (!/^[a-f0-9]{64}$/.test(value)) fail(location, "must be a SHA-256 digest");
  return value;
};

export const commitAt = (value, location) => {
  stringAt(value, location);
  if (!/^[a-f0-9]{40}$/.test(value))
    fail(location, "must be a 40-character commit SHA");
  return value;
};

export const uniqueBy = (items, getValue, location) => {
  const values = items.map(getValue);
  const duplicate = values.find(
    (value, index) => values.indexOf(value) !== index,
  );
  if (duplicate !== undefined)
    fail(location, `contains duplicate value: ${duplicate}`);
  return items;
};

export const safeRelativePathAt = (value, location) => {
  stringAt(value, location);
  const segments = value.split("/");
  const unsafeSegment = segments.some(
    (segment) => segment === "" || segment === "." || segment === "..",
  );
  if (
    isAbsolute(value) ||
    value.includes("\\") ||
    unsafeSegment ||
    posix.normalize(value) !== value
  ) {
    fail(location, "must be a safe relative path");
  }
  return value;
};

/**
 * A path to a Feature in the app's specs, as the app names it on disk. It is a
 * filesystem path, not a URL, so a percent sign in a filename is a percent
 * sign: "specs/fees/100%-free.feature" is a Feature like any other.
 */
export const featurePathAt = (value, location) => {
  stringAt(value, location);
  // Only NUL, which is the one byte a POSIX filename cannot hold. A path
  // carrying it names no file, so its link is dead however it is spelled.
  // Nothing else is refused here: a name is the app's to choose, and
  // featureSourceUrl encodes whatever it is given.
  if (value.includes("\u0000")) {
    fail(location, "must not carry a NUL character");
  }
  safeRelativePathAt(value, location);
  if (!value.startsWith("specs/") || !value.endsWith(".feature")) {
    fail(location, "must be a specs/<path>.feature path");
  }
  return value;
};

/**
 * A Feature path as a link spells it: each segment encoded on its own, so a
 * name with a space or a slash in it stays one segment and nothing in a name
 * can change the shape of the URL.
 *
 * encodeURIComponent stops at the characters legal in a URI, but a URI is not
 * the only thing this string has to survive: it is written into a
 * single-quoted YAML scalar, where a bare apostrophe ends the value.
 */
export const encodeFeaturePath = (path) =>
  path
    .split("/")
    .map((segment) =>
      encodeURIComponent(segment).replaceAll(
        /[!'()*]/g,
        (character) =>
          `%${character
            .charCodeAt(0)
            .toString(16)
            .toUpperCase()
            .padStart(2, "0")}`,
      ),
    )
    .join("/");

/**
 * A Feature path taken from a link, judged as the browser will read it.
 *
 * The link is held to what featureSourceUrl writes rather than checked for
 * each way a link can lie. Nothing writes these links by hand, so the set of
 * characters a real one carries is small and known, and a link outside that
 * set has nothing to prove.
 *
 * Percent-encoding is decoded, because a browser resolves it:
 * "specs/%2e%2e/x.feature" climbs out of the Features.
 */
export const linkedFeaturePathAt = (value, location) => {
  stringAt(value, location);
  let decoded;
  try {
    decoded = decodeURIComponent(value);
  } catch (error) {
    throw new Error(`${location}: is not a readable path`, { cause: error });
  }
  featurePathAt(decoded, location);
  // The link has to be the one this path would have been written as, not
  // merely a link that decodes to it. "foo%2Fbar.feature" decodes to two
  // segments but asks for one file named "foo/bar.feature"; a tab decodes to
  // itself but a browser strips it. Every such trick is a spelling the writer
  // would not have produced, so comparing against it refuses them all rather
  // than one per report.
  if (encodeFeaturePath(decoded) !== value) {
    fail(location, "must be the path written as this site writes it");
  }
  return value;
};

export const readJson = async (filePath, label = filePath) => {
  let text;
  try {
    text = await Bun.file(filePath).text();
  } catch (error) {
    throw new Error(`${label}: could not be read`, { cause: error });
  }
  try {
    return JSON.parse(text);
  } catch (error) {
    throw new Error(`${label}: is not valid JSON`, { cause: error });
  }
};

export const sha256 = (bytes) =>
  new Bun.CryptoHasher("sha256").update(bytes).digest("hex");
