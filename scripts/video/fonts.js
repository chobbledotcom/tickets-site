import "@fontsource/noto-sans/400.css";
import "@fontsource/noto-sans/700.css";
import { loadFont } from "@remotion/fonts";
import { staticFile } from "remotion";

export const DISPLAY_FONT = "Marcellus";
export const BODY_FONT = "Noto Sans";

loadFont({
  family: DISPLAY_FONT,
  url: staticFile("assets/fonts/marcellus-latin-400-normal.woff2"),
  weight: "400",
});
