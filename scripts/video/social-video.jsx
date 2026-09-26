import { linearTiming, TransitionSeries } from "@remotion/transitions";
import { fade } from "@remotion/transitions/fade";
import { Html5Audio, Sequence, staticFile } from "remotion";
import { SocialScene } from "./social-scene.jsx";

const renderScene = (
  scene,
  sceneDurationInFrames,
  animationDurationInFrames,
  narrationLeadInFrames,
) => {
  // A narrated scene carries its own length, timed to its voiceover; the
  // silent reels share one length for every scene.
  const durationInFrames = scene.durationInFrames ?? sceneDurationInFrames;
  return (
    <TransitionSeries.Sequence
      durationInFrames={durationInFrames}
      key={scene.slug}
    >
      <SocialScene
        animationDurationInFrames={animationDurationInFrames}
        scene={scene}
        sceneDurationInFrames={durationInFrames}
      />
      {scene.audio ? (
        <Sequence from={narrationLeadInFrames}>
          <Html5Audio src={staticFile(scene.audio)} />
        </Sequence>
      ) : null}
    </TransitionSeries.Sequence>
  );
};

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
  narrationLeadInFrames,
) =>
  scenes.flatMap((scene, index) => [
    renderScene(
      scene,
      sceneDurationInFrames,
      animationDurationInFrames,
      narrationLeadInFrames,
    ),
    ...(index < scenes.length - 1
      ? [renderTransition(scene, transitionDurationInFrames)]
      : []),
  ]);

export const SocialVideo = ({
  animationDurationInFrames,
  narrationLeadInFrames = 0,
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
      narrationLeadInFrames,
    )}
  </TransitionSeries>
);
