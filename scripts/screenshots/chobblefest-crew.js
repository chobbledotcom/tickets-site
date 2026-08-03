import { chobbleFestCss } from "./_chobblefest.js";
import { setFormValues } from "./helpers.js";

const invite = async (context, username, adminLevel) => {
  await context.page.goto("/admin/user/new");
  const form = 'form[action="/admin/users"]';
  await setFormValues(context.page, form, {
    admin_level: adminLevel,
    username,
  });
  await context.submit(form);
};

export default {
  css: chobbleFestCss("crew"),
  elementSelector: ".page-regions.admin-page",
  name: "chobblefest-crew",
  run: async (context) => {
    await invite(context, "gate-manager", "manager");
    await invite(context, "lineup-editor", "editor");
    await invite(context, "site-agent", "agent");
    await context.page.goto("/admin/users");
    await context.page.getByText("lineup-editor").waitFor();
  },
};
