export default {
  css: `
:root {
  --border-radius: 10px;
  --color-accent: #55b8b0;
  --color-bg: #eef7f5;
  --color-bg-secondary: #dcece9;
  --color-link: #0d5f62;
  --color-secondary: #174f57;
  --color-secondary-accent: #174f571b;
  --color-shadow: #163d4220;
  --color-text: #18373b;
  --color-text-secondary: #587175;
  --font-family: Arial, Helvetica, sans-serif;
}

.guide-page > .page-block {
  background: #fbfefd;
  border: 1px solid #bad8d4;
  border-left: 6px solid var(--color-accent);
  box-shadow: 0 12px 28px var(--color-shadow);
  padding: 1rem;
}

.guide-page > .page-block h3 {
  color: var(--color-secondary);
  font-size: 1.5rem;
  margin-top: 0;
}

.guide-page > .page-block details {
  background: #fff;
  border: 1px solid #cfe2df;
  border-radius: 6px;
  margin-top: 0.6rem;
  padding: 0.7rem;
}

.guide-page > .page-block details:nth-of-type(n + 5) {
  display: none;
}

.guide-page > .page-block summary {
  color: #174f57;
  font-weight: 700;
}
`,
  elementSelector: ".page-block:has(> #listings)",
  name: "admin-guide-listings",
  run: async ({ page }) => {
    await page.goto("/admin/guide#listings");
    const section = page.locator(".page-block:has(> #listings)");
    await section
      .locator("details")
      .first()
      .evaluate((details) => {
        Reflect.set(details, "open", true);
      });
    await section
      .getByText("What's the difference between standard and daily listings?", {
        exact: true,
      })
      .waitFor();
  },
};
