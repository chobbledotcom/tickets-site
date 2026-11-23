import { industryCheckoutCss } from "./_industry.js";
import { enableFeature, setFormValues } from "./helpers.js";

const DIRECTIONS = [
  "## Finding the studio",
  "",
  "The studio is the blue door at the back of the Old Mill yard. Park on Mill Lane and walk through the archway.",
].join("\n");

export default {
  css: `${industryCheckoutCss({
    accent: "#3d6b8f",
    background: "#e6ebf0",
    border: "#bccad6",
    link: "#2d5675",
    panel: "#fbfcfe",
    secondary: "#2d5675",
    text: "#26313b",
    textSecondary: "#61707d",
  })}
.page-regions.entity-page {
  background: #fbfcfe;
  border: 1px solid #bccad6;
  border-top: 7px solid #3d6b8f;
  border-radius: 14px;
  padding: 1.1rem;
}
`,
  elementSelector: ".page-regions.entity-page",
  name: "page-hidden-from-menus",
  run: async (context) => {
    const { page, submit } = context;
    await enableFeature(context, "site");
    await page.goto("/admin/site/pages");
    // The capture keeps only the page editor on screen, so links elsewhere
    // are followed by their address rather than clicked.
    const addHref = await page
      .locator("a")
      .filter({ hasText: /^\s*Add Page\s*$/ })
      .first()
      .getAttribute("href");
    if (!addHref) throw new Error("Could not find the Add Page link.");
    await page.goto(addHref);
    const createForm = 'form[action="/admin/site/pages"]';
    await setFormValues(page, createForm, {
      content: DIRECTIONS,
      name: "Directions",
      slug: "how-to-find-us",
    });
    await submit(createForm);

    await page.goto("/admin/site/pages");
    const editorHref = await page
      .locator('a[href^="/admin/site/pages/"]')
      .filter({ hasText: /^\s*Directions\s*$/ })
      .first()
      .getAttribute("href");
    if (!editorHref) throw new Error("Could not find the Directions editor.");
    await page.goto(editorHref);
    const editForm = `form[action="${new URL(page.url()).pathname}"]`;
    await page
      .locator(`${editForm} [name="hidden"]`)
      .evaluate((input) => Reflect.set(input, "checked", true));
    await submit(editForm);

    await page.goto(editorHref);
    await page.getByText("Keep this page off menus").waitFor();
    const ticked = await page.locator('[name="hidden"]').isChecked();
    if (!ticked) throw new Error("The Hidden box did not stay ticked.");
  },
};
