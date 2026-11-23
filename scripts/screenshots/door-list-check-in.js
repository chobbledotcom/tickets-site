import { industryCheckoutCss } from "./_industry.js";
import { createAttendee, createListing } from "./helpers.js";

const ARRIVED = ["Priya Shah", "Tom Okafor", "Hannah Bell", "Ellie Grant"];
const STILL_TO_COME = "Marcus Reid";

const emailFor = (name) =>
  `${name.toLowerCase().replace(" ", ".")}@example.com`;

export default {
  css: `${industryCheckoutCss({
    accent: "#f3e4dc",
    background: "#efe7e2",
    border: "#d3bfb5",
    link: "#8a3a28",
    panel: "#fffaf7",
    secondary: "#5a2f25",
    text: "#2f2522",
    textSecondary: "#6f625d",
  })}
.page-regions.entity-page {
  background: #fffaf7;
  border: 1px solid #d3bfb5;
  border-top: 7px solid #b5523b;
  border-radius: 14px;
  padding: 1.1rem;
}
.page-regions.entity-page :is(article, section, .page-block, .page-regions):has(form[action$="/attendee"]):not(:has(table)),
.page-regions.entity-page form[action$="/attendee"],
.page-regions.entity-page .badge-warning { display: none; }
.page-regions.entity-page table {
  font-size: 0.95rem;
  width: 100%;
}
.page-regions.entity-page th:nth-child(3),
.page-regions.entity-page td:nth-child(3),
.page-regions.entity-page th:nth-child(n + 5),
.page-regions.entity-page td:nth-child(n + 5) { display: none; }
.page-regions.entity-page td,
.page-regions.entity-page th { padding: 0.55rem 0.5rem; }
.page-regions.entity-page td.actions-col { width: 7rem; }
.page-regions.entity-page .link-button {
  background: #fffaf7;
  border: 1px solid #8a3a28;
  border-radius: 6px;
  color: #8a3a28;
  font-size: 0.8rem;
  font-weight: 700;
  padding: 0.3rem 0.7rem;
  text-decoration: none;
  white-space: nowrap;
}
.page-regions.entity-page .link-button.checkout {
  background: #5a2f25;
  color: #fffaf7;
}
`,
  elementSelector: ".page-regions.entity-page",
  name: "door-list-check-in",
  run: async (context) => {
    const { page, submit } = context;
    const listingId = await createListing(context, {
      fields: ["email"],
      name: "Saturday comedy night",
      values: {
        date_date: "2027-02-20",
        date_time: "20:00",
        location: "The Lantern Rooms",
        max_attendees: "120",
        max_quantity: "6",
        unit_price: "10.00",
      },
    });
    const arrivedIds = [];
    for (const name of ARRIVED) {
      arrivedIds.push(
        await createAttendee(context, {
          listingId,
          values: { email: emailFor(name), name },
        }),
      );
    }
    await createAttendee(context, {
      listingId,
      values: { email: emailFor(STILL_TO_COME), name: STILL_TO_COME },
    });

    for (const attendeeId of arrivedIds) {
      await page.goto(`/admin/listing/${listingId}/attendees`);
      await submit(
        `form[action="/admin/listing/${listingId}/attendee/${attendeeId}/checkin"]`,
      );
    }
    await page.goto(`/admin/listing/${listingId}/attendees`);
    await page.locator("table").first().waitFor();
  },
};
