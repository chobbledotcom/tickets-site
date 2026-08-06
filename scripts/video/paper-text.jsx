import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { PAPER_TEXT_LAYERS, PAPER_TEXT_PADDING } from "./text-layout.js";

const enterStyle = (frame, fps, delay, fromX) => {
  const progress = spring({
    config: { damping: 18, mass: 0.8, stiffness: 105 },
    delay,
    fps,
    frame,
  });
  return {
    clipPath: `inset(0 ${interpolate(progress, [0, 1], [100, 0], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    })}% 0 0)`,
    opacity: progress,
    translate: `translate3d(${(1 - progress) * fromX}px, 0, 0)`,
  };
};

export const PaperText = ({
  children,
  colour,
  delay,
  fontFamily,
  fromX,
  paperColour,
  style,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const entrance = enterStyle(frame, fps, delay, fromX);

  return (
    <div
      style={{
        ...style,
        clipPath: entrance.clipPath,
        opacity: entrance.opacity,
        transform: `${entrance.translate} ${style.transform}`,
      }}
    >
      <div aria-hidden="true" style={PAPER_TEXT_LAYERS.backdrop}>
        <span
          style={{
            background: paperColour,
            boxDecorationBreak: "clone",
            fontFamily,
            padding: PAPER_TEXT_PADDING,
            WebkitBoxDecorationBreak: "clone",
          }}
        >
          {children}
        </span>
      </div>
      <div style={PAPER_TEXT_LAYERS.foreground}>
        <span
          style={{
            boxDecorationBreak: "clone",
            color: colour,
            fontFamily,
            padding: PAPER_TEXT_PADDING,
            WebkitBoxDecorationBreak: "clone",
          }}
        >
          {children}
        </span>
      </div>
    </div>
  );
};
