---
permalink: false
layout: null
---

# Presentation facts

## Icon-link splits need at least five items

A `split-icon-links` figure renders its `figure_items` as one vertical list
beside the text column. Three short rows leave the figure side visibly empty, so
use at least five useful items. Do not add filler links to meet the count; use a
different block when the subject only has three relevant facts.

References:

- `chobble-template/src/_includes/design-system/split.html:36-38`
- `chobble-template/src/_includes/design-system/split.html:67-68`
- `chobble-template/src/_includes/design-system/blocks/icon-links.html:30-43`

## Stat values appear above their labels

Each stat stores a `label` and `value`, but CSS displays the large value first
and the smaller label underneath it. Read the pair in that visual order before
publishing it. Both lines should form a clear statement without relying on the
field names in the source.

Prefer:

- Value: `Take deposits`
- Label: `Or require full payment`

Avoid:

- Value: `0 or part`
- Label: `Deposit at booking`

References:

- `chobble-template/src/_includes/design-system/blocks/stats.html:27-41`
- `chobble-template/src/css/design-system/_stats.scss:8-10`
- `chobble-template/src/css/design-system/_stats.scss:32-50`
