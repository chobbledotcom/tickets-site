---
permalink: false
layout: null
---

# Screenshot evidence

Cucumber evidence screenshots are made and tested by the Tickets app. The site
imports a published artifact and commits the resulting files. Site builds do
not contact GitHub or the app repository.

The artifact directory must contain `manifest.json` and its referenced files
under `assets/`. Import it with:

```bash
bun run evidence:import --from /home/user/git/tickets-6/reports/evidence
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
6. **The site's words are written against a known story.** Each mapping entry
   records `reviewedNarrative`, a digest of the capture's story, rule, case and
   steps. New pixels for the same story do not change it; a reworded rule or a
   changed step does.
7. **A changed story stops the import.** `bun run evidence:import` refuses an
   artifact whose story no longer matches `reviewedNarrative`, and
   `bun run evidence:validate` refuses the committed state. Nothing writes that
   digest except a person running `--accept`.

## Reviewing a capture

Put the app's story and the site's words side by side:

```bash
bun run evidence:review                    # every capture
bun run evidence:review qr-code-check-in   # one capture
```

The report prints the story, rule, case and steps, then the alt text, captions
and social copy, and says whether the words were written against that story.
It reads the committed data by default; pass `--from <artifact-dir>` to read a
new artifact before importing it.

Once the words are right for the story, record that the story has been read:

```bash
bun run evidence:review qr-code-check-in --accept
```

Accepting is the act of having read it. Do not stamp a digest without reading
the report, and do not automate the stamp: the whole point is that a person
(or an LLM asked to compare them) has decided the end-user wording still says
only what the case proves.

The scheduled `Update ticket evidence` workflow needs a fine-grained GitHub
token in the `TICKETS_EVIDENCE_TOKEN` repository secret. Give it Actions read
access to `chobbledotcom/tickets`. The built-in site token cannot download an
artifact from another repository.

Legacy product screenshots remain under `scripts/screenshots/` and are made
with `bun run screenshot:scenarios`. Evidence captures must not be copied into
that directory. `_data/screenshot_inventory.json` records which system owns
each retained screenshot.
