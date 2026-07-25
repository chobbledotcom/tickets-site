import { createSocialScreenshot } from "../create-social-screenshot.js";
import { renderSocialScreenshotText } from "../render-social-screenshot-text.js";

export const EVIDENCE_SOCIAL_CSS = {
  "servicing-events": `
:root {
  --color-accent: #c28b52;
  --color-link: #315b67;
  --color-secondary: #315b67;
  --color-text: #27383d;
}
`,
};

export const createEvidenceSocialImage = async ({
  inputPath,
  outputPath,
  socialKey,
}) => {
  const { solidWidth } = await createSocialScreenshot(
    inputPath,
    outputPath,
    "facebook",
  );
  await renderSocialScreenshotText(
    outputPath,
    socialKey,
    EVIDENCE_SOCIAL_CSS[socialKey] ?? "",
    solidWidth,
  );
};
