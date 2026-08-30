import sharp from "sharp";
import { createListing, setFormValues } from "./helpers.js";

const workshopImage = (colours) => {
  const [bench, wall, clay, glaze] = colours;
  return Buffer.from(
    `<svg xmlns="http://www.w3.org/2000/svg" width="900" height="600">
      <rect width="900" height="600" fill="${wall}"/>
      <rect y="430" width="900" height="170" fill="${bench}"/>
      <circle cx="450" cy="300" r="130" fill="${clay}"/>
      <circle cx="450" cy="300" r="95" fill="${wall}"/>
      <circle cx="450" cy="300" r="70" fill="${clay}" opacity="0.55"/>
      <rect x="180" y="360" width="110" height="90" rx="14" fill="${glaze}"/>
      <rect x="290" y="335" width="40" height="115" rx="12" fill="${glaze}" opacity="0.8"/>
      <rect x="620" y="370" width="100" height="80" rx="14" fill="${glaze}" opacity="0.7"/>
      <rect x="150" y="250" width="18" height="120" rx="8" fill="${bench}"/>
      <rect x="740" y="250" width="18" height="120" rx="8" fill="${bench}"/>
    </svg>`,
  );
};

const libraryImages = [
  {
    alt: "Hands centre a stoneware mug on the spinning wheel",
    colours: ["#8a5a33", "#e8dcc8", "#b98a5f", "#7d9c8a"],
    file: "wheel-throwing.png",
    name: "Wheel throwing",
  },
  {
    alt: "Blue and green glazed mugs drying on the studio rack",
    colours: ["#6f5738", "#eee7d5", "#c9a877", "#57788a"],
    file: "glazed-mugs.png",
    name: "Glazed mugs",
  },
  {
    alt: "The kiln room between firings",
    colours: ["#7c5f45", "#f0e4cf", "#a9805a", "#935f4b"],
    file: "kiln-room.png",
    name: "Kiln room",
  },
];

const uploadImage = async (context, { alt, colours, file, name }) => {
  const { page } = context;
  const png = await sharp(workshopImage(colours)).png().toBuffer();
  await page.goto("/admin/images/new");
  const form = 'form[action="/admin/images"]';
  await setFormValues(page, form, { alt_text: alt, name });
  await page.locator(`${form} [name="image"]`).setInputFiles({
    buffer: png,
    mimeType: "image/png",
    name: file,
  });
  await context.submit(form);
  try {
    await page.waitForURL(/\/admin\/images\/\d+\/edit/, { timeout: 10_000 });
  } catch {
    const message = await page.locator("main").textContent();
    throw new Error(
      `Upload of ${name} stalled at ${new URL(page.url()).pathname}: ${message}`,
    );
  }
};

export default {
  css: `
:root {
  --border-radius: 8px;
  --color-accent: #b3593a;
  --color-bg: #f4efe7;
  --color-bg-secondary: #e8dfd1;
  --color-link: #8a4a2f;
  --color-secondary: #57493c;
  --color-secondary-accent: #57493c1c;
  --color-shadow: #57493c26;
  --color-table: #57493c;
  --color-text: #3d362e;
  --color-text-secondary: #7a7065;
  --font-family: Arial, Helvetica, sans-serif;
}

.page-regions.entity-page {
  background: #faf6ef;
  border: 1px solid #d9cdb9;
  border-top: 7px solid var(--color-accent);
  border-radius: 12px;
  box-shadow: 0 12px 28px var(--color-shadow);
  margin-block: 0.6rem;
  padding: 1.1rem;
}

.page-regions.entity-page h2 { color: #57493c; }

.page-regions.entity-page table {
  background: #fffdf9;
  border: 1px solid #ddd2bf;
}

.page-regions.entity-page .image-library-thumb {
  border: 1px solid #cbbfa9;
  border-radius: 6px;
}

.page-regions.entity-page fieldset,
.page-regions.entity-page input,
.page-regions.entity-page select { border-radius: 7px; }
`,
  elementSelector: ".page-regions.entity-page",
  name: "image-library",
  run: async (context) => {
    const listingId = await createListing(context, {
      fields: ["email"],
      name: "Mug-making Workshop",
      values: {
        location: "Fernbank Pottery",
        max_attendees: "12",
        max_quantity: "4",
        unit_price: "35.00",
      },
    });

    for (const image of libraryImages) {
      await uploadImage(context, image);
    }

    const imagesPath = `/admin/listing/${listingId}/images`;
    await context.page.goto(imagesPath);
    const linkForm = `form[action="${imagesPath}"]`;
    for (const { name } of libraryImages) {
      await context.page
        .locator(`${linkForm} .image-picker-checkboxes label`)
        .filter({ hasText: name })
        .locator('[name="image_ids"]')
        .evaluate((input) => Reflect.set(input, "checked", true));
    }
    await context.submit(linkForm);
    try {
      await context.page.waitForFunction(
        () =>
          [...document.querySelectorAll("img.image-library-thumb")].every(
            (img) => img.complete && img.naturalWidth > 0,
          ),
        undefined,
        { timeout: 10_000 },
      );
    } catch {
      const srcs = await context.page.evaluate(async () => {
        const images = [
          ...document.querySelectorAll("img.image-library-thumb"),
        ];
        return await Promise.all(
          images.map(async (img) => {
            const response = await fetch(img.src);
            return `${img.src}: ${response.status} ${response.headers.get("content-type")}`;
          }),
        );
      });
      throw new Error(`Thumbnails did not load: ${srcs.join("; ")}`);
    }
  },
};
