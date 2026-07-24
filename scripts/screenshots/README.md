# Screenshot scenarios

Each `.js` file in this directory is a retained scenario for the Tickets app.
The scenario runner creates a mobile product screenshot and, by default, a
Facebook-sized social image in `images/screenshots/`.

```bash
bun run screenshot:scenarios industry-skip-hire
bun run screenshot:scenarios industry-skip-hire --no-social
```

The scenario filename describes the use case. Its exported `name` is the output
image basename. Industry landing-page scenarios and images use the `industry-`
prefix so they remain grouped in the existing flat directories.

Files beginning with `_` contain shared scenario code and are not discovered as
scenarios. General app setup helpers remain in `helpers.js`.

Existing scenario and image names stay unchanged because content pages already
refer to their public `/images/screenshots/` URLs. A future directory migration
would need to update the runner, social-image tooling and every content
reference together.
