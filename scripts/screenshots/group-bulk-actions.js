import {
  createPrintmakingListing,
  printmakingDuplicateCss,
} from "./_printmaking-duplicate.js";
import { createGroup } from "./helpers.js";

export default {
  css: printmakingDuplicateCss,
  elementSelector: ".page-regions.admin-page",
  name: "group-bulk-actions",
  run: async (context) => {
    const listings = [
      ["Autumn Printmaking: Linocut", "2026-09-12"],
      ["Autumn Printmaking: Monotype", "2026-09-19"],
      ["Autumn Printmaking: Drypoint", "2026-09-26"],
      ["Autumn Printmaking: Final studio", "2026-10-03"],
    ];
    const listingIds = [];
    for (const [name, date] of listings) {
      listingIds.push(await createPrintmakingListing(context, name, date));
    }
    const groupId = await createGroup(context, {
      listingIds,
      name: "Autumn Printmaking Course 2026",
    });

    const { page } = context;
    await page.goto(`/admin/groups/${groupId}/duplicate`);
    const form = page.locator("#duplicate-group-form");
    await form
      .locator('[name="newName"]')
      .fill("Spring Printmaking Course 2027");
    await form.locator('[name="nameFind"]').fill("Autumn");
    await form.locator('[name="nameReplace"]').fill("Spring");
    await form.locator('[name="dateFind"]').fill("2026-09-12");
    await form.locator('[name="dateReplace"]').fill("2027-03-06");
    await form
      .locator("[data-preview-new-name]")
      .filter({ hasText: "Spring Printmaking: Linocut" })
      .waitFor();
    await form.locator("h2").click();
  },
};
