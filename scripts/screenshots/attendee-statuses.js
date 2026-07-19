import { setFormValues } from "./helpers.js";

const STATUS_PATH = "/admin/settings/statuses";

const createStatus = async (
  { page, submit },
  { name, publicDefault = false, reservationAmount },
) => {
  await page.goto(`${STATUS_PATH}/new`);
  const form = `form[action="${STATUS_PATH}"]`;
  await setFormValues(page, form, {
    name,
    reservation_amount: reservationAmount ?? "0",
  });
  if (reservationAmount) {
    await page.locator(`${form} [name="is_reservation"]`).check();
  }
  if (publicDefault) {
    await page.locator(`${form} [name="is_public_default"]`).check();
  }
  await submit(form);
  const row = page.locator("tbody tr").filter({ hasText: name });
  const href = await row
    .locator(`a[href^="${STATUS_PATH}/"]`)
    .getAttribute("href");
  const id = href?.match(/\/(\d+)$/)?.[1];
  if (!id) throw new Error(`Could not create attendee status: ${name}`);
  return id;
};

export default {
  css: `
:root {
  --border-radius: 6px;
  --color-accent: #dfe7e1;
  --color-bg: #eef1ed;
  --color-bg-secondary: #e1e7e1;
  --color-link: #315c51;
  --color-secondary: #476d62;
  --color-secondary-accent: #476d6218;
  --color-shadow: #253b3420;
  --color-table: #476d62;
  --color-text: #28332f;
  --color-text-secondary: #68756f;
  --font-family: Arial, sans-serif;
}

main {
  background: #fafbf8;
  border: 1px solid #cbd4cc;
  border-top: 5px solid var(--color-secondary);
  box-shadow: 0 10px 24px var(--color-shadow);
  padding: 1.25rem;
}

main h1 {
  color: #294c43;
  font-family: Georgia, "Times New Roman", serif;
  font-weight: 600;
}

main .table-scroll {
  border: 1px solid #c5d0c8;
  border-radius: 6px;
}

main table {
  font-size: 0.92rem;
  margin: 0;
  min-width: 0;
  white-space: normal;
}

main th {
  background: #476d62;
  color: #fff;
}

main td,
main th {
  padding: 0.6rem;
  vertical-align: middle;
}

main .badge {
  background: #e4ece6;
  border: 1px solid #aebfb4;
  border-radius: 999px;
  color: #294c43;
  display: inline-block;
  margin: 0.15rem 0.25rem 0.15rem 0;
  padding: 0.15rem 0.55rem;
}

main .col-reorder form {
  display: inline;
}

main .col-reorder button {
  background: #f4f7f4;
  border: 1px solid #9eb0a5;
  color: #315c51;
  margin: 0.1rem;
  padding: 0.25rem 0.45rem;
}
`,
  elementSelector: "main",
  name: "attendee-statuses",
  run: async (context) => {
    const { page, submit } = context;
    await page.setViewportSize({ height: 900, width: 720 });
    const reservedId = await createStatus(context, {
      name: "Reserved",
      publicDefault: true,
      reservationAmount: "25%",
    });
    await createStatus(context, { name: "Collected" });

    await submit(`form[action="${STATUS_PATH}/${reservedId}/move-up"]`);
    await page.goto(STATUS_PATH);

    const rows = await page.locator("tbody tr").allTextContents();
    const names = rows.map((row) =>
      ["Reserved", "Confirmed", "Collected"].find((name) => row.includes(name))
    );
    if (names.join(",") !== "Reserved,Confirmed,Collected") {
      throw new Error(`Unexpected attendee status order: ${names.join(",")}`);
    }
    await page.getByText("Public default", { exact: true }).waitFor();
    await page.getByText("Reservation: 25%", { exact: true }).waitFor();
    await page.getByText("Paid", { exact: true }).waitFor();
    if ((await page.locator('[title^="Move "]').count()) !== 4) {
      throw new Error("The attendee status order controls are incomplete.");
    }
  },
};
