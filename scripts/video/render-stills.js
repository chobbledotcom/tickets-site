import { withVideoAssets } from "./assets.js";
import { buildVideoImage, runRemotion } from "./render.js";
import { CHOBBLEFEST_VIDEO } from "./scenes.js";

const sceneFrames = CHOBBLEFEST_VIDEO.scenes.map(
  (_, index) =>
    index *
      (CHOBBLEFEST_VIDEO.sceneDurationInFrames -
        CHOBBLEFEST_VIDEO.transitionDurationInFrames) +
    60,
);

withVideoAssets(() => {
  buildVideoImage();
  for (const [index, frame] of sceneFrames.entries()) {
    const number = String(index + 1).padStart(2, "0");
    runRemotion([
      "still",
      CHOBBLEFEST_VIDEO.id,
      `videos/chobblefest-${number}.png`,
      `--frame=${frame}`,
    ]);
  }
});
