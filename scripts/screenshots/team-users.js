import { enableFeature, setFormValues } from "./helpers.js";

const inviteUser = async ({ page, submit }, username, adminLevel, agentId) => {
  await page.goto("/admin/user/new");
  const form = 'form[action="/admin/users"]';
  await setFormValues(page, form, {
    admin_level: adminLevel,
    username,
  });
  if (agentId) {
    await page
      .locator(`${form} [name="agent_ids"][value="${agentId}"]`)
      .evaluate((input) => Reflect.set(input, "checked", true));
  }
  await submit(form);
};

export default {
  css: `
:root {
  --border-radius: 8px;
  --color-accent: #ee735d;
  --color-bg: #edf3f7;
  --color-bg-secondary: #dbe7ee;
  --color-link: #1e5d78;
  --color-secondary: #244c66;
  --color-secondary-accent: #244c661b;
  --color-shadow: #17384a20;
  --color-table: #244c66;
  --color-text: #203744;
  --color-text-secondary: #607581;
  --font-family: Arial, Helvetica, sans-serif;
}

.admin-page .table-scroll {
  background: #fff;
  border: 1px solid #c8d8e1;
  border-top: 6px solid var(--color-accent);
  box-shadow: 0 12px 28px var(--color-shadow);
  overflow: visible;
}

.admin-page table {
  font-size: 0.82rem;
  table-layout: fixed;
  white-space: normal;
  width: 100%;
}

.admin-page th,
.admin-page td {
  line-height: 1.3;
  overflow-wrap: anywhere;
  padding: 0.55rem 0.45rem;
  vertical-align: top;
}

.admin-page th:first-child {
  width: 42%;
}

.admin-page tbody tr:nth-child(even) {
  background: #f1f6f8;
}

.admin-page small {
  color: #607581;
}
`,
  elementSelector: ".admin-page .table-scroll",
  name: "riverside-events-team",
  setupUsername: "riverside-events",
  run: async (context) => {
    const { page, submit } = context;
    await enableFeature(context, "logistics");
    await page.goto("/admin/logistics");
    await setFormValues(page, 'form[action="/admin/logistics"]', {
      name: "Van 2",
    });
    await submit('form[action="/admin/logistics"]');
    const agentHref = await page
      .locator('a[href^="/admin/logistics/"]')
      .filter({ hasText: "Van 2" })
      .getAttribute("href");
    const agentId = agentHref?.match(/\/admin\/logistics\/(\d+)/)?.[1];
    if (!agentId) throw new Error("Could not create Van 2.");

    await inviteUser(context, "morgan", "manager");
    await inviteUser(context, "casey", "editor");
    await inviteUser(context, "alex-driver", "agent", agentId);
    await page.goto("/admin/users");
    await page.getByText("alex-driver", { exact: true }).waitFor();
    await page.getByText("Van 2", { exact: true }).waitFor();
  },
};
