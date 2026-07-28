import { createSocialScreenshot } from "../create-social-screenshot.js";
import { renderSocialScreenshotText } from "../render-social-screenshot-text.js";

export const EVIDENCE_SOCIAL_CSS = {
  "payment-provider-choice": `
:root {
  --color-accent: #d7ab48;
  --color-link: #245e59;
  --color-secondary: #244c48;
  --color-text: #263a38;
}
`,
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
  copy,
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
    copy,
  );
};
