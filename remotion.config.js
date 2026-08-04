import { Config } from "@remotion/cli/config";

Config.setEntryPoint("./scripts/video/index.jsx");
Config.setPublicDir(".");
Config.setCodec("h264");
Config.setCrf(18);
Config.setPixelFormat("yuv420p");
Config.setVideoImageFormat("jpeg");
Config.setChromiumMultiProcessOnLinux(true);
