import {
  AbsoluteFill,
  Img,
  interpolate,
  staticFile,
  useCurrentFrame,
} from "remotion";
import { BODY_FONT, DISPLAY_FONT } from "./fonts.js";
import { PaperText } from "./paper-text.jsx";
import { SOCIAL_TEXT_STYLES } from "./text-layout.js";

const SCREENSHOT_INSET = 72;
const SCREENSHOT_OPACITY = 0.55;
const PAPER_ALPHA = "d9";

const screenshotStyle = (frame, durationInFrames) => ({
  height: `calc(100% - ${SCREENSHOT_INSET * 2}px)`,
  inset: SCREENSHOT_INSET,
  objectFit: "contain",
  opacity: SCREENSHOT_OPACITY,
  position: "absolute",
  transform: `translate3d(0, ${interpolate(
    frame,
    [0, durationInFrames],
    [24, -24],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
  )}px, 0) scale(${interpolate(frame, [0, durationInFrames], [1.01, 1.06], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  })})`,
  width: `calc(100% - ${SCREENSHOT_INSET * 2}px)`,
});

export const SocialScene = ({ scene, sceneDurationInFrames }) => {
  const frame = useCurrentFrame();
  const [background, text] = scene.palette;
  const paperColour = `${background}${PAPER_ALPHA}`;

  return (
    <AbsoluteFill style={{ background }}>
      <Img
        src={staticFile(scene.image)}
        style={screenshotStyle(frame, sceneDurationInFrames)}
      />
      <PaperText
        colour={text}
        delay={3}
        fontFamily={DISPLAY_FONT}
        fromX={-90}
        paperColour={paperColour}
        style={SOCIAL_TEXT_STYLES.heading}
      >
        {scene.heading}
      </PaperText>
      <PaperText
        colour={text}
        delay={14}
        fontFamily={BODY_FONT}
        fromX={90}
        paperColour={paperColour}
        style={SOCIAL_TEXT_STYLES.body}
      >
        {scene.body}
      </PaperText>
      <PaperText
        colour={text}
        delay={24}
        fontFamily={BODY_FONT}
        fromX={-70}
        paperColour={paperColour}
        style={SOCIAL_TEXT_STYLES.address}
      >
        {scene.address.replace("  ", "\n")}
      </PaperText>
    </AbsoluteFill>
  );
};
