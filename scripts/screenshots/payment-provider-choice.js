export default {
  css: `
:root {
  --border-radius: 8px;
  --color-accent: #d7ab48;
  --color-bg: #eef3f2;
  --color-bg-secondary: #dde8e5;
  --color-link: #245e59;
  --color-secondary: #244c48;
  --color-secondary-accent: #244c4818;
  --color-shadow: #1e454020;
  --color-text: #263a38;
  --color-text-secondary: #647471;
  --font-family: Arial, Helvetica, sans-serif;
}

.admin-page {
  background: #fff;
  border: 1px solid #c9d8d4;
  border-top: 6px solid var(--color-accent);
  box-shadow: 0 12px 28px var(--color-shadow);
  padding: 1rem;
}

.admin-page > form:not(#settings-payment-provider):not(#settings-stripe),
.admin-page > article,
.admin-page > footer {
  display: none;
}

#settings-payment-provider,
#settings-stripe {
  background: #f8faf9;
  border: 1px solid #c9d8d4;
  border-radius: var(--border-radius);
  padding: 1rem;
}

#settings-payment-provider h2,
#settings-stripe h2 { color: var(--color-secondary); }

#settings-payment-provider .radio-option {
  background: #fff;
  border-color: #c9d8d4;
}

#settings-stripe .notice {
  border-left: 5px solid var(--color-accent);
}
`,
  elementSelector: ".page-regions.admin-page",
  name: "payment-provider-choice",
  run: async ({ page }) => {
    await page.goto("/admin/settings");
    const providerForm = page.locator("#settings-payment-provider");
    for (const provider of ["Square", "Stripe", "SumUp"]) {
      await providerForm.getByText(provider, { exact: true }).waitFor();
    }
    const stripeOption = providerForm.locator(
      '[name="payment_provider"][value="stripe"]',
    );
    if (!(await stripeOption.isChecked())) {
      throw new Error("Stripe is not the selected payment provider.");
    }
    await page.locator("#settings-stripe").getByText("Test mode:").waitFor();
  },
};
