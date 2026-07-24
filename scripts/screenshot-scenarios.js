#!/usr/bin/env bun

/**
 * Re-take every screenshot scenario through the tickets-4 screenshot runner.
 *
 * Each scenario file in scripts/screenshots/ is run in turn against a fresh
 * throwaway tickets app the runner starts locally. The runner writes two
 * files per scenario into images/screenshots/:
 *
 *   <scenario-name>.png               — the original mobile screenshot
 *   <scenario-name>__facebook.png      — the social share variant
 *
 * Run with no arguments to re-take every scenario, or pass scenario
 * basenames (with or without the .js extension) to re-take a subset:
 *
 *   bun run screenshot:scenarios                        # all scenarios
 *   bun run screenshot:scenarios charity-events         # one scenario
 *   bun run screenshot:scenarios charity-events groups  # several
 *
 * Pass --no-social to skip the social variants and only re-take originals.
 * Pass --social instagram-portrait (or a comma-separated list, or all) to
 * choose different social sizes; the default is facebook.
 *
 * Requires the tickets-4 repo checked out next to this one (../tickets-4)
 * and `nix develop` available for the Deno runner.
 */

import { readdirSync, statSync } from "node:fs";
import { join, resolve } from "node:path";
import { renderSocialScreenshotText } from "./render-social-screenshot-text.js";
import { path, root, spawn } from "./utils.js";

const SCENARIOS_DIR = path("scripts", "screenshots");
const OUTPUT_DIR = resolve(root, "images", "screenshots");
const TICKETS_REPO = resolve(root, "..", "tickets-4");
const DEFAULT_SOCIAL = "facebook";
const NON_SCENARIO_FILES = new Set(["helpers.js"]);

const stripJsExtension = (name) => name.replace(/\.js$/, "");
const isScenarioFile = (entry) =>
  entry.isFile() &&
  entry.name.endsWith(".js") &&
  !NON_SCENARIO_FILES.has(entry.name);

const listScenarios = () =>
  readdirSync(SCENARIOS_DIR, { withFileTypes: true })
    .filter(isScenarioFile)
    .map((entry) => stripJsExtension(entry.name))
    .sort();

const resolveRequested = (requested) => {
  if (requested.length === 0) return listScenarios();
  const wanted = new Set(requested.map(stripJsExtension));
  const all = listScenarios();
  const missing = [...wanted].filter((name) => !all.includes(name));
  if (missing.length > 0) {
    throw new Error(
      `Unknown scenario${missing.length > 1 ? "s" : ""}: ${missing.join(", ")}. ` +
        `Available: ${all.join(", ")}.`,
    );
  }
  return all.filter((name) => wanted.has(name));
};

const parseArgs = (args) => {
  const requested = [];
  let social = DEFAULT_SOCIAL;
  for (let i = 0; i < args.length; i++) {
    const arg = args[i];
    if (arg === "--no-social") {
      social = null;
    } else if (arg === "--social") {
      social = args[++i];
      if (!social) throw new Error("--social needs a value");
    } else if (arg.startsWith("--")) {
      throw new Error(`Unknown option: ${arg}`);
    } else {
      requested.push(arg);
    }
  }
  return { requested, social };
};

const exists = (p) => {
  try {
    statSync(p);
    return true;
  } catch {
    return false;
  }
};

const addSocialText = async (scenarioName, social) => {
  if (!social?.split(",").includes("facebook") && social !== "all") return;
  const { default: scenario } = await import(
    `./screenshots/${scenarioName}.js`
  );
  const filePath = join(OUTPUT_DIR, `${scenario.name}__facebook.png`);
  const { solidWidth } = await renderSocialScreenshotText(
    filePath,
    scenarioName,
    scenario.css,
  );
  console.log(`  text:     ${solidWidth}px solid region`);
};

const runScenario = async (scenarioName, social) => {
  const scenarioPath = join(SCENARIOS_DIR, `${scenarioName}.js`);
  console.log(`\n=== ${scenarioName} ===`);
  console.log(`  scenario: ${scenarioPath}`);
  console.log(`  output:   ${OUTPUT_DIR}`);
  if (social) console.log(`  social:   ${social}`);
  const cmd = [
    "nix",
    "develop",
    TICKETS_REPO,
    "-c",
    "deno",
    "task",
    "screenshot",
    "--scenario",
    scenarioPath,
    "--output",
    OUTPUT_DIR,
  ];
  if (social) cmd.push("--social", social);
  const proc = spawn(cmd, { cwd: TICKETS_REPO });
  const code = await proc.exited;
  if (code !== 0) {
    throw new Error(`Scenario ${scenarioName} exited with code ${code}`);
  }
  await addSocialText(scenarioName, social);
};

const main = async () => {
  if (!exists(TICKETS_REPO)) {
    throw new Error(
      `Could not find the tickets-4 repo at ${TICKETS_REPO}. ` +
        "Clone chobbledotcom/tickets next to this repo and retry.",
    );
  }
  if (!exists(join(TICKETS_REPO, "flake.nix"))) {
    throw new Error(
      `${TICKETS_REPO} does not look like the tickets-4 repo (no flake.nix).`,
    );
  }

  const { requested, social } = parseArgs(process.argv.slice(2));
  const scenarios = resolveRequested(requested);
  console.log(
    `Taking ${scenarios.length} scenario${scenarios.length === 1 ? "" : "s"}…`,
  );

  for (const scenario of scenarios) {
    await runScenario(scenario, social);
  }

  console.log(
    `\nDone. ${scenarios.length} scenario${scenarios.length === 1 ? "" : "s"} re-taken.`,
  );
};

main().catch((err) => {
  console.error(`Error: ${err.message}`);
  process.exit(1);
});
