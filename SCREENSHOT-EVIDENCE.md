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

The scheduled `Update ticket evidence` workflow needs a fine-grained GitHub
token in the `TICKETS_EVIDENCE_TOKEN` repository secret. Give it Actions read
access to `chobbledotcom/tickets`. The built-in site token cannot download an
artifact from another repository.

Legacy product screenshots remain under `scripts/screenshots/` and are made
with `bun run screenshot:scenarios`. Evidence captures must not be copied into
that directory. `_data/screenshot_inventory.json` records which system owns
each retained screenshot.
