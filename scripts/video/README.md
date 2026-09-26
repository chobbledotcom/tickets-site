# Social videos

Remotion turns the site's existing screenshot scenarios and slide records into
videos. The video code consumes the same images, copy, palettes and fonts as
the static social-image tools.

The decks, narration, timing and the whole production workflow, including
the local NixOS rendering route, are documented in
[`VIDEO-PRODUCTION.md`](../../VIDEO-PRODUCTION.md).

## Render

```bash
bun run video:render
```

This builds a Debian container so rendering also works on NixOS. It writes the
finished Reel to `videos/chobblefest-reel.mp4`. The `videos/` directory is
ignored because every file in it can be rebuilt from source. Before each
render, the live app is captured into `.video-build/`. The temporary DOM layer
images are baked into the container and then removed.

Each scene keeps its five-second entrance and depth animation, then holds for
two more seconds with only slight movement so the text and page can be read.
Tall page captures use a full-width vertical pan instead of shrinking the whole
page into the frame.

Render the complete managed-site setup journey with:

```bash
bun run video:render:setup
```

This writes `videos/setup-journey-reel.mp4`. It captures signup, the setup
email, first-run setup, Stripe settings, event creation, attendee checkout,
confirmation and the attendee ticket from fresh throwaway app instances.

Render the narrated "why Chobble Tickets exists" reel with:

```bash
bun run video:narrate
bun run video:render:why
```

This writes `videos/why-chobble-reel.mp4`. The slides live in
`scripts/why-chobble-slides.js`; each one pairs on-screen copy with a
`narration` line. `video:narrate` speaks each line once through OpenRouter's
audio model (set `OPENROUTER_API_KEY`, or keep the key at
`/run/secrets/openrouter_api_key`), stores the WAV files in
`.video-narration/`, and records their lengths so scene timing tracks the
voiceover. A re-run skips files that already exist; pass `--force` to speak
every line again. `video:render:why` regenerates missing narration, then
renders through the same container as the other reels.

Render one reviewed frame from every scene with:

```bash
bun run video:stills
```

On a system where Remotion and Chrome run directly, open the editor or render
without Docker with:

```bash
bun run video:studio
```

The local runner calls the Remotion CLI through bun. On NixOS, export
`CHROMIUM_EXECUTABLE` to a system Chromium; `remotion.config.js` passes it to
Remotion in place of its own browser download, which cannot run there.

## Structure

- `scenes.js` builds render-ready scene records and owns composition timing.
- `social-video.jsx` sequences any list of social scenes with transitions,
  and plays a scene's voiceover when it carries one.
- `social-scene.jsx` combines the product image and text layout.
- `layered-screenshot.jsx` animates DOM-derived background, control and text
  captures as depth planes which settle into the complete page.
- `paper-text.jsx` paints all paper strips below a separate text layer, then
  reveals and animates both layers together from left to right.
- `text-layout.js` keeps the text geometry and safe line spacing in one place.
- `root.jsx` registers each finished composition.
- `render.js` runs any Remotion command in the shared container.
- `narration.js` speaks the Why Chobble slides through OpenRouter, stores
  the WAV files in `.video-narration/`, and updates the committed
  `scripts/why-chobble-durations.json` baseline those scenes are timed from.

Add another video by defining its data beside `CHOBBLEFEST_VIDEO`, then
registering a composition in `root.jsx`. Reuse `SocialVideo` when the existing
Instagram style fits. Add a separate scene component when a video needs a
different visual language rather than adding special cases to `SocialScene`.
