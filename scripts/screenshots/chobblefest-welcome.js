import { chobbleFestCss, createFestivalProgramme } from "./_chobblefest.js";
import { publicPathFrom } from "./helpers.js";

export default {
  css: chobbleFestCss("welcome"),
  elementSelector: "main",
  name: "chobblefest-welcome",
  run: async (context) => {
    const { groupId } = await createFestivalProgramme(context);
    const path = await publicPathFrom(context.page, `/admin/groups/${groupId}`);
    await context.page.goto(path);
    await context.page.getByText("Monday: Forge Stage").waitFor();
  },
};
