import { CHOBBLEFEST_SLIDES } from "../chobblefest-slides.js";
import { SETUP_JOURNEY_SLIDES } from "../setup-journey-slides.js";

export const VIDEO_FPS = 30;
export const VIDEO_FORMATS = {
  reel: { height: 1920, width: 1080 },
};

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

const chobblefestScenes = createSocialScenes(CHOBBLEFEST_SLIDES);
const setupJourneyScenes = createSocialScenes(
  SETUP_JOURNEY_SLIDES,
  "tix.chobble.com",
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

export const SOCIAL_VIDEOS = [CHOBBLEFEST_VIDEO, SETUP_JOURNEY_VIDEO];
