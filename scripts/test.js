import { validateCommittedEvidence } from "./evidence/store.js";
import { prep } from "./prepare-dev.js";
import { bun, root } from "./utils.js";

process.env.PLACEHOLDER_IMAGES = "1";

await validateCommittedEvidence({ root });
prep();

console.log("Running tests...");
// Pass the runner's exit code on. Without this a failing suite still leaves a
// zero exit code, and every caller - CI included - reads the run as a pass.
const { exitCode } = bun.test(root);
process.exit(exitCode ?? 1);
