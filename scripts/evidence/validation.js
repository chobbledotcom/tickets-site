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
 * A path to a Feature in the app's specs, judged as written and as a browser
 * will read it: a segment written "%2e%2e" is a dot segment by then, and a
 * link that climbs out of specs/ points at something else entirely.
 */
export const featurePathAt = (value, location) => {
  stringAt(value, location);
  let decoded;
  try {
    decoded = decodeURIComponent(value);
  } catch (error) {
    throw new Error(`${location}: is not a readable path`, { cause: error });
  }
  for (const path of [value, decoded]) {
    safeRelativePathAt(path, location);
    if (!path.startsWith("specs/") || !path.endsWith(".feature")) {
      fail(location, "must be a specs/<path>.feature path");
    }
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
