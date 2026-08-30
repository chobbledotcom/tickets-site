import {
  createWillowMarqueeListing,
  selectFirstFutureDate,
} from "./_industry.js";
import {
  blurActiveElement,
  openFilledListingCheckout,
  setFormValues,
  waitForOrderTotal,
} from "./helpers.js";

const APP_ENV_URL = new URL("../../../tickets/.env", import.meta.url);

const easyPostcodesToken = async () => {
  let text = "";
  try {
    text = await Deno.readTextFile(APP_ENV_URL);
  } catch {
    throw new Error(
      `Could not read ${APP_ENV_URL.pathname}. The lookup needs an EasyPostcodes token.`,
    );
  }
  const line = text
    .split("\n")
    .find((entry) => entry.startsWith("EASYPOSTCODES_API_TOKEN="));
  const token = line?.slice("EASYPOSTCODES_API_TOKEN=".length).trim();
  if (!token)
    throw new Error("EASYPOSTCODES_API_TOKEN is not set in ../tickets/.env");
  return token;
};

export default {
  css: `
:root {
  --border-radius: 8px;
  --color-accent: #c96f2f;
  --color-bg: #f2ede4;
  --color-bg-secondary: #e5dccd;
  --color-link: #8a4b1f;
  --color-secondary: #3d4a56;
  --color-secondary-accent: #3d4a561c;
  --color-shadow: #3d4a5626;
  --color-table: #3d4a56;
  --color-text: #2f3840;
  --color-text-secondary: #6b7681;
  --font-family: Arial, Helvetica, sans-serif;
}

body { background: #43505c; }

main {
  background: #fbf8f2;
  border: 1px solid #cfc4ae;
  border-top: 7px solid var(--color-accent);
  border-radius: 12px;
  box-shadow: 0 12px 28px var(--color-shadow);
  margin-block: 0.6rem;
  padding: 1.15rem;
}

main h1 { color: #34434f; }

main fieldset,
main input,
main select,
main textarea { border-radius: 7px; }

main .address-lookup {
  background: #f2ede4;
  border: 1px solid #d8cdb8;
  border-left: 5px solid var(--color-accent);
  border-radius: 8px;
  padding: 0.75rem;
}

main .address-lookup-search {
  align-items: end;
  display: flex;
  gap: 0.5rem;
}

main .order-summary-message {
  background: #eef0e6;
  border: 1px solid #c4c9b2;
  border-left: 5px solid var(--color-secondary);
  padding: 0.75rem;
}
`,
  elementSelector: "main",
  name: "delivery-postcode-lookup",
  run: async (context) => {
    const { page, submit } = context;
    const token = await easyPostcodesToken();

    const lookupForm = 'form[action="/admin/settings/address-lookup"]';
    await page.goto("/admin/settings-advanced");
    await setFormValues(page, lookupForm, {
      address_lookup_api_key: token,
      address_lookup_provider: "easypostcodes",
    });
    await submit(lookupForm);

    const listingId = await createWillowMarqueeListing(context, {
      fields: ["address", "email", "phone"],
    });

    await openFilledListingCheckout(context, {
      email: "maya@example.com",
      listingId,
      name: "Maya Patel",
    });
    await selectFirstFutureDate(page);

    await page.locator("[data-address-search]").fill("M25 1FL");
    await page.locator("[data-address-find]").click();
    await page.locator("[data-address-results-label]").waitFor();
    await page.locator("[data-address-results]").selectOption({ index: 1 });
    await page.waitForFunction(() => {
      const textarea = document.querySelector('textarea[name="address"]');
      return (textarea?.value ?? "").includes("M25 1FL");
    });
    await waitForOrderTotal(page, "£320");
    await blurActiveElement(page);
  },
};
