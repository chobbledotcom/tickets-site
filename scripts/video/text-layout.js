export const PAPER_TEXT_PADDING = "0 0.07em";
export const PAPER_TEXT_LAYERS = {
  backdrop: {
    color: "transparent",
    position: "relative",
    zIndex: 0,
  },
  foreground: {
    inset: 0,
    position: "absolute",
    zIndex: 1,
  },
};

export const SOCIAL_TEXT_STYLES = {
  address: {
    bottom: 70,
    fontSize: 52,
    fontWeight: 400,
    left: 65,
    lineHeight: 1.12,
    position: "absolute",
    transform: "rotate(-1deg)",
    whiteSpace: "pre-wrap",
    width: 520,
  },
  body: {
    fontSize: 76,
    fontWeight: 400,
    left: 250,
    lineHeight: 1.16,
    position: "absolute",
    top: 955,
    transform: "rotate(1.5deg)",
    width: 760,
  },
  heading: {
    fontSize: 132,
    fontWeight: 400,
    left: 54,
    letterSpacing: "-0.025em",
    lineHeight: 1.12,
    position: "absolute",
    top: 78,
    transform: "rotate(-2.5deg)",
    width: 930,
  },
};
