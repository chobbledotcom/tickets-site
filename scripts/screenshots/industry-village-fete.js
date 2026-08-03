import { industryCheckoutCss } from "./_industry.js";
import { addListingMoney, createAttendee, createListing } from "./helpers.js";

export default {
  css: `${industryCheckoutCss({
    accent: "#4d9b56",
    background: "#edf5ea",
    border: "#bcd6b8",
    link: "#2f6e3a",
    panel: "#fbfff8",
    secondary: "#2f6e3a",
    text: "#29352a",
    textSecondary: "#6b7c6c",
  })}
.page-regions.admin-page .ledger-date-range { display: none; }
.page-regions.admin-page table {
  font-size: 0.76rem;
  table-layout: fixed;
  white-space: normal;
  width: 100%;
}
.page-regions.admin-page td,
.page-regions.admin-page th { padding: 0.4rem 0.3rem; }
.page-regions.admin-page .page-block th:first-child,
.page-regions.admin-page .page-block td:first-child { display: none; }
`,
  elementSelector: ".page-regions.admin-page",
  name: "industry-village-fete-ledger",
  run: async (context) => {
    const listingId = await createListing(context, {
      name: "Meadowfield Village Fete",
      values: {
        location: "Meadowfield Green",
        max_attendees: "500",
        max_quantity: "10",
        unit_price: "2.50",
      },
    });
    await createAttendee(context, {
      listingId,
      quantity: "10",
      values: { name: "Advance gate sales" },
    });
    await addListingMoney(context, listingId, "manual_listing_income", "85.00");
    await addListingMoney(context, listingId, "manual_listing_cost", "25.00");

    await context.page.goto(`/admin/ledger?listing=${listingId}`);
    await context.page
      .getByRole("heading", { name: "Meadowfield Village Fete", exact: true })
      .waitFor();
    const totals = context.page.locator(".listing-details-table").first();
    await totals.getByText("+£110", { exact: true }).waitFor();
    await totals.getByText("£85", { exact: true }).waitFor();
  },
};
