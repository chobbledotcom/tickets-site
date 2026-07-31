#!/usr/bin/env bun

/**
 * Resolve every fact's sources in the Tickets checkout, at the commit that
 * fact records.
 *
 *   bun run facts:verify
 *   bun run facts:verify --tickets ../tickets
 *
 * A line range only means something in one checkout, so a citation is checked
 * against its own fact's commit rather than against whatever the app happens
 * to be today. This catches the citation that points at a file which did not
 * exist yet, or at a line past the end of one that did.
 *
 * What it cannot check is whether the lines say what the fact says. That is a
 * reading, and `facts:review` is where a person does it.
 */

import { SOCIAL_IMAGE_FACTS } from "../../facts/social-images.js";
import { parseOptions } from "../review-args.js";

const DEFAULT_TICKETS = "../tickets";

const parseSource = (source) => {
  const [path, range] = source.split(":");
  const [start, end] = range.split("-");
  return {
    end: Number(end ?? start),
    path: path.replace(/^\.\.\/tickets\//, ""),
    start: Number(start),
  };
};

const run = async (tickets, args) => {
  const proc = Bun.spawn(["git", ...args], {
    cwd: tickets,
    stderr: "pipe",
    stdout: "pipe",
  });
  const [stdout, code] = await Promise.all([
    new Response(proc.stdout).text(),
    proc.exited,
  ]);
  return { ok: code === 0, stdout };
};

/** A commit nobody has fetched is not a missing citation, so the two are
 * reported apart: one is a fact to fix, the other is a checkout to update. */
const commitPresent = async (tickets, commit) =>
  (await run(tickets, ["cat-file", "-e", `${commit}^{commit}`])).ok;

/** A file that ends in a newline splits into a final empty piece, which is not
 * a line. Counting it would let a citation one line past the end pass, which
 * is the mistake this check exists to catch. */
export const countLines = (text) => {
  const pieces = text.split("\n");
  return pieces.at(-1) === "" ? pieces.length - 1 : pieces.length;
};

/** A range naming no line at all is a broken citation, not a resolving one.
 * Line numbering starts at 1, and a range cannot end before it starts. */
export const rangeProblem = ({ end, start }) => {
  if (!Number.isInteger(start) || start < 1) return "does not start at a line";
  if (!Number.isInteger(end) || end < start) return "ends before it starts";
  return null;
};

const checkSource = async (tickets, commit, source) => {
  const { end, path, start } = parseSource(source);
  const broken = rangeProblem({ end, start });
  if (broken) return `${source}: ${broken}`;
  const file = await run(tickets, ["show", `${commit}:${path}`]);
  if (!file.ok) return `${source}: no such file at ${commit.slice(0, 7)}`;
  // `git show <commit>:<dir>` succeeds and prints a tree listing, so a
  // citation naming a directory would otherwise resolve and be counted as
  // though its listing were source lines.
  const type = await run(tickets, ["cat-file", "-t", `${commit}:${path}`]);
  if (type.stdout.trim() !== "blob") {
    return `${source}: is not a file at ${commit.slice(0, 7)}`;
  }
  const lines = countLines(file.stdout);
  return end > lines
    ? `${source}: file has ${lines} lines at ${commit.slice(0, 7)}`
    : null;
};

const checkFact = async (tickets, key, fact, seen) => {
  if (!seen.has(fact.audited)) {
    seen.set(fact.audited, await commitPresent(tickets, fact.audited));
  }
  if (!seen.get(fact.audited)) {
    return [
      `${key}: commit ${fact.audited.slice(0, 7)} is not in this checkout`,
    ];
  }
  const results = await Promise.all(
    fact.sources.map((source) => checkSource(tickets, fact.audited, source)),
  );
  return results.filter(Boolean).map((problem) => `${key}: ${problem}`);
};

export const verifyFacts = async (tickets, facts = SOCIAL_IMAGE_FACTS) => {
  const seen = new Map();
  const problems = [];
  for (const [key, entry] of Object.entries(facts)) {
    for (const fact of entry.facts) {
      problems.push(...(await checkFact(tickets, key, fact, seen)));
    }
  }
  return problems;
};

/**
 * A mistyped `--ticket` used to fall through to the default checkout, so the
 * command could report that everything resolved after verifying a repository
 * the caller never named.
 */
export const ticketsFrom = (argv) => {
  const parsed = parseOptions(argv, ["--tickets"], { valued: ["--tickets"] });
  if (parsed.names.length > 0) {
    throw new Error(`Unexpected argument(s): ${parsed.names.join(", ")}.`);
  }
  if (!parsed.flags["--tickets"]) return DEFAULT_TICKETS;
  const tickets = parsed.valueOf("--tickets");
  if (!tickets) throw new Error("--tickets needs a directory");
  return tickets;
};

const countSources = (facts) =>
  Object.values(facts)
    .flatMap((entry) => entry.facts)
    .reduce((total, fact) => total + fact.sources.length, 0);

const main = async () => {
  const tickets = ticketsFrom(process.argv.slice(2));
  const problems = await verifyFacts(tickets);
  if (problems.length > 0) {
    console.error(problems.map((problem) => `  ${problem}`).join("\n"));
    throw new Error(`${problems.length} source reference(s) do not resolve`);
  }
  console.log(
    `All ${countSources(SOCIAL_IMAGE_FACTS)} source references resolve at the commit their fact records.`,
  );
};

if (import.meta.main) {
  main().catch((error) => {
    console.error(`Facts verify failed: ${error.message}`);
    process.exit(1);
  });
}
