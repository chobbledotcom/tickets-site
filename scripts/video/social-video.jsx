import { linearTiming, TransitionSeries } from "@remotion/transitions";
import { fade } from "@remotion/transitions/fade";
import { SocialScene } from "./social-scene.jsx";

const renderScene = (
  scene,
  sceneDurationInFrames,
  animationDurationInFrames,
) => (
  <TransitionSeries.Sequence
    durationInFrames={sceneDurationInFrames}
    key={scene.slug}
  >
    <SocialScene
      animationDurationInFrames={animationDurationInFrames}
      scene={scene}
      sceneDurationInFrames={sceneDurationInFrames}
    />
  </TransitionSeries.Sequence>
);

const renderTransition = (scene, transitionDurationInFrames) => (
  <TransitionSeries.Transition
    key={`${scene.slug}-transition`}
    presentation={fade()}
    timing={linearTiming({ durationInFrames: transitionDurationInFrames })}
  />
);

const renderScenes = (
  scenes,
  sceneDurationInFrames,
  transitionDurationInFrames,
  animationDurationInFrames,
) =>
  scenes.flatMap((scene, index) => [
    renderScene(scene, sceneDurationInFrames, animationDurationInFrames),
    ...(index < scenes.length - 1
      ? [renderTransition(scene, transitionDurationInFrames)]
      : []),
  ]);

export const SocialVideo = ({
  animationDurationInFrames,
  scenes,
  sceneDurationInFrames,
  transitionDurationInFrames,
}) => (
  <TransitionSeries>
    {renderScenes(
      scenes,
      sceneDurationInFrames,
      transitionDurationInFrames,
      animationDurationInFrames,
    )}
  </TransitionSeries>
);
