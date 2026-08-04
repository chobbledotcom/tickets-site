import { fs, path, run } from "../utils.js";

const IMAGE_NAME = "tickets-site-video";

const runRequired = (command) => {
  const { exitCode } = run(command);
  if (exitCode !== 0) {
    throw new Error(`Video command failed with exit code ${exitCode}.`);
  }
};

export const buildVideoImage = () => {
  fs.mkdir(path("videos"));
  runRequired([
    "docker",
    "build",
    "--file",
    "scripts/video/Dockerfile",
    "--tag",
    IMAGE_NAME,
    ".",
  ]);
};

export const runRemotion = (remotionArguments = []) =>
  runRequired([
    "docker",
    "run",
    "--init",
    "--rm",
    "--volume",
    `${path("videos")}:/app/videos`,
    IMAGE_NAME,
    ...remotionArguments,
  ]);

if (import.meta.main) {
  buildVideoImage();
  runRemotion(process.argv.slice(2));
}
