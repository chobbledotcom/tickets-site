---
permalink: false
layout: null
---

# AGENTS.md - Chobble Tickets site guide

This repository holds the content for the Chobble Tickets marketing site. It
merges with the [Chobble Template](https://git.chobble.com/chobble/chobble-template)
at build time, which supplies the Eleventy setup, themes and components.

Most work here is writing and editing page content. Read the content style
guide below before writing any text for the site.

## Working in this repository

Use Bun, not npm.

```bash
bun install          # Install dependencies
bun run serve        # Development server with hot reload
bun run build        # Build the site
bun run test         # Run tests
bun run lint         # Check code with Biome
bun run lint:fix     # Auto-fix lint issues
```

Content lives in `pages/` and `guide-pages/`, site configuration in `_data/`,
custom styles in `css/`, images in `images/` and build utilities in `scripts/`.

Changes to `scripts/`, `_lib/` and `src.11tydata.js` follow the template
project's conventions: functional style with the `#fp` utilities, no `var`,
no `==`, no `forEach`, arrow functions, and a cognitive-complexity limit of 7.
Run `bun run lint:fix` before committing.

## Translated pages

The site is written in English and publishes a few pages in other languages.
Two data files describe that, and nothing else names a language.

- `_data/languages.json` lists every language the site publishes. Each entry
  has a `code`, an `hreflang`, an `og_locale`, a `label` for the language
  switcher, a `home_url` prefix, a `home_label` and a `breadcrumb_label` for
  the breadcrumb landmark. Exactly one entry has
  `is_default: true`, which is the language everything outside another
  language's prefix is written in, and the language `hreflang="x-default"`
  points at.
- `_data/translations.json` pairs the pages that say the same thing. Each
  group maps a language code to that language's URL for one page.

`_lib/i18n.js` reads a page's language from its URL prefix, and
`src.11tydata.js` puts the result on every page as `language`, along with
`translation`, the group of URLs for that page in each language. The layout,
the hreflang tags, the language switcher and the `og:locale` tags read those
two values and never a language name, so a site with one language and no
translations renders as it did before any of this existed.

To add a language:

1. Add its entry to `_data/languages.json`.
2. Write `_includes/navigation-<code>.html` and `_includes/footer-<code>.html`,
   which are chosen by language code. Link only the pages that exist in that
   language, and include `language-switcher.html` in the navigation list.
3. Put its pages in `pages/<code>/`, each with a `permalink` under the
   language's `home_url`.
4. Add each translated page to `_data/translations.json`.

A translated page repeats a page the English audits already cover, so the
copy, evidence and image-scenario checks read the English source and skip its
translations. `test/translations.test.js` checks the pairing itself, including
that every URL named in `_data/translations.json` is a URL the build
publishes.

Files that override the template, which are `_layouts/base.html`,
`src.11tydata.js` and the `_includes` that the template also ships, must keep
working for a site with any base language and any number of other languages,
including none. Language-specific content, such as `navigation-de.html` and
the pages in `pages/de/`, belongs to this site alone.

## Core Product Distinction

Keep these facts central when describing Chobble Tickets:

- Chobble charges for managed hosting, updates, backup tools and support. It
  does not charge for each sale.
- Managed hosting is one service with no feature tiers. It costs £50/year or
  £5/month, or £25/year for charities, community groups, artists and
  musicians, which is half the annual price and does not apply to monthly
  billing. No rate varies by ticket value, ticket volume or feature use.
- Every current Chobble Tickets feature is included. There are no higher
  product tiers.
- Managed and self-hosted deployments use the same source-published product.
  Chobble charges no software fee for self-hosting; infrastructure and
  configured services remain separate.
- Organisers can use their own domain, download a complete database backup,
  export event setup as versioned JSON and move that setup to another Chobble
  Tickets host.
- Ticket income goes directly to the organiser's Stripe, Square or SumUp
  account. Payment-provider charges remain separate from Chobble's price.
- Paid checkout does not reserve tickets or use capacity. Capacity is consumed
  only when payment confirmation arrives. If confirmed payments race for the
  last place, the later order is refunded automatically.

Among the providers with verified records in this repository, Chobble Tickets
is the only managed ticketing product that combines one volume-independent
price, no feature tiers, no per-sale platform fee and self-hosting of the same
product. Keep this qualification when making comparative claims; do not claim
that no unreviewed provider has a similar model.

## Audience

Write for event organisers rather than software specialists. Lead with practical
effects on price, ticket sales, attendee data and moving between providers.
Omit implementation and licensing-detail caveats unless they materially affect
an organiser's choice or operation of the service; put necessary technical
detail in the technical documentation instead.

When describing capacity, never claim that Chobble holds a place during paid
checkout or guarantees that overselling is impossible. Confirmed deposits,
configured £0 reservations and organiser-created servicing holds are saved
records and are separate from an unpaid checkout.

## Provider Facts

Store external-provider classifications in the `provider_facts` frontmatter of
their comparison page. Store Chobble's corresponding record in
`_data/chobble_provider_facts.json`. Use qualified enum values and notes rather
than booleans, and use `not-reviewed` or `not-documented` instead of guessing.

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

| Avoid         | Use instead                              |
| ------------- | ---------------------------------------- |
| utilise       | use                                      |
| leverage      | use                                      |
| ecosystem     | platform, or be specific                 |
| empower       | be specific about what the person can do |
| seamlessly    | remove it                                |
| robust        | be specific about what makes it reliable |
| intuitive     | remove it                                |
| cutting-edge  | remove it                                |
| best-in-class | remove it                                |
| solution      | tool, platform, or software              |
| actually      | remove it - speculative and inauthentic  |

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

---

## Pull Requests

Reply to every review comment left on a pull request, including comments from
automated reviewers. Leave one reply per comment so the thread records what
happened, whether the outcome is a change, a partial change or no change.

Each reply states:

- What was changed, and in which file, or
- Why no change was made, with the reason

Do not address a batch of comments with a single summary comment on the pull
request, and do not push a fix without replying to the comment that prompted
it. A pushed commit is not a reply. The purpose is that a person reading the
pull request can confirm every comment was dealt with, without reading the
diff or the commit messages.

End every comment posted to GitHub with the Claude Code attribution footer.
