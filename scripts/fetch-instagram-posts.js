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
  postsDir: path("instagram-posts"),
  imagesDir: path("images", "instagram-posts"),
  actorId: "shu8hvrXbJbY3Eb9W",
  resultsLimit: 100,
};

const formatTimestamp = (iso) =>
  iso.replace(/[:.]/g, "-").replace(/-\d{3}Z$/, "Z");

const extractUsername = (instagramUrl) => {
  const match = instagramUrl.match(/instagram\.com\/([^/?#]+)/);
  return match ? match[1] : null;
};

const fetchPosts = async (profileUrl) => {
  console.log(`Fetching posts for ${profileUrl}...`);
  const results = await fetchApifyDataset(CONFIG.actorId, {
    directUrls: [profileUrl],
    resultsType: "posts",
    resultsLimit: CONFIG.resultsLimit,
  });

  return results
    .filter((p) => p.timestamp && p.displayUrl && p.url)
    .map((p) => ({
      date: p.timestamp,
      title: p.caption || "",
      url: p.url,
      thumbnail: p.displayUrl,
    }));
};

const downloadImage = async (imageUrl, filepath) => {
  const res = await fetch(imageUrl);
  if (!res.ok) throw new Error(`Image HTTP ${res.status} for ${imageUrl}`);
  await write(filepath, await res.arrayBuffer());
};

const savePost = async (post) => {
  const slug = formatTimestamp(post.date);
  const jsonPath = join(CONFIG.postsDir, `${slug}.json`);
  const imagePath = join(CONFIG.imagesDir, `${slug}.jpg`);

  if (await exists(jsonPath)) return false;

  await downloadImage(post.thumbnail, imagePath);

  const record = {
    thumbnail: `/images/instagram-posts/${slug}.jpg`,
    title: post.title,
    date: post.date,
    url: post.url,
  };

  await write(jsonPath, `${JSON.stringify(record, null, 2)}\n`);
  console.log(`${slug}.json`);
  return true;
};

const main = async () => {
  const siteConfig = await loadApifySiteConfig(CONFIG.siteConfig);
  const instagramUrl = siteConfig.socials?.Instagram;
  if (!instagramUrl || !extractUsername(instagramUrl)) {
    console.error("Error: socials.Instagram missing or invalid in site.json");
    process.exit(1);
  }

  fs.mkdir(CONFIG.postsDir);
  fs.mkdir(CONFIG.imagesDir);

  const posts = await fetchPosts(instagramUrl);
  await saveFetchedItems(posts, "posts", savePost);
};

runMain(import.meta.main, main);
