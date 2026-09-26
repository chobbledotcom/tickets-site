import { CHOBBLEFEST_SLIDES } from "../chobblefest-slides.js";
import { SETUP_JOURNEY_SLIDES } from "../setup-journey-slides.js";
import WHY_CHOBBLE_DURATIONS from "../why-chobble-durations.json" with {
  type: "json",
};
import { WHY_CHOBBLE_SLIDES } from "../why-chobble-slides.js";

export const VIDEO_FPS = 30;
export const VIDEO_FORMATS = {
  reel: { height: 1920, width: 1080 },
};

// How long the entrance animation plays before the voiceover starts, and
// how long the settled scene stays on screen after the voiceover ends.
export const NARRATION_LEAD_IN_FRAMES = 12;
export const NARRATION_TAIL_FRAMES = 18;

export const SCENE_ANIMATION_FRAMES = 150;
export const SCENE_READING_HOLD_FRAMES = 60;
export const SCENE_DURATION_FRAMES =
  SCENE_ANIMATION_FRAMES + SCENE_READING_HOLD_FRAMES;
export const SCENE_TRANSITION_FRAMES = 15;

export const videoDurationInFrames = (
  sceneCount,
  sceneDurationInFrames,
  transitionDurationInFrames,
) => {
  if (transitionDurationInFrames >= sceneDurationInFrames) {
    throw new Error("A transition must be shorter than a scene.");
  }
  return (
    sceneCount * sceneDurationInFrames -
    (sceneCount - 1) * transitionDurationInFrames
  );
};

export const videoDurationFromSceneFrames = (
  sceneFrames,
  transitionDurationInFrames,
) => {
  const longestScene = Math.max(...sceneFrames);
  if (transitionDurationInFrames >= longestScene) {
    throw new Error("A transition must be shorter than a scene.");
  }
  return (
    sceneFrames.reduce((total, frames) => total + frames, 0) -
    (sceneFrames.length - 1) * transitionDurationInFrames
  );
};

export const createSocialScenes = (slides, address = "tickets.chobble.com") =>
  slides.map((slide, index) => ({
    ...slide,
    address: `${address}  ${String(index + 1).padStart(2, "0")}/${String(slides.length).padStart(2, "0")}`,
    image: `images/screenshots/${slide.source}.png`,
    layers: ["background", "controls", "text"].map(
      (layer) =>
        `.video-build/images/screenshots/${slide.source}__layer-${layer}.png`,
    ),
  }));

const narrationFrames = (slide, durations) => {
  const seconds = durations[slide.slug];
  if (seconds) return Math.ceil(seconds * VIDEO_FPS);
  // Before narration exists, estimate from a spoken pace of about 2.6
  // words per second so the composition still builds.
  return Math.ceil((slide.narration.split(" ").length / 2.6) * VIDEO_FPS);
};

export const createNarratedScenes = (
  slides,
  durations,
  address = "tickets.chobble.com",
) =>
  createSocialScenes(slides, address).map((scene, index) => ({
    ...scene,
    audio: `.video-narration/${scene.slug}.wav`,
    durationInFrames: Math.max(
      SCENE_ANIMATION_FRAMES,
      NARRATION_LEAD_IN_FRAMES +
        narrationFrames(slides[index], durations) +
        NARRATION_TAIL_FRAMES,
    ),
  }));

const chobblefestScenes = createSocialScenes(CHOBBLEFEST_SLIDES);
const setupJourneyScenes = createSocialScenes(
  SETUP_JOURNEY_SLIDES,
  "tix.chobble.com",
);
const whyChobbleScenes = createNarratedScenes(
  WHY_CHOBBLE_SLIDES,
  WHY_CHOBBLE_DURATIONS,
);

export const CHOBBLEFEST_VIDEO = {
  ...VIDEO_FORMATS.reel,
  animationDurationInFrames: SCENE_ANIMATION_FRAMES,
  durationInFrames: videoDurationInFrames(
    chobblefestScenes.length,
    SCENE_DURATION_FRAMES,
    SCENE_TRANSITION_FRAMES,
  ),
  fps: VIDEO_FPS,
  id: "ChobbleFestReel",
  sceneDurationInFrames: SCENE_DURATION_FRAMES,
  scenes: chobblefestScenes,
  transitionDurationInFrames: SCENE_TRANSITION_FRAMES,
};

export const SETUP_JOURNEY_VIDEO = {
  ...VIDEO_FORMATS.reel,
  animationDurationInFrames: SCENE_ANIMATION_FRAMES,
  durationInFrames: videoDurationInFrames(
    setupJourneyScenes.length,
    SCENE_DURATION_FRAMES,
    SCENE_TRANSITION_FRAMES,
  ),
  fps: VIDEO_FPS,
  id: "SetupJourneyReel",
  sceneDurationInFrames: SCENE_DURATION_FRAMES,
  scenes: setupJourneyScenes,
  transitionDurationInFrames: SCENE_TRANSITION_FRAMES,
};

export const WHY_CHOBBLE_VIDEO = {
  ...VIDEO_FORMATS.reel,
  animationDurationInFrames: SCENE_ANIMATION_FRAMES,
  durationInFrames: videoDurationFromSceneFrames(
    whyChobbleScenes.map((scene) => scene.durationInFrames),
    SCENE_TRANSITION_FRAMES,
  ),
  fps: VIDEO_FPS,
  id: "WhyChobbleReel",
  narrationLeadInFrames: NARRATION_LEAD_IN_FRAMES,
  sceneDurationInFrames: SCENE_DURATION_FRAMES,
  scenes: whyChobbleScenes,
  transitionDurationInFrames: SCENE_TRANSITION_FRAMES,
};

export const SOCIAL_VIDEOS = [
  CHOBBLEFEST_VIDEO,
  SETUP_JOURNEY_VIDEO,
  WHY_CHOBBLE_VIDEO,
];
