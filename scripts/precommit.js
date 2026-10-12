#!/usr/bin/env bun

/**
 * Precommit hook - runs lint, copy-paste detection, and build.
 * Use --verbose flag to see full output from all checks.
 */

import {
  COMMON_STEPS,
  runSteps,
} from "@chobble/js-toolkit/code-quality/runner";

const verbose = process.argv.includes("--verbose");

const buildStep = { name: "build", cmd: "bun", args: ["run", "build"] };

const cpdRatchetStep = {
  name: "cpd:ratchet",
  cmd: "bun",
  args: ["run", "cpd:ratchet"],
};

const steps = [
  COMMON_STEPS.lintFix,
  COMMON_STEPS.cpd,
  cpdRatchetStep,
  buildStep,
];

console.log(
  verbose
    ? "Running precommit checks (verbose)...\n"
    : "Running precommit checks...",
);

runSteps({
  steps,
  verbose,
  title: "PRECOMMIT SUMMARY",
  rootDir: process.cwd(),
});
