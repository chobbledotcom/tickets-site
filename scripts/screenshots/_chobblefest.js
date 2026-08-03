import { CHOBBLEFEST_SLIDES, slideCss } from "../chobblefest-slides.js";
import { createGroup, createListing } from "./helpers.js";

export const chobbleFestCss = (slug) => {
  const slide = CHOBBLEFEST_SLIDES.find((candidate) => candidate.slug === slug);
  if (!slide) throw new Error(`Unknown ChobbleFest slide: ${slug}`);
  return `${slideCss(slide)}
:root {
  --border-radius: 12px;
  --font-family: Arial, Helvetica, sans-serif;
}

tbody tr:nth-child(even) a {
  color: var(--color-text);
}
`;
};

export const createFestivalListing = (
  context,
  { capacity = "10000", date, description = "", name, price, time = "12:00" },
) =>
  createListing(context, {
    fields: ["email"],
    name,
    values: {
      date_date: date,
      date_time: time,
      description,
      location: "ChobbleFest, Black Crag Park",
      max_attendees: capacity,
      max_quantity: "10",
      unit_price: price,
    },
  });

export const createFestivalProgramme = async (context) => {
  const listings = [
    [
      "Monday: Forge Stage",
      "2027-08-16",
      "35.00",
      "Ash Crown, Mothhammer and 19 more bands.",
    ],
    [
      "Tuesday: Quarry Stage",
      "2027-08-17",
      "35.00",
      "Vanta Choir, Iron Harbour and 20 more bands.",
    ],
    [
      "Wednesday: Crypt Stage",
      "2027-08-18",
      "40.00",
      "Grave Circuit, Witch Engine and 21 more bands.",
    ],
    [
      "Thursday: Main Stage",
      "2027-08-19",
      "45.00",
      "Night Orchard, Bellwether and 22 more bands.",
    ],
  ];
  const listingIds = [];
  for (const [name, date, price, description] of listings) {
    listingIds.push(
      await createFestivalListing(context, { date, description, name, price }),
    );
  }
  const groupId = await createGroup(context, {
    listingIds,
    name: "ChobbleFest 2027: 150 bands from around the world",
  });
  return { groupId, listingIds };
};
