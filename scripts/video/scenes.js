import { CHOBBLEFEST_SLIDES } from "../chobblefest-slides.js";

export const VIDEO_FPS = 30;
export const VIDEO_FORMATS = {
  reel: { height: 1920, width: 1080 },
};

const CHOBBLEFEST_SCENE_FRAMES = 150;
const CHOBBLEFEST_TRANSITION_FRAMES = 15;

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

export const createSocialScenes = (slides) =>
  slides.map((slide, index) => ({
    ...slide,
    address: `tickets.chobble.com  ${String(index + 1).padStart(2, "0")}/${String(slides.length).padStart(2, "0")}`,
    image: `images/screenshots/${slide.source}.png`,
    layers: ["background", "controls", "text"].map(
      (layer) =>
        `.video-build/images/screenshots/${slide.source}__layer-${layer}.png`,
    ),
  }));

const chobblefestScenes = createSocialScenes(CHOBBLEFEST_SLIDES);

export const CHOBBLEFEST_VIDEO = {
  ...VIDEO_FORMATS.reel,
  durationInFrames: videoDurationInFrames(
    chobblefestScenes.length,
    CHOBBLEFEST_SCENE_FRAMES,
    CHOBBLEFEST_TRANSITION_FRAMES,
  ),
  fps: VIDEO_FPS,
  id: "ChobbleFestReel",
  sceneDurationInFrames: CHOBBLEFEST_SCENE_FRAMES,
  scenes: chobblefestScenes,
  transitionDurationInFrames: CHOBBLEFEST_TRANSITION_FRAMES,
};
