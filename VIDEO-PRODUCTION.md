---
permalink: false
layout: null
---

# Video production

This guide records how the promo reels are made, so the next round of tweaks
can start from a written-down process instead of archaeology. The rendering
system itself is documented at [`scripts/video/README.md`](scripts/video/README.md).

## The reels

| Composition        | Output                          | Length  | Voiceover |
| ------------------ | ------------------------------- | ------- | --------- |
| `ChobbleFestReel`  | `videos/chobblefest-reel.mp4`   | 65.5 s  | none      |
| `SetupJourneyReel` | `videos/setup-journey-reel.mp4` | 65.5 s  | none      |
| `WhyChobbleReel`   | `videos/why-chobble-reel.mp4`    | 91.5 s  | narrated  |

All reels are 1080x1920 at 30 fps, h264 (CRF 18) with AAC audio. The
`videos/` directory is ignored because everything in it can be rebuilt from
source.

## How the narrated reel is built

Four files carry the whole product:

1. **The deck** - `scripts/why-chobble-slides.js`. One record per scene.
   Each record holds:
   - `heading` and `body` - the on-screen text, painted as paper strips.
   - `narration` - the words the voiceover speaks. Write numbers as words
     ("six point nine five percent") so the speech model reads them
     naturally; keep the exact figures in `body`.
   - `palette` - four colours: background, text, accent, muted.
   - `scenario` - the screenshot scenario **file name** under
     `scripts/screenshots/` that captures the visuals.
   - `source` - the **image basename** the scenario writes (usually the
     scenario's exported `name`, which often differs from the file name).
   - `verticalPan` - set `true` for tall captures; the full-width pan
     replaces shrinking the whole page into the frame. Check the committed
     PNG height under `images/screenshots/`; anything over about 1000 px
     reads better panned.
   - `slug` - the narration file name and the scene's key in the durations
     baseline.
2. **The voiceover audio** - `.video-narration/<slug>.wav`, spoken by
   `bun scripts/video/narration.js` (task `video:narrate`). Not committed;
   regenerate them with the OpenRouter key in `OPENROUTER_API_KEY` or at
   `/run/secrets/openrouter_api_key`. Each pass costs well under one dollar
   (about USD 0.006 per scene with model `openai/gpt-audio`, voice `echo`).
3. **The durations baseline** - `scripts/why-chobble-durations.json`,
   committed. `narration.js` rewrites it with the measured length of every
   clip. `scripts/video/scenes.js` reads it to time the composition, so a
   render never needs the API key. A missing slug falls back to a word-count
   estimate of 2.6 words per second.
4. **The composition** - built by `createNarratedScenes` in
   `scripts/video/scenes.js`, registered as `WhyChobbleReel` in
   `root.jsx`. Each scene runs: 12 frames of lead-in, the voiceover, and 18
   frames of tail, never shorter than the 150-frame entrance animation, with
   15-frame cross-fades between scenes.

## Tweak recipes

| What changes                       | What to edit                                   | Then run                                                             |
| ---------------------------------- | ---------------------------------------------- | -------------------------------------------------------------------- |
| On-screen copy                    | `heading` / `body` in the slides deck          | `bun run video:render:why` (no narration spend)                     |
| Spoken copy                        | `narration` in the slides deck                 | `rm .video-narration/<slug>.wav` for changed slugs, `video:narrate`, then render |
| Scene order, colours, screenshot   | reorder / edit records in the slides deck      | render (captures and narration are reused unchanged)                |
| The voice                          | `VOICE` in `scripts/video/narration.js`         | `bun run video:narrate --force`, then render                        |
| Whole reel faster or slower       | `NARRATION_LEAD_IN_FRAMES` / `NARRATION_TAIL_FRAMES` in `scenes.js` | render                                                    |
| Scene pacing of one slide          | shorten its `narration` text                   | delete that clip, `video:narrate`, render                           |
| A different screenshot             | set `scenario` and `source` (see above)        | render                                                                |
| A new scenario                     | add a file in `scripts/screenshots/`           | render (the capture step picks it up from the slide record)         |

Voiceover copy follows the site voice guide: third person ("Chobble",
never "we"), no hype words, no em dashes, every number verified against the
site's pages. The scene claims in this reel are sourced from
`pages/features/no-per-ticket-fees.md`, `pages/compared-to/eventbrite.md`
and the organiser reviews those pages quote.

## Rendering

The standard path is the container:

```bash
bun run video:narrate
bun run video:render:why
```

`video:render:why` re-speaks any missing clips, captures fresh screenshots
for every scene from the Tickets repo checkout next door, then renders
through Docker.

### Rendering locally on NixOS

The Docker route works everywhere else; on a NixOS machine without Docker,
four local workarounds make rendering work. They live in `misc/` (ignored)
so they do not affect the repository:

1. **Run the Remotion CLI through bun** - already fixed in
   `scripts/video/local.js`, because the devenv has no standalone `node`
   for the CLI's bin stub to resolve.
2. **Point Remotion at the devenv Chromium** - export
   `CHROMIUM_EXECUTABLE` to the Chromium path that a Tickets `devenv shell`
   prints (`remotion.config.js` passes it to Remotion). Remotion's own
   browser download cannot run on NixOS.
3. **Patch the bundled compositor** - `misc/patch-compositor.sh` wraps the
   `@remotion/compositor-linux-x64-gnu` binaries in a loader shim through
   the system glibc (`ld-linux-x86-64.so.2`) with the libstdc++, zlib and
   bundled libav libraries on the path. Re-run it after every
   `bun install`, which restores the originals. `misc/run-compositor.sh`
   tests one wrapped binary directly (`ffmpeg -version`).
4. **Render in chunks** - a full continuous local render reliably
   deadlocks with the last few frames in the queue ("Rendered 2732/2738"
   forever; cause not found). Small ranges always finish, so
   `misc/chunked-render.sh` renders four ranges chosen at silence points
   (frames 0-298, 299-1448, 1449-2409, 2410-2737) and joins them with
   `ffmpeg -f concat -c copy`. The chunk boundaries sit between voiceover
   clips, so the joins are inaudible.

With those in place the local render command is:

```bash
devenv shell env CHROMIUM_EXECUTABLE=<nix-store chromium> \
  bun scripts/video/local.js render WhyChobbleReel videos/why-chobble-reel.mp4
```

or, when the tail stall bites, `bash misc/chunked-render.sh`.

The `misc/` scripts embed Nix store paths for glibc, zlib and Chromium.
After a NixOS update changes those paths, refresh the constants in the
scripts and re-run `misc/patch-compositor.sh`.

### Verifying a new cut

1. `ffprobe` the output: duration near the intended length, one h264 and
   one aac stream.
2. Step through frames from each scene (`ffmpeg -ss <t> -i <mp4> -frames:v 1
   out.png`, or any video player) and check the heading, body, scene counter
   and screenshot composition.
3. `ffmpeg -i <mp4> -af volumedetect -f null -` for audio presence, or
   spot-check a scene's midpoint for narration loudness.
4. `bun run test` - `test/video-scenes.test.js` pins scene counts,
   addresses, narration timing and the durations formula.

## Costs

The voiceover is the only paid input: roughly USD 0.06 per full narration
pass (11 clips) on the model used, so iterations are effectively free. The
screenshot captures and rendering cost nothing but time: about 10 minutes
to capture all scenes and 15 to 45 minutes to render, depending on machine
load.
