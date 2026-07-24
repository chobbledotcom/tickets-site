import { industryCheckoutCss } from "./_industry.js";
import { addListingMoney, createAttendee, createListing } from "./helpers.js";

export default {
  css: `${industryCheckoutCss({
    accent: "#c7864a",
    background: "#ede6d7",
    border: "#c6b491",
    link: "#53694c",
    panel: "#fffaf0",
    secondary: "#5b4a35",
    text: "#352f27",
    textSecondary: "#70685d",
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
  name: "industry-folk-club-ledger",
  run: async (context) => {
    const listingId = await createListing(context, {
      name: "Friday Folk Club",
      values: {
        location: "The Old Reading Room",
        max_attendees: "80",
        max_quantity: "6",
        unit_price: "8.00",
      },
    });
    await createAttendee(context, {
      listingId,
      quantity: "6",
      values: { name: "Advance admission" },
    });
    await addListingMoney(context, listingId, "manual_listing_income", "72.00");
    await addListingMoney(context, listingId, "manual_listing_cost", "30.00");

    await context.page.goto(`/admin/ledger?listing=${listingId}`);
    await context.page
      .getByRole("heading", { name: "Friday Folk Club", exact: true })
      .waitFor();
    const totals = context.page.locator(".listing-details-table").first();
    await totals.getByText("+£120", { exact: true }).waitFor();
    await totals.getByText("£90", { exact: true }).waitFor();
  },
};
