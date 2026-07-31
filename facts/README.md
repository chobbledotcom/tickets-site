---
permalink: false
layout: null
---

# Product facts

This directory records concrete claims used by the marketing site. It is
excluded from the Eleventy source merge and is not published.

`social-images.js` groups facts by social screenshot. Every source reference is
relative to this repository and includes a line range.

Facts describe what the source code does. They do not turn a scenario-specific
example into a general product claim. When the app changes, update the fact,
its source references and any copy that depends on it together.

`presentation.md` records layout rules learned from reviewing rendered pages.
These rules are design judgements rather than product capabilities.

## Each fact records its own commit

A line range only means something in one checkout, so each fact carries the
Tickets commit it was read at. A fact added today records today's commit, and
an older fact keeps the commit it was actually read at.

This is deliberately per fact rather than per file. One recorded commit for the
whole file meant that adding a fact against a newer checkout either left the
new citation unresolvable, or re-stamped every older citation as verified at a
commit nobody had re-read them in.

Re-auditing a fact means reading its sources again in a newer checkout and
updating its `audited` commit. Do not update the commit without reading.

```bash
bun run facts:verify                      # sources resolve at their own commit
bun run facts:verify --tickets ../tickets
```

`facts:verify` needs a Tickets checkout with those commits fetched. It checks
that every cited file exists and is long enough. It cannot check that the lines
say what the fact says, which is a reading rather than a lookup.

## Copy is read against the facts behind it

Each entry records a `reviewed` digest covering the social card's heading and
body and every fact offered as evidence for them. Changing either side breaks
the digest, so the pair has to be read again.

```bash
bun run facts:review multi-day-hire
bun run facts:review multi-day-hire --accept
```

The earlier check asked only whether a key had some facts. A card could pass it
while claiming something none of its facts mentioned: one heading said every
change was written down while its own fact said the view holds the latest 200
entries. Accepting is the act of having read the two together, and nothing else
writes that digest.
