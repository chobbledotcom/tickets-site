# Social videos

Remotion turns the site's existing screenshot scenarios and slide records into
videos. The video code consumes the same images, copy, palettes and fonts as
the static social-image tools.

## Render

```bash
bun run video:render
```

This builds a Debian container so rendering also works on NixOS. It writes the
finished Reel to `videos/chobblefest-reel.mp4`. The `videos/` directory is
ignored because every file in it can be rebuilt from source. Before each
render, the live app is captured into `.video-build/`. The temporary DOM layer
images are baked into the container and then removed.

Render one reviewed frame from every scene with:

```bash
bun run video:stills
```

On a system where Remotion and Chrome run directly, open the editor or render
without Docker with:

```bash
bun run video:studio
bun run video:render:local
```

## Structure

- `scenes.js` builds render-ready scene records and owns composition timing.
- `social-video.jsx` sequences any list of social scenes with transitions.
- `social-scene.jsx` combines the product image and text layout.
- `layered-screenshot.jsx` animates DOM-derived background, control and text
  captures as depth planes which settle into the complete page.
- `paper-text.jsx` paints all paper strips below a separate text layer, then
  reveals and animates both layers together from left to right.
- `text-layout.js` keeps the text geometry and safe line spacing in one place.
- `root.jsx` registers each finished composition.
- `render.js` runs any Remotion command in the shared container.

Add another video by defining its data beside `CHOBBLEFEST_VIDEO`, then
registering a composition in `root.jsx`. Reuse `SocialVideo` when the existing
Instagram style fits. Add a separate scene component when a video needs a
different visual language rather than adding special cases to `SocialScene`.
