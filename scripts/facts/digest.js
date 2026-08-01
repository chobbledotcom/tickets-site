import { sha256 } from "../evidence/validation.js";

/**
 * What a person signs off for one social card: the words the card publishes,
 * and every fact offered as evidence for them. Either side changing means the
 * pair has not been read together, so adding a clause to a card needs the same
 * second look as re-auditing a fact.
 *
 * The commit a fact was audited at is part of it. Re-auditing a fact against a
 * newer checkout can change what it establishes, so the copy is worth reading
 * again even when the fact's own wording did not move.
 */
export const factsDigest = (copy, facts) =>
  sha256(
    new TextEncoder().encode(
      JSON.stringify({
        body: copy.body,
        facts: facts.map((fact) => ({
          audited: fact.audited,
          fact: fact.fact,
          sources: fact.sources,
        })),
        heading: copy.heading,
      }),
    ),
  );
