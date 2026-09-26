import { Config } from "@remotion/cli/config";

// On NixOS, let the devenv Chromium stand in for Remotion's own browser
// download, which needs a standard glibc layout that system does not have.
if (process.env.CHROMIUM_EXECUTABLE) {
  Config.setBrowserExecutable(process.env.CHROMIUM_EXECUTABLE);
}
Config.setEntryPoint("./scripts/video/index.jsx");
Config.setPublicDir(".");
Config.setCodec("h264");
Config.setCrf(18);
Config.setPixelFormat("yuv420p");
Config.setVideoImageFormat("jpeg");
Config.setChromiumMultiProcessOnLinux(true);
