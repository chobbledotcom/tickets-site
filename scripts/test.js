import { validateCommittedEvidence } from "./evidence/store.js";
import { prep } from "./prepare-dev.js";
import { bun, root } from "./utils.js";

process.env.PLACEHOLDER_IMAGES = "1";

await validateCommittedEvidence({ root });
prep();

console.log("Running tests...");
bun.test(root);
