import { join } from "node:path";
import {
  buildDir,
  sourceExcludes,
  templateExcludes,
  templateRepo,
} from "./consts.js";
import {
  bun,
  copyDir,
  find,
  fs,
  git,
  mergeTemplateAndSource,
  path,
  root,
} from "./utils.js";

const build = path(buildDir);
const template = path(buildDir, "template");
const dev = path(buildDir, "dev");
const localTemplate = join(root, "chobble-template");

// PLACEHOLDER_IMAGES=1 (set by scripts/test.js) builds with placeholder images,
// so the real images tree is skipped. Read at call time: reading it while this
// module is imported would run before the importing script sets the variable.
const devExcludes = () =>
  process.env.PLACEHOLDER_IMAGES === "1"
    ? [...sourceExcludes, "images"]
    : sourceExcludes;

export const prep = () => {
  console.log("Preparing build...");
  fs.mkdir(build);

  if (fs.exists(localTemplate)) {
    console.log("Using pinned template from ./chobble-template...");
    copyDir(localTemplate, template, {
      delete: true,
      exclude: templateExcludes,
    });
  } else if (!fs.exists(join(template, ".git"))) {
    console.log("Cloning template...");
    fs.rm(template);
    git.clone(templateRepo, template);
  } else {
    console.log("Updating template...");
    git.reset(template, { hard: true });
    git.pull(template);
  }

  find.deleteByExt(dev, ".md");
  mergeTemplateAndSource(template, root, dev, {
    delete: true,
    templateExcludes,
    sourceExcludes: devExcludes(),
  });

  sync();

  console.log("Installing dependencies...");
  bun.install(dev);

  fs.rm(join(dev, "_site"));
  console.log("Build ready.");
};

export const sync = () => {
  copyDir(root, join(dev, "src"), {
    update: true,
    exclude: devExcludes(),
  });
};

if (import.meta.main) prep();
