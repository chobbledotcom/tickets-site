import { createListing, publicPathFor } from "./helpers.js";

const shopPage = (baseUrl, listings) =>
  `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Northlight Studio</title>
    <style>
      :root { color: #282b28; background: #eeeae1; font-family: Arial, sans-serif; }
      * { box-sizing: border-box; }
      body { margin: 0; background: #eeeae1; }
      header { border-bottom: 1px solid #c9c2b4; padding: 1.25rem 4rem; }
      nav { display: flex; align-items: baseline; justify-content: space-between; max-width: 1050px; margin: auto; }
      .brand { color: #294f48; font-family: Georgia, serif; font-size: 1.45rem; letter-spacing: .02em; }
      .nav-links { color: #66645f; font-size: .9rem; word-spacing: 1.25rem; }
      main { max-width: 1050px; margin: auto; padding: 3rem 4rem 4rem; }
      .eyebrow { color: #9a6041; font-size: .72rem; font-weight: 700; letter-spacing: .14em; text-transform: uppercase; }
      h1 { max-width: 650px; margin: .45rem 0 .7rem; color: #263b36; font: 2.65rem/1.05 Georgia, serif; }
      .intro { max-width: 590px; color: #65635d; line-height: 1.6; }
      .workshops { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.25rem; margin-top: 2.5rem; }
      article { min-height: 230px; padding: 1.35rem; background: #f8f5ee; border: 1px solid #d2cbbd; border-top: 4px solid #63877d; }
      article:nth-child(2) { border-top-color: #b97952; }
      article:nth-child(3) { border-top-color: #9c9270; }
      h2 { margin: .35rem 0 .6rem; color: #303b37; font: 1.25rem Georgia, serif; }
      .price { color: #294f48; font-weight: 700; }
      article p { min-height: 3.5rem; color: #706d66; font-size: .9rem; line-height: 1.45; }
      article a { display: inline-block; margin-top: .55rem; padding: .62rem .85rem; border: 1px solid #294f48; color: #294f48; font-size: .82rem; font-weight: 700; text-decoration: none; }
      footer { padding: 1.25rem 4rem; border-top: 1px solid #d0c9bb; color: #77736b; font-size: .8rem; }
      @media (max-width: 600px) {
        header { padding: 1rem; }
        .nav-links { display: none; }
        main { padding: 1.5rem 1rem 5rem; }
        h1 { font-size: 2rem; }
        .workshops { grid-template-columns: 1fr; gap: .8rem; margin-top: 1.5rem; }
        article { min-height: 0; padding: 1rem; }
        article p { min-height: 0; }
        footer { padding: 1rem; }
      }
    </style>
  </head>
  <body>
    <header><nav><span class="brand">Northlight Studio</span><span class="nav-links">Workshops About Visit</span></nav></header>
    <main>
      <span class="eyebrow">Clay and craft sessions</span>
      <h1>Make something by hand</h1>
      <p class="intro">Small-group workshops and studio sessions in a working pottery. Choose your sessions here, then book through the studio ticket page.</p>
      <section class="workshops" aria-label="Studio sessions">
        ${listings
          .map(
            ({ description, name, path, price }) => `
        <article>
          <span class="price">${price}</span>
          <h2>${name}</h2>
          <p>${description}</p>
          <a href="${baseUrl}${path}" data-add-listing="${baseUrl}${path}">Add to booking</a>
        </article>`,
          )
          .join("")}
      </section>
    </main>
    <footer>Northlight Studio · Open Thursday to Sunday</footer>
    <script type="module" src="${baseUrl}/order.js"></script>
  </body>
</html>`;

export default {
  css: "",
  name: "order-widget-cart",
  run: async (context) => {
    const workshopId = await createListing(context, {
      fields: ["email"],
      name: "Mug-making workshop",
      values: {
        location: "Northlight Studio",
        max_attendees: "12",
        max_quantity: "6",
        unit_price: "35.00",
      },
    });
    const glazingId = await createListing(context, {
      fields: ["email"],
      name: "Glazing pass",
      values: {
        location: "Northlight Studio",
        max_attendees: "30",
        max_quantity: "6",
        unit_price: "12.00",
      },
    });
    const tourId = await createListing(context, {
      fields: ["email"],
      name: "Studio tour",
      values: {
        location: "Northlight Studio",
        max_attendees: "20",
        max_quantity: "6",
        unit_price: "8.00",
      },
    });
    const listings = [
      {
        description: "Shape and decorate a stoneware mug with a studio potter.",
        name: "Mug-making workshop",
        path: await publicPathFor(context.page, workshopId),
        price: "£35",
      },
      {
        description: "Return to glaze your fired piece in a choice of colours.",
        name: "Glazing pass",
        path: await publicPathFor(context.page, glazingId),
        price: "£12",
      },
      {
        description: "See the kilns, wheel room and current studio work.",
        name: "Studio tour",
        path: await publicPathFor(context.page, tourId),
        price: "£8",
      },
    ];

    await context.page.goto("/admin/settings-advanced");
    await context.page
      .locator('[name="external_order_enabled"][value="true"]')
      .check();
    await context.submit('form[action="/admin/settings/external-order"]');

    const shopServer = Deno.serve(
      {
        hostname: "127.0.0.1",
        onListen: () => {},
        port: 0,
      },
      () =>
        new Response(shopPage(context.baseUrl, listings), {
          headers: { "content-type": "text/html; charset=utf-8" },
        }),
    );
    shopServer.unref();
    const shopOrigin = `http://127.0.0.1:${shopServer.addr.port}`;

    const moduleResponse = await context.page.request.get(
      `${context.baseUrl}/order.js`,
      { headers: { origin: shopOrigin } },
    );
    const moduleBody = await moduleResponse.text();
    if (!moduleBody.includes("Mug-making workshop")) {
      throw new Error(`The order module has no listing catalog: ${moduleBody}`);
    }

    await context.page.goto(`${shopOrigin}/workshops`, {
      waitUntil: "networkidle",
    });
    await context.page
      .locator('a[data-add-listing][data-chobble-enhanced="1"]')
      .first()
      .waitFor();

    const addButtonFor = (name) =>
      context.page
        .getByRole("heading", { name })
        .locator("..")
        .getByRole("link", { name: "Add to booking" });
    await addButtonFor("Mug-making workshop").click();
    await addButtonFor("Mug-making workshop").click();
    await addButtonFor("Glazing pass").click();

    const widget = context.page.locator("[data-chobble-order]");
    await widget
      .getByRole("button", { name: "View ticket cart, 3 items" })
      .click();
    await widget.getByText("Subtotal £82", { exact: true }).waitFor();
  },
};
