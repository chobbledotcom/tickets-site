import {
  Img,
  interpolate,
  spring,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";

const SCREENSHOT_INSET = 72;
const SCREENSHOT_OPACITY = 0.55;
const SCREENSHOT_PLANES = [
  { delay: 0, rotateX: -5, rotateY: -8, x: -38, y: 42, z: -180 },
  { delay: 5, rotateX: 6, rotateY: 11, x: 72, y: 18, z: 260 },
  { delay: 10, rotateX: -7, rotateY: -6, x: -48, y: -34, z: 420 },
];

const driftStyle = (frame, durationInFrames) => ({
  height: `calc(100% - ${SCREENSHOT_INSET * 2}px)`,
  inset: SCREENSHOT_INSET,
  perspective: 1100,
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
  transformStyle: "preserve-3d",
  width: `calc(100% - ${SCREENSHOT_INSET * 2}px)`,
});

const planeStyle = (frame, fps, plane) => {
  const progress = spring({
    config: { damping: 17, mass: 0.75, stiffness: 105 },
    delay: plane.delay,
    fps,
    frame,
  });
  const remaining = interpolate(progress, [0, 1], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return {
    filter: `drop-shadow(0 ${18 * remaining}px ${22 * remaining}px rgba(0, 0, 0, ${0.24 * remaining}))`,
    height: "100%",
    objectFit: "contain",
    opacity: interpolate(progress, [0, 1], [0, SCREENSHOT_OPACITY], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    }),
    position: "absolute",
    transform: `translate3d(${plane.x * remaining}px, ${plane.y * remaining}px, ${plane.z * remaining}px) rotateX(${plane.rotateX * remaining}deg) rotateY(${plane.rotateY * remaining}deg)`,
    transformOrigin: "50% 50%",
    width: "100%",
  };
};

export const LayeredScreenshot = ({ durationInFrames, layers }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  return (
    <div style={driftStyle(frame, durationInFrames)}>
      {SCREENSHOT_PLANES.map((plane, index) => (
        <Img
          key={layers[index]}
          src={staticFile(layers[index])}
          style={planeStyle(frame, fps, plane)}
        />
      ))}
    </div>
  );
};
