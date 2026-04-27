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
calls to action, meta descriptions, hero text, captions - everything.

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
| actually | remove it - speculative and inauthentic |

---

### British English

- Spell with British conventions: organisation, colour, realise, licence (noun),
  license (verb), -ise endings not -ize
- Use £ for prices
- Use day/month/year for dates

---

### Tone

Write like Wikipedia. Neutral, factual, third-person. The facts make the
argument; the prose stays out of the way. Every sentence should be one a
disinterested encyclopaedist could have written.

#### Voice and point of view

Refer to the product as "Chobble Tickets" and to the company as "Chobble".
Do not use "we", "our", or "us". The site speaks about Chobble, not from
inside it.

"You" and "your" are fine when addressing the reader (the event organiser).
They are the most direct way to describe what the reader can do.

**Bad:** "We don't collect attendee data. Our income comes from the annual fee
you pay."
**Good:** "Chobble does not collect attendee data. Its income comes from the
annual fee organisers pay."

**Bad:** "We believe in giving you full control."
**Good:** "You can run Chobble Tickets on your own servers."

#### Things to never do

- Exclamation marks
- Rhetorical questions ("Ready to take control?")
- Emotional appeals
- Superlatives ("the best", "the most powerful", "unlike anyone else")
- Filler words ("simply", "just", "of course", "easily")
- Three-word punchy slogans
- Alliteration for effect
- Em dashes (—). Rewrite the sentence. A comma, full stop, or pair of
  brackets almost always works better. Hyphens (-) for compound words are
  fine; en dashes (–) for number ranges are fine.
- Strings of short punchy sentences as a substitute for prose ("Pay a flat
  annual fee. No per-ticket charges. Attendee data stays with you."). This
  pattern feels like a sales pitch. Write in complete sentences.

#### Banned rhetorical patterns

These patterns sound like marketing copy, not encyclopaedic prose. Avoid them
all, including subtle variations.

**"Not just X, it's Y" and contrast-flips.** Any sentence that sets up
something to knock it down is rhetorical, not factual. This includes
"It's not about X, it's about Y", "more than just a Z", and "not another W".

**Bad:** "Chobble Tickets isn't just a ticketing platform, it's a way to take
back control of your data."
**Bad:** "It's not about features. It's about freedom."
**Bad:** "More than just ticketing software."
**Good:** "Chobble Tickets is ticketing software. Organisers keep all attendee
data on infrastructure they control."

**Hypotheticals and "imagine" framing.** Do not invite the reader into a
daydream. State what is true now. This includes "imagine if", "picture this",
"what if", and second-person hypotheticals about the reader's life.

**Bad:** "Imagine running an event without losing 30% to fees."
**Bad:** "Picture an event platform where you actually own your data."
**Bad:** "What if your ticketing platform worked for you, not against you?"
**Good:** "Chobble Tickets charges a flat annual fee. There is no per-ticket
commission."

**First-person mission and belief statements.** Beliefs, missions, values, and
"what we stand for" are vague and unverifiable. They also re-introduce the "we"
voice, which is banned. Replace with the structural fact behind the belief.

**Bad:** "We believe event organisers deserve better."
**Bad:** "Our mission is to put control back in the hands of organisers."
**Bad:** "We're passionate about open source."
**Bad:** "We stand for data ownership."
**Good:** "Chobble Tickets is a community interest company. Profit cannot be
extracted by shareholders."
**Good:** "All Chobble Tickets source code is published under the AGPL-3.0
licence."

**Vague time and era framing.** "Today's world", "in 2026", "modern
organisers", "the future of ticketing", "the next generation of" are filler.
Cut them.

**Bad:** "In today's world, event organisers need a platform they can trust."
**Bad:** "The future of ticketing is open source."
**Bad:** "Modern event organisers expect more."
**Good:** "Chobble Tickets is open source. Organisers can read the source
code, fork it, or run their own copy."

#### Abstract product adjectives

Words like "powerful", "flexible", "comprehensive", "streamlined",
"effortless", "reliable", "scalable", "intuitive", "smart", and "advanced" are
claims, not facts. They are also interchangeable across every product on the
internet, which is why they carry no information.

Use them only when the next sentence (or the same sentence) gives the concrete
fact that backs them up. Without backup, cut the adjective entirely.

**Bad:** "A powerful ticketing platform."
**Bad:** "Flexible event setup."
**Bad:** "Comprehensive reporting."
**Good:** "Chobble Tickets supports timed entry, multi-day events, donations,
and pay-what-you-want pricing."
**Good:** "Each event can have up to 50 ticket types. Each type has its own
price, capacity, and sale window."
**Good:** "Reporting covers tickets sold, revenue by ticket type, attendance
on the day, and refunds. All reports can be exported as CSV."

#### Calls to action and button labels

CTAs describe the action the reader is about to take. They do not promise an
emotional reward, invite the reader to "join" anything, or imply a journey.

**Use:** "Get started", "Sign up", "See pricing", "Read the docs", "Book a
demo", "Contact us", "Compare plans", "Try the demo", "View the source code".

**Do not use:** "Take control", "Join the movement", "Start your journey",
"Reclaim your data", "Make the switch", "Be part of something", "Get the
platform you deserve", "Free your tickets", "Get started in seconds", "Begin
your adventure".

If a button or link needs more than three or four words, the surrounding
prose is doing the wrong job. Fix the prose, not the label.

#### Paragraph length and repetition

Paragraphs are at most three sentences. If a paragraph runs longer, split it
or cut it.

Each paragraph must introduce a new fact. Do not restate the previous
paragraph in different words. Do not write a summary paragraph at the end of
a section that recaps what the section already said.

If a page can be cut in half without losing any fact, cut it in half.

#### General principle

State what is true. Let the facts make the argument.

**Bad:** "Event ticketing that respects you"
**Good:** "Open source event ticketing with no per-ticket fees"

**Bad:** "Keep your data, your revenue, and your sanity"
**Good:** "Attendee data stays on infrastructure organisers control, and
Chobble Tickets does not take a percentage of ticket revenue."

**Bad:** "Ready to sell tickets?"
**Good:** "Get started" or "Sign up"

**Bad:** "A platform that respects your customers"
**Good:** "Attendee data is encrypted. Only the organiser's private key can
decrypt it."

---

### On data, ownership, and power

Be direct about how commercial platforms work. Do not soften it. Do not ascribe
motive or intent to other companies - just state observable facts about what
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
**Good:** "Chobble does not collect attendee data. Its income comes from the
annual fee organisers pay, not from advertising or data sales."

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
**Good:** "Eventbrite has more features than Chobble Tickets in some areas -
see the full comparison below."

When a competitor genuinely does something well, say so.

Do not include specific details about competitors that are likely to change
within a few months - ownership structures, funding rounds, named executives,
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

When describing features that give organisers control - self-hosting, open
source code, data ownership, choosing your own email provider - describe them
in terms of what the organiser can actually do, not in abstract terms about
freedom or empowerment.

**Bad:** "We believe in giving you full control"
**Good:** "You can run the platform on your own servers. No data leaves your
infrastructure."

**Bad:** "Freedom to choose your email provider"
**Good:** "You choose which email provider sends your confirmations - Resend,
Postmark, SendGrid, or Mailgun."
