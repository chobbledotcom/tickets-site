/**
 * Every sentence the site writes about an evidence screenshot lives in the
 * evidence mapping. The page, the gallery and the social card all repeat those
 * words, and the checks here fail when a repeat drifts from the mapping, so a
 * migrated capture cannot leave a stale description behind on another page.
 */

/** Every directory whose Markdown becomes a rendered page. A capture's images
 * may only be named in two of those files, so all three are searched. */
export const CONTENT_DIRECTORIES = ["guide-categories", "guide-pages", "pages"];

const escapeForRegExp = (value) =>
  value.replaceAll(/[.*+?^${}()|[\]\\]/g, "\\$&");

export const socialImagePath = (imagePath) =>
  imagePath.replace(/\.png$/, "__facebook.png");

/**
 * The prose a page prints beside its evidence screenshot. It makes claims the
 * mapping does not hold, so a review that only shows the mapping's five fields
 * would let a reader accept a new story without seeing what it contradicts.
 */
export const evidenceBlockProse = (page, imagePath) => {
  const block = page
    .split(/^ {2}- type: /m)
    .find((section) => section.includes(`figure_src: /${imagePath}`));
  if (!block) return null;
  const content = block.match(/^ {4}content: \|-?\n([\s\S]*?)^ {4}\w/m);
  if (!content) return null;
  return content[1]
    .split("\n")
    .map((line) => line.replace(/^ {6}/, ""))
    .join("\n")
    .trim();
};

/** The captions the gallery gives one image, in the order it lists them. */
export const galleryCaptionsFor = (gallery, imagePath) =>
  [
    ...gallery.matchAll(
      new RegExp(
        `- image: /${escapeForRegExp(imagePath)}\\s*\\n\\s*caption: (.+)`,
        "g",
      ),
    ),
  ].map(([, caption]) => caption.trim());

/** A capture appears in the gallery once, as its social image. Counting the
 * mobile image too stops a second entry rendering the same capture twice: the
 * gallery is exempt from the stray-mention rule, so nothing else would see it. */
const galleryIssues = (captureId, mapping, gallery) => {
  const captions = galleryCaptionsFor(
    gallery,
    socialImagePath(mapping.legacyDestinationPath),
  );
  const mobile = galleryCaptionsFor(gallery, mapping.legacyDestinationPath);
  const total = captions.length + mobile.length;
  if (total !== 1 || captions.length !== 1) {
    return [
      `${captureId}: the gallery lists its images ${total} times, not once as the social image`,
    ];
  }
  return captions[0] === mapping.galleryCaption
    ? []
    : [
        `${captureId}: the gallery caption is "${captions[0]}" but the mapping says "${mapping.galleryCaption}"`,
      ];
};

const socialCopyIssues = (captureId, mapping, socialCopy, socialFacts) => {
  const copy = socialCopy[mapping.socialKey];
  if (!copy)
    return [`${captureId}: has no social copy for ${mapping.socialKey}`];
  const wrong = [
    ["heading", copy.heading, mapping.socialHeading],
    ["body", copy.body, mapping.socialBody],
  ].filter(([, actual, expected]) => actual !== expected);
  const facts = socialFacts[mapping.socialKey] ?? [];
  return [
    ...wrong.map(
      ([field, actual, expected]) =>
        `${captureId}: the social ${field} is "${actual}" but the mapping says "${expected}"`,
    ),
    ...(facts.length === 0
      ? [`${captureId}: has no audited facts for ${mapping.socialKey}`]
      : []),
  ];
};

/** Where a capture's images are allowed to be named: its own page, and the
 * gallery, which the mapping's gallery caption covers. */
const allowedMentions = (mapping) => [mapping.page, "pages/gallery.md"];

const strayMentionIssues = (captureId, mapping, markdownFiles) => {
  const paths = [
    mapping.legacyDestinationPath,
    socialImagePath(mapping.legacyDestinationPath),
  ];
  const allowed = allowedMentions(mapping);
  return markdownFiles
    .filter(
      (file) =>
        !allowed.includes(file.path) &&
        paths.some((path) => file.content.includes(path)),
    )
    .map(
      (file) =>
        `${captureId}: ${file.path} describes the image, but only ${allowed.join(" and ")} may`,
    );
};

export const evidenceCopyIssues = ({
  gallery,
  mapping,
  markdownFiles,
  socialCopy,
  socialFacts,
}) =>
  Object.entries(mapping.captures).flatMap(([captureId, placement]) => [
    ...galleryIssues(captureId, placement, gallery),
    ...socialCopyIssues(captureId, placement, socialCopy, socialFacts),
    ...strayMentionIssues(captureId, placement, markdownFiles),
  ]);
