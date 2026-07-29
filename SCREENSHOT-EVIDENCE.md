---
permalink: false
layout: null
---

# Screenshot evidence

Cucumber evidence screenshots are of the Tickets app, taken while its own
Cucumber cases run. What each capture is - the case, the page, the part of the
page - belongs to the app. What it looks like belongs here, in
`evidence-themes/`, because the branding is a demonstration for this site.

The scheduled workflow checks the app out, runs its capture task with this
directory, and commits what comes back. Site builds themselves do not contact
GitHub or the app repository.

The artifact directory must contain `manifest.json` and its referenced files
under `assets/`. Import it with:

```bash
# in a checkout of the app
deno task specs:evidence --themes <this repo>/evidence-themes

# then here
bun run evidence:import --from <the app>/reports/evidence
```

Validate an artifact without changing the site with:

```bash
bun run evidence:validate --from /home/user/git/tickets-6/reports/evidence
```

Run `bun run evidence:validate` without `--from` to check committed imports.
The check reads the site-owned mapping, generated data, lock and image bytes.
It does not use the network.

## The rules

The app's Feature files are the source of truth for what the site claims about
a screenshot. These rules keep the two in step, and each one is enforced by a
check rather than by review alone. A capture that cannot follow them is not
ready to be evidence; upgrade the story until it can.

1. **One mapping entry per capture.** `_data/ticket_evidence_map.json` holds
   every sentence the site writes about a screenshot: `alt`, `caption`,
   `galleryCaption`, `socialHeading` and `socialBody`. Enforced by
   `scripts/evidence/mapping.js`.
2. **Repeats must match the mapping.** The feature page, the gallery entry and
   the social card all repeat those words. Enforced by
   `scripts/evidence/copy.js` and `test/evidence-copy.test.js`.
3. **Only two pages may describe a capture's images.** Its own page and
   `pages/gallery.md`. Any other page naming the image fails the check, so a
   migrated screenshot cannot leave a stale description behind.
4. **Every capture is in the gallery, exactly once.**
5. **Every capture has audited facts** under its `socialKey` in
   `facts/social-images.js`.
6. **A mapped page shows its screenshot once**, in one evidence block, and
   names it nowhere else. A second block or a Markdown image renders the same
   screenshot twice where nothing would check its words.
7. **The story and the words were read together.** Each mapping entry records
   `reviewed`, a digest of the capture's story, rule, case and steps *and* the
   words the site writes about it, including the page's prose. New pixels for
   the same story do not change it; a reworded rule, a reworded caption or
   edited page prose all do.
8. **The source link comes from the story.** The `(src)` link beside a
   screenshot is built from the Feature uri the app's manifest carries, so a
   renamed Feature moves the link rather than breaking it: the import rewrites
   the page's `figure_caption` link, leaving the caption's words alone. Nothing
   writes that path by hand.
9. **A changed story or changed words stop the import.**
   `bun run evidence:import` refuses an artifact whose pair no longer matches
   `reviewed`, and `bun run evidence:validate` refuses the committed state.
   Nothing writes that digest except a person running `--accept`.
10. **The social card is locked to the copy it was drawn from.** Its heading
    and body are rendered into pixels during an import, so the lock records
    them. Editing that copy afterwards leaves a card showing words nobody
    wrote, and the committed-state check refuses it until the card is drawn
    again.
11. **How a screenshot looks belongs here, not to the app.** Each capture is
    taken in `evidence-themes/<capture id>.css`, which dresses the app's page
    in an organiser's branding. The app is handed this directory and refuses a
    capture that has no file in it, so a theme cannot go missing quietly. The
    app decides what a capture is; this repository decides what it looks like.

## Reviewing a capture

Put the app's story and the site's words side by side:

```bash
bun run evidence:review                    # every capture
bun run evidence:review qr-code-check-in   # one capture
```

The report prints the story, rule, case and steps, then the alt text, captions,
social copy and the page's own prose, and says whether that story and those
words were last read together.
It reads the committed data by default; pass `--from <artifact-dir>` to read a
new artifact before importing it.

Once the words are right for the story, record that the two were read together.
Editing any of those words afterwards clears the record, so a caption reworded
months later gets the same second look as a reworded rule.
Accept from the same place you reviewed: dropping `--from` records the story in
the committed data, which is the old one, and the new artifact stays rejected.

```bash
# a story that changed in an artifact you are importing
bun run evidence:review qr-code-check-in --from <artifact-dir> --accept

# a story already committed to the site
bun run evidence:review qr-code-check-in --accept
```

Accepting is the act of having read them together. Do not stamp a digest without reading
the report, and do not automate the stamp: the whole point is that a person
(or an LLM asked to compare them) has decided the end-user wording still says
only what the case proves.

The scheduled `Update ticket evidence` workflow needs a fine-grained GitHub
token in the `TICKETS_EVIDENCE_TOKEN` repository secret. Give it Contents read
access to `chobbledotcom/tickets`, which is what checking the app out takes.
The built-in site token cannot read another repository.

Legacy product screenshots remain under `scripts/screenshots/` and are made
with `bun run screenshot:scenarios`. Evidence captures must not be copied into
that directory. `_data/screenshot_inventory.json` records which system owns
each retained screenshot.
