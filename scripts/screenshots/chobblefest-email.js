import { chobbleFestCss, createFestivalListing } from "./_chobblefest.js";
import { createAttendee, setFormValues } from "./helpers.js";

const PEOPLE = [
  ["Aisha Khan", "aisha@example.com"],
  ["Tomas Novak", "tomas@example.com"],
  ["Lucia Santos", "lucia@example.com"],
  ["Morgan Lee", "morgan@example.com"],
];

export default {
  css: `${chobbleFestCss("email")}
.page-regions.admin-page > p:has(.btn),
.email-preview ~ * {
  display: none;
}
`,
  elementSelector: ".page-regions.admin-page",
  name: "chobblefest-email",
  run: async (context) => {
    const listingId = await createFestivalListing(context, {
      date: "2027-08-19",
      name: "ChobbleFest Thursday",
      price: "45.00",
    });
    for (const [name, email] of PEOPLE) {
      await createAttendee(context, { listingId, values: { email, name } });
    }
    await context.page.goto(`/admin/emails?listing=${listingId}`);
    const form = 'form[action="/admin/emails/preview"]';
    await setFormValues(context.page, form, {
      body: "The Main Stage opens at 13:00 because of the rain. The first three bands will now play one hour later.",
      subject: "ChobbleFest Thursday timetable update",
    });
    await context.submit(form);
    await context.page
      .getByRole("heading", { name: "Preview bulk email" })
      .waitFor();
  },
};
