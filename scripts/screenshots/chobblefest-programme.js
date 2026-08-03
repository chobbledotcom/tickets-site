import { chobbleFestCss, createFestivalProgramme } from "./_chobblefest.js";

export default {
  css: chobbleFestCss("programme"),
  elementSelector: 'table:has(a[href^="/admin/listing/"])',
  name: "chobblefest-programme",
  run: async (context) => {
    const { groupId } = await createFestivalProgramme(context);
    await context.page.goto(`/admin/groups/${groupId}`);
    await context.page
      .locator('a[href^="/admin/listing/"]')
      .filter({ hasText: "Thursday: Main Stage" })
      .waitFor({ state: "attached" });
  },
};
