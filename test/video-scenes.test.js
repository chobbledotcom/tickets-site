import { describe, expect, test } from "bun:test";
import { CHOBBLEFEST_SLIDES } from "../scripts/chobblefest-slides.js";
import {
  CHOBBLEFEST_VIDEO,
  VIDEO_FPS,
  VIDEO_FORMATS,
  createSocialScenes,
  videoDurationInFrames,
} from "../scripts/video/scenes.js";
import {
  PAPER_TEXT_LAYERS,
  PAPER_TEXT_PADDING,
  SOCIAL_TEXT_STYLES,
} from "../scripts/video/text-layout.js";

describe("social video scenes", () => {
  test("defines the Instagram Reel canvas", () => {
    expect(VIDEO_FORMATS.reel).toEqual({ height: 1920, width: 1080 });
    expect(VIDEO_FPS).toBe(30);
  });

  test("overlaps each transition without shortening a scene", () => {
    expect(videoDurationInFrames(10, 150, 15)).toBe(1365);
  });

  test("rejects timing that would hide a scene", () => {
    expect(() => videoDurationInFrames(2, 15, 15)).toThrow(
      "A transition must be shorter than a scene.",
    );
  });

  test("turns slideshow records into numbered video scenes", () => {
    const scenes = createSocialScenes(CHOBBLEFEST_SLIDES);

    expect(scenes).toHaveLength(10);
    expect(scenes[0]).toEqual({
      ...CHOBBLEFEST_SLIDES[0],
      address: "tickets.chobble.com  01/10",
      image: "images/screenshots/chobblefest-welcome.png",
      layers: [
        ".video-build/images/screenshots/chobblefest-welcome__layer-background.png",
        ".video-build/images/screenshots/chobblefest-welcome__layer-controls.png",
        ".video-build/images/screenshots/chobblefest-welcome__layer-text.png",
      ],
    });
    expect(scenes[9].address).toBe("tickets.chobble.com  10/10");
  });

  test("defines the complete ChobbleFest composition", () => {
    expect(CHOBBLEFEST_VIDEO).toEqual({
      durationInFrames: 1365,
      fps: 30,
      height: 1920,
      id: "ChobbleFestReel",
      sceneDurationInFrames: 150,
      scenes: createSocialScenes(CHOBBLEFEST_SLIDES),
      transitionDurationInFrames: 15,
      width: 1080,
    });
  });

  test("leaves room for letter tails between paper-backed lines", () => {
    expect(PAPER_TEXT_PADDING).toBe("0 0.07em");
    expect(SOCIAL_TEXT_STYLES.heading.lineHeight).toBe(1.12);
    expect(SOCIAL_TEXT_STYLES.body.lineHeight).toBe(1.16);
    expect(SOCIAL_TEXT_STYLES.address.lineHeight).toBe(1.12);
  });

  test("paints every letter above every paper strip", () => {
    expect(PAPER_TEXT_LAYERS.backdrop).toEqual({
      color: "transparent",
      position: "relative",
      zIndex: 0,
    });
    expect(PAPER_TEXT_LAYERS.foreground).toEqual({
      inset: 0,
      position: "absolute",
      zIndex: 1,
    });
  });

});
