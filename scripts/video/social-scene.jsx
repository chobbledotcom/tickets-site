import { AbsoluteFill } from "remotion";
import { BODY_FONT, DISPLAY_FONT } from "./fonts.js";
import { LayeredScreenshot } from "./layered-screenshot.jsx";
import { PaperText } from "./paper-text.jsx";
import { SOCIAL_TEXT_STYLES } from "./text-layout.js";

const PAPER_ALPHA = "d9";

export const SocialScene = ({
  animationDurationInFrames,
  scene,
  sceneDurationInFrames,
}) => {
  const [background, text] = scene.palette;
  const paperColour = `${background}${PAPER_ALPHA}`;

  return (
    <AbsoluteFill style={{ background }}>
      <LayeredScreenshot
        animationDurationInFrames={animationDurationInFrames}
        durationInFrames={sceneDurationInFrames}
        layers={scene.layers}
        verticalPan={scene.verticalPan}
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
