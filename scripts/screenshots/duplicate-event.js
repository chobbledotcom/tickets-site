import {
  createPrintmakingListing,
  printmakingDuplicateCss,
} from "./_printmaking-duplicate.js";
import { createGroup } from "./helpers.js";

const DAY_MS = 86_400_000;
const SHIFT_DAYS = 182;
const SOURCE_GROUP_NAME = "Spring Printmaking Course";
const TARGET_GROUP_NAME = "Autumn Printmaking Course";
const topics = [
  "Linocut",
  "Monotype",
  "Drypoint",
  "Screen print",
  "Colour layering",
  "Final studio",
];

const dateOnly = (date) => date.toISOString().slice(0, 10);

const addDays = (date, days) =>
  dateOnly(new Date(Date.parse(date) + days * DAY_MS));

const secondSaturdayInMarch = (year) => {
  const date = new Date(Date.UTC(year, 2, 1));
  date.setUTCDate(8 + ((6 - date.getUTCDay() + 7) % 7));
  return dateOnly(date);
};

const nextSpringStart = () => {
  const now = new Date();
  const candidate = secondSaturdayInMarch(now.getUTCFullYear());
  return candidate > dateOnly(now)
    ? candidate
    : secondSaturdayInMarch(now.getUTCFullYear() + 1);
};

export default {
  css: printmakingDuplicateCss,
  elementSelector: ".page-regions.admin-page",
  name: "duplicate-event",
  run: async (context) => {
    const springStart = nextSpringStart();
    const courseListings = topics.map((topic, index) => ({
      date: addDays(springStart, index * 7),
      name: `Spring Printmaking: ${topic}`,
      targetName: `Autumn Printmaking: ${topic}`,
    }));
    const listingIds = [];
    for (const listing of courseListings) {
      listingIds.push(
        await createPrintmakingListing(context, listing.name, listing.date),
      );
    }
    const groupId = await createGroup(context, {
      listingIds,
      name: SOURCE_GROUP_NAME,
    });

    const route = `/admin/groups/${groupId}/bulk-actions/duplicate`;
    await context.page.goto(route);
    const form = context.page.locator(
      `form#duplicate-group-form[action="${route}"]`,
    );
    await form.locator('[name="new_name"]').fill(TARGET_GROUP_NAME);
    await form.locator('[name="name_find"]').fill("Spring");
    await form.locator('[name="name_replace"]').fill("Autumn");
    await form.locator('[name="date_find"]').fill(springStart);
    await form
      .locator('[name="date_replace"]')
      .fill(addDays(springStart, SHIFT_DAYS));

    const previewRows = form.locator("[data-duplicate-preview-rows] > tr");
    if ((await previewRows.count()) !== courseListings.length) {
      throw new Error("The duplicate preview does not contain six listings.");
    }
    await form
      .locator("[data-preview-new-name]")
      .filter({ hasText: courseListings.at(0).targetName })
      .waitFor();
    await form
      .locator("[data-preview-new-name]")
      .filter({ hasText: courseListings.at(-1).targetName })
      .waitFor();
    await form.locator("h2").click();
  },
};
