import { slideCss } from "../chobblefest-slides.js";
import { SETUP_JOURNEY_SLIDES } from "../setup-journey-slides.js";
import { createAttendee, createListing, setFormValues } from "./helpers.js";

export const setupJourneyCss = (slug) => {
  const slide = SETUP_JOURNEY_SLIDES.find(
    (candidate) => candidate.slug === slug,
  );
  if (!slide) throw new Error(`Unknown setup journey slide: ${slug}`);
  return `${slideCss(slide)}
:root { --border-radius: 12px; --font-family: Arial, Helvetica, sans-serif; }
`;
};

export const EVENT_NAME = "Friday Night Folk Club";

export const createFirstEvent = (context) =>
  createListing(context, {
    fields: ["email"],
    name: EVENT_NAME,
    values: {
      date_date: "2027-09-17",
      date_time: "19:30",
      description: "An evening of live folk music.",
      location: "The Lantern Hall, Bristol",
      max_attendees: "120",
      max_quantity: "6",
      unit_price: "12.00",
    },
  });

export const fillSetup = async (context) => {
  await context.page.goto("/setup/");
  await setFormValues(context.page, 'form[action="/setup/"]', {
    admin_password: "setup-reel-password",
    admin_password_confirm: "setup-reel-password",
    admin_username: "folk-club-owner",
    country: "GB",
  });
  await context.page.locator('[name="accept_agreement"]').check();
};

export const createTicket = async (context) => {
  const listingId = await createFirstEvent(context);
  const attendeeId = await createAttendee(context, {
    listingId,
    quantity: "2",
    values: { email: "maya@example.com", name: "Maya Patel" },
  });
  await context.page.goto(`/admin/attendees/${attendeeId}`);
  const href = await context.page
    .locator('a[href*="/t/"]')
    .first()
    .getAttribute("href");
  if (!href) throw new Error("Could not find the attendee ticket link.");
  return new URL(href, context.page.url()).pathname;
};
