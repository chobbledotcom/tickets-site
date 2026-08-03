import { Buffer } from "node:buffer";
import { chobbleFestCss, createFestivalProgramme } from "./_chobblefest.js";

export default {
  css: chobbleFestCss("portable"),
  elementSelector: ".page-regions.admin-page",
  name: "chobblefest-portable",
  run: async (context) => {
    const { baseUrl, page } = context;
    const { groupId } = await createFestivalProgramme(context);
    const response = await page.request.get(
      `${baseUrl}/admin/groups/${groupId}/export.json`,
    );
    if (!response.ok()) {
      throw new Error(`Could not export ChobbleFest: ${response.status()}`);
    }
    const exportBytes = await response.body();
    await page.goto("/admin/catalog/import");
    await page.locator('[name="catalog_file"]').setInputFiles({
      buffer: Buffer.from(exportBytes),
      mimeType: "application/json",
      name: "chobblefest-150-band-programme.json",
    });
    await page.waitForFunction(
      () =>
        document.querySelector('input[name="catalog_file"]')?.files?.[0]
          ?.name === "chobblefest-150-band-programme.json",
    );
    await page.locator("h1").click();
  },
};
