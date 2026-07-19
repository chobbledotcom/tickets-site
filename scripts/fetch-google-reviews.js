#!/usr/bin/env bun

/* jscpd:ignore-start */
import { join } from "node:path";
import {
  fetchApifyDataset,
  loadApifySiteConfig,
  runMain,
  saveFetchedItems,
} from "./apify.js";
import { exists, fs, path, write } from "./utils.js";

/* jscpd:ignore-end */

const CONFIG = {
  siteConfig: path("_data", "site.json"),
  reviewsDir: path("reviews"),
  actorId: "nwua9Gu5YrADL7ZDj",
  maxReviews: 9999,
};

const formatFilename = (name, date) => {
  const safeName = name
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, "")
    .replace(/\s+/g, "-")
    .substring(0, 30);
  return `${safeName}-google-${date.toISOString().split("T")[0]}.md`;
};

const fetchReviews = async (placeId, opts = {}) => {
  console.log("Fetching all available reviews...");
  const results = await fetchApifyDataset(CONFIG.actorId, {
    startUrls: [
      { url: `https://www.google.com/maps/place/?q=place_id:${placeId}` },
    ],
    maxReviews: opts.maxReviews || CONFIG.maxReviews,
    reviewsSort: opts.sort || "newest",
    language: opts.language || "en",
  });

  return results
    .flatMap((item) => item.reviews || [])
    .map((r) => ({
      content: r.text || r.reviewText,
      date: new Date(r.publishedAtDate),
      rating: r.stars,
      author: r.name || r.authorName,
      authorUrl: r.reviewerUrl || r.authorUrl,
    }))
    .filter((r) => r.content?.length > 5);
};

const saveReview = async (review, dir) => {
  const filename = formatFilename(review.author, review.date);
  const filepath = join(dir, filename);

  if (await exists(filepath)) return false;

  await write(
    filepath,
    `---
name: ${review.author}
url: ${review.authorUrl}
rating: ${review.rating}
---

${review.content}
`,
  );

  console.log(`${filename} (${review.rating}/5 stars)`);
  return true;
};

const main = async () => {
  const siteConfig = await loadApifySiteConfig(CONFIG.siteConfig);
  if (!siteConfig.google_place_id) {
    console.error("Error: google_place_id missing from site.json");
    process.exit(1);
  }

  fs.mkdir(CONFIG.reviewsDir);

  const reviews = await fetchReviews(siteConfig.google_place_id);
  await saveFetchedItems(reviews, "reviews", (review) =>
    saveReview(review, CONFIG.reviewsDir),
  );
};

runMain(import.meta.main, main);
