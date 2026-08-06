import { Composition } from "remotion";
import { SOCIAL_VIDEOS } from "./scenes.js";
import { SocialVideo } from "./social-video.jsx";

const renderComposition = (video) => {
  const {
    animationDurationInFrames,
    durationInFrames,
    fps,
    height,
    id,
    sceneDurationInFrames,
    scenes,
    transitionDurationInFrames,
    width,
  } = video;

  return (
    <Composition
      component={SocialVideo}
      defaultProps={{
        animationDurationInFrames,
        scenes,
        sceneDurationInFrames,
        transitionDurationInFrames,
      }}
      durationInFrames={durationInFrames}
      fps={fps}
      height={height}
      id={id}
      key={id}
      width={width}
    />
  );
};

export const VideoRoot = () => <>{SOCIAL_VIDEOS.map(renderComposition)}</>;
