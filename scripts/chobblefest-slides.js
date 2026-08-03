export const CHOBBLEFEST_SLIDES = [
  {
    body: "So I invented ChobbleFest to show you around. One week. 150 metal bands.",
    heading: "I made Chobble Tickets",
    palette: ["#f4eee4", "#281d32", "#b8474f", "#7e5367"],
    slug: "welcome",
    source: "chobblefest-welcome",
  },
  {
    body: "Every day, stage and pass gets its own listing. I can group all 150 bands without losing track.",
    heading: "Build the whole week",
    palette: ["#252630", "#f5eee6", "#d47a58", "#aaa2b6"],
    slug: "programme",
    source: "chobblefest-programme",
  },
  {
    body: "Day passes. Week passes. Camping. Extras. Visitors can buy it all in one checkout.",
    heading: "Sell the right tickets",
    palette: ["#e8dfca", "#2c352e", "#a4473e", "#66745e"],
    slug: "checkout",
    source: "chobblefest-checkout",
  },
  {
    body: "Each day has its own limit. I can see bookings and places left in one calendar.",
    heading: "Keep an eye on capacity",
    palette: ["#182f32", "#f2eadb", "#d69b5c", "#9db7ad"],
    slug: "capacity",
    source: "chobblefest-capacity",
  },
  {
    body: "Ticket money goes straight to my Stripe, Square or SumUp account. Chobble takes no cut from each sale.",
    heading: "Get paid directly",
    palette: ["#f0e3dd", "#34202d", "#9c3851", "#8b596c"],
    slug: "payments",
    source: "chobblefest-payments",
  },
  {
    body: "Gate staff, editors and managers get separate accounts. I decide which pages each person can open.",
    heading: "Give the crew logins",
    palette: ["#312a25", "#f4ead8", "#cb7f3c", "#b9a88f"],
    slug: "crew",
    source: "chobblefest-crew",
  },
  {
    body: "A stage changed. Rain is coming. I can message one ticket holder, one day or everybody.",
    heading: "Email the right crowd",
    palette: ["#e2e7de", "#24322e", "#3c7b70", "#667a72"],
    slug: "email",
    source: "chobblefest-email",
  },
  {
    body: "The crew can scan QR codes with their phones. If a camera fails, they can find the booking by hand.",
    heading: "Keep the gates moving",
    palette: ["#25202b", "#f6edf2", "#ca5572", "#b8a3b1"],
    slug: "check-in",
    source: "chobblefest-check-in",
  },
  {
    body: "Dark pages. My colours. My domain. Ticket buyers see ChobbleFest, not somebody else's marketplace.",
    heading: "Make it look the part",
    palette: ["#eee0c8", "#302720", "#a65c35", "#7d6857"],
    slug: "identity",
    source: "chobblefest-identity",
  },
  {
    body: "I can export the festival setup and import it somewhere else. I can host the same software myself. I built it that way on purpose.",
    heading: "Keep the whole thing",
    palette: ["#dfe4e8", "#222c38", "#486c91", "#687688"],
    slug: "portable",
    source: "chobblefest-portable",
  },
];

export const slideCss = ({ palette: [background, text, accent, muted] }) => `
:root {
  --color-accent: ${accent};
  --color-bg: ${background};
  --color-bg-secondary: ${muted}33;
  --color-link: ${accent};
  --color-secondary: ${text};
  --color-secondary-accent: ${accent}22;
  --color-shadow: ${text}1c;
  --color-table: ${accent};
  --color-text: ${text};
  --color-text-secondary: ${muted};
}
`;
