# CLAUDE.md - AI Assistant Guide for Chobble Client

## Project Overview

**Chobble Client** is a content repository that merges with the [Chobble Template](https://git.chobble.com/chobble/chobble-template) at build time to produce a static website. It uses **Bun** as the package manager and runtime.

### Architecture

This project separates content from template:
- **This repo** (`chobble-client`): Site content, custom styles, build scripts
- **Chobble Template**: Eleventy SSG, themes, components, collections

At build time, GitHub Actions merges both repos via sparse-checkout, then runs Eleventy.

---

## Quick Reference

### Essential Commands
```bash
bun install          # Install dependencies (MUST use bun, not npm)
bun run build        # Build the site
bun run serve        # Development server with hot reload
bun run test         # Run tests
bun run lint         # Check code with Biome
bun run lint:fix     # Auto-fix lint issues
bun run cpd          # Copy-paste detection on scripts/
```

### Directory Structure
```
chobble-client/
├── scripts/         # Build utilities and tooling
├── _data/           # Site configuration (site.json, meta.json)
├── pages/           # Content pages (markdown)
├── css/             # Custom stylesheets
├── images/          # Site images
├── .pages.yml       # CMS configuration
├── biome.json       # Linting config (extends js-toolkit base)
├── bunfig.toml      # Bun test configuration
└── .jscpd.json      # Copy-paste detection config
```

---

## Functional Programming Style

This codebase uses a functional programming approach with curried, composable functions. **This is ideal for a static site generator**, which is fundamentally a series of transforms with no mutable state:

```
Content Files → Parse → Transform → Filter → Sort → Render → Static HTML
```

Each step is a pure function. Data flows through pipelines without mutation.

### Why FP for Static Sites?

1. **Transforms, not mutations**: SSGs transform input files to output files
2. **Composability**: Build complex operations from simple, testable pieces
3. **Predictability**: Pure functions always produce the same output
4. **Debuggability**: No hidden state changes to track down

### Import Aliases

Use the `#fp` alias for functional utilities:

```javascript
import { pipe, filter, map, unique } from "#fp";
import { memoize } from "#fp/memoize";
import { sortBy } from "#fp/sorting";
```

---

## Functional Utilities (`#fp`)

### Core Composition

| Function | Purpose | Example |
|----------|---------|---------|
| `pipe(...fns)` | Compose functions left-to-right | `pipe(filter(x), map(y))(arr)` |

### Curried Array Operations

| Function | Purpose | Example |
|----------|---------|---------|
| `filter(pred)` | Curried array filter | `filter(x => x > 0)(arr)` |
| `map(fn)` | Curried array map | `map(x => x * 2)(arr)` |
| `flatMap(fn)` | Curried array flatMap | `flatMap(x => [x, x])(arr)` |
| `reduce(fn, init)` | Curried array reduce | `reduce((a, x) => a + x, 0)(arr)` |
| `sort(cmp)` | Non-mutating sort | `sort((a, b) => a - b)(arr)` |
| `sortBy(key)` | Sort by property/getter | `sortBy('name')(users)` |

### Deduplication & Filtering

| Function | Purpose | Example |
|----------|---------|---------|
| `unique(arr)` | Remove duplicates | `unique([1, 1, 2])` → `[1, 2]` |
| `uniqueBy(fn)` | Dedupe by key | `uniqueBy(x => x.id)(arr)` |
| `compact(arr)` | Remove falsy values | `compact([1, null, 2])` → `[1, 2]` |
| `filterMap(pred, fn)` | Filter + map in one pass | `filterMap(x => x > 0, x => x * 2)(arr)` |

### Membership & Exclusion

| Function | Purpose | Example |
|----------|---------|---------|
| `memberOf(vals)` | Membership predicate | `filter(memberOf(['a', 'b']))(arr)` |
| `notMemberOf(vals)` | Exclusion predicate | `filter(notMemberOf(['x']))(arr)` |
| `exclude(vals)` | Filter out values | `exclude(['a'])(arr)` |
| `pick(keys)` | Extract object keys | `pick(['a', 'b'])(obj)` |

### Caching & Memoization

| Function | Purpose | Example |
|----------|---------|---------|
| `memoize(fn, opts?)` | Cache results | `memoize(fn, { cacheKey })` |
| `indexBy(getKey)` | Build cached lookup | `indexBy(x => x.id)(arr)` |
| `groupByWithCache(fn)` | Build cached grouping | `groupByWithCache(x => x.tags)(arr)` |

### Utilities

| Function | Purpose | Example |
|----------|---------|---------|
| `pluralize(s, p?)` | Format count | `pluralize('item')(3)` → `"3 items"` |
| `accumulate(fn)` | Safe array building in reduce | See below |

### Example: Processing Content

```javascript
import { pipe, filter, map, sortBy, unique } from "#fp";

// Process blog posts: filter drafts, extract tags, sort by date
const processedPosts = pipe(
  filter(post => !post.draft),
  sortBy('date'),
  map(post => ({ ...post, tags: post.tags || [] }))
)(posts);

// Get all unique tags
const allTags = pipe(
  flatMap(post => post.tags),
  unique
)(processedPosts);
```

### Safe Array Building with `accumulate()`

Avoid the `noAccumulatingSpread` lint error:

```javascript
// BAD - O(n^2) performance
const ids = items.reduce((acc, item) =>
  item.id ? [...acc, item.id] : acc, []);

// GOOD - O(n) performance
import { accumulate } from "#fp";
const ids = accumulate((acc, item) => {
  if (item.id) acc.push(item.id);
  return acc;
})(items);
```

---

## Linting Rules (Biome)

The project enforces strict code quality via Biome.

### Must Follow

| Rule | Requirement |
|------|-------------|
| `useArrowFunction` | Use arrow functions |
| `useTemplate` | Use template literals |
| `useConst` | Use const (or let when reassignment needed) |
| `noVar` | Never use var |
| `noDoubleEquals` | Use `===`, not `==` |
| `noForEach` | Use `for...of` or curried `map`/`filter` |
| `noAccumulatingSpread` | Use `accumulate()` helper |
| `noUnusedImports` | Remove unused imports |
| `noUnusedVariables` | Remove unused variables |
| `noExcessiveCognitiveComplexity` | Max complexity: 7 (30 in tests) |
| `noConsole` | No console.log except in scripts/ |

### Formatting
- 2-space indentation
- Run `bun run lint:fix` to auto-format

---

## Anti-Patterns to Avoid

1. **Don't use npm** - This project requires Bun
2. **Don't use `forEach`** - Use `for...of` loops or curried `map`/`filter`
3. **Don't accumulate with spread** - Use `accumulate()` helper for O(1) operations
4. **Don't use `var`** - Always use `const` (or `let` when reassignment needed)
5. **Don't use `==`** - Always use `===`
6. **Don't add console.log** - Except in build scripts
7. **Don't exceed complexity 7** - Break complex functions into smaller pieces
8. **Don't mutate data** - Create new objects/arrays instead

---

## When Making Changes

1. **Read existing code first** - Understand patterns before modifying
2. **Follow existing conventions** - Match the style of surrounding code
3. **Use functional patterns** - Prefer `pipe`, curried functions, immutability
4. **Run linter** - `bun run lint:fix` to auto-fix issues
5. **Keep functions small** - Stay under complexity limit of 7
6. **Use the #fp utilities** - They're optimized and well-tested

---

## Content Style Guide

This guide applies to all text on the site: headings, body copy, button labels,
calls to action, meta descriptions, hero text, captions — everything.

### Who the audience is

The audience is **event organisers** who are considering using Chobble Tickets
to run their events. Write for them.

Attendees are not the audience. The platform is white-labelled by default, so
attendees may not know they are using Chobble Tickets at all. Do not write for
them or about them as a secondary audience.

---

### Language and reading level

Write so that a 10 year old could understand it. This does not mean being
condescending. It means:

- Use short sentences
- Use common words
- Put one idea in each sentence
- Use active voice ("Chobble encrypts your data" not "your data is encrypted by Chobble")
- Explain technical terms the first time you use them

**Avoid these words and phrases entirely:**

| Avoid | Use instead |
|-------|-------------|
| utilise | use |
| leverage | use |
| ecosystem | platform, or be specific |
| empower | be specific about what the person can do |
| seamlessly | remove it |
| robust | be specific about what makes it reliable |
| intuitive | remove it |
| cutting-edge | remove it |
| best-in-class | remove it |
| solution | tool, platform, or software |
| actually | remove it — speculative and inauthentic |

---

### British English

- Spell with British conventions: organisation, colour, realise, licence (noun),
  license (verb), -ise endings not -ize
- Use £ for prices
- Use day/month/year for dates

---

### Tone

Write neutral, factual statements. Do not:

- Use exclamation marks
- Use rhetorical questions ("Ready to take control?")
- Make emotional appeals
- Use superlatives ("the best", "the most powerful", "unlike anyone else")
- Use filler words ("simply", "just", "of course", "easily")
- Use three-word punchy slogans
- Use alliteration for effect

State what is true. Let the facts make the argument.

**Bad:** "Event ticketing that respects you"
**Good:** "Open source event ticketing with no per-ticket fees"

**Bad:** "Keep your data, your revenue, and your sanity"
**Good:** "Your attendee data stays with you"

**Bad:** "Ready to sell tickets?"
**Good:** "Get started" or "Sign up"

**Bad:** "A platform that respects your customers"
**Good:** "Attendee data is encrypted and only you can read it"

---

### On data, ownership, and power

Be direct about how commercial platforms work. Do not soften it. Do not ascribe
motive or intent to other companies — just state observable facts about what
happens.

The facts to state are:
- What data is collected
- Who holds it
- What happens with it
- Who benefits

**Bad (ascribes intent):** "Eventbrite wants to own your audience"
**Bad (too vague):** "Eventbrite has access to attendee data"
**Good (plain fact):** "Eventbrite stores your attendees' data and uses it to
market other events to them"

When explaining why Chobble works differently, give the structural reason:

**Bad:** "We have no interest in your data"
**Good:** "We don't collect attendee data. Our income comes from the annual fee
you pay, not from advertising or data sales."

The structural facts are:
- Chobble is funded by flat annual fees
- There is no advertising revenue
- There is no data economy subsidising the price
- Chobble is a community interest company, which means profit cannot be
  extracted by shareholders

State these as facts when relevant. Do not frame them as virtues or boasts.

---

### On competitors

Be honest and fair. List genuine advantages that competitors have. List genuine
disadvantages. Do not exaggerate in either direction.

When stating something negative about a competitor, state it as a fact, not an
accusation or characterisation.

**Bad:** "Eventbrite traps your attendees in their ecosystem"
**Good:** "Eventbrite encourages attendees to follow other events on the
platform. Your attendees will receive emails from Eventbrite about other
organisers' events."

**Bad:** "Unlike bloated platforms like Eventbrite..."
**Good:** "Eventbrite has more features than Chobble Tickets in some areas —
see the full comparison below."

When a competitor genuinely does something well, say so.

Do not include specific details about competitors that are likely to change
within a few months — ownership structures, funding rounds, named executives,
or pricing that changes frequently. Specific prices are fine when they are
verified and dated.

---

### Technical terms

Explain technical terms the first time they appear on a page. Link to more
detail where it exists. Do not lead with jargon.

**Bad:** "Hybrid RSA-OAEP + AES-256-GCM encryption protects your attendees"
**Good:** "Your attendees' personal data is encrypted. Even if someone got
access to the server, they could not read the data without your private key.
[The encryption uses RSA-OAEP + AES-256-GCM](link)."

---

### Self-determination and control

When describing features that give organisers control — self-hosting, open
source code, data ownership, choosing your own email provider — describe them
in terms of what the organiser can actually do, not in abstract terms about
freedom or empowerment.

**Bad:** "We believe in giving you full control"
**Good:** "You can run the platform on your own servers. No data leaves your
infrastructure."

**Bad:** "Freedom to choose your email provider"
**Good:** "You choose which email provider sends your confirmations — Resend,
Postmark, SendGrid, or Mailgun."
