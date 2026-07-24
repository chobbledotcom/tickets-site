import { prep } from "./prepare-dev.js";
import { bun, root } from "./utils.js";

process.env.PLACEHOLDER_IMAGES = "1";

prep();

console.log("Running tests...");
bun.test(root);
