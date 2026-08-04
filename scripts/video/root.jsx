import { Composition } from "remotion";
import { CHOBBLEFEST_VIDEO } from "./scenes.js";
import { SocialVideo } from "./social-video.jsx";

export const VideoRoot = () => {
  const {
    durationInFrames,
    fps,
    height,
    id,
    sceneDurationInFrames,
    scenes,
    transitionDurationInFrames,
    width,
  } = CHOBBLEFEST_VIDEO;

  return (
    <Composition
      component={SocialVideo}
      defaultProps={{
        scenes,
        sceneDurationInFrames,
        transitionDurationInFrames,
      }}
      durationInFrames={durationInFrames}
      fps={fps}
      height={height}
      id={id}
      width={width}
    />
  );
};
