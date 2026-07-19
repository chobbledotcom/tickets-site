import { exists, loadEnv, readJson } from "./utils.js";

await loadEnv();

const requireToken = () => {
  if (process.env.APIFY_API_TOKEN) return;
  console.error("Error: APIFY_API_TOKEN required in .env file");
  console.error("Get token: https://console.apify.com/account/integrations");
  process.exit(1);
};

export const loadApifySiteConfig = async (siteConfigPath) => {
  requireToken();
  if (!(await exists(siteConfigPath))) {
    console.error(`Error: ${siteConfigPath} not found`);
    process.exit(1);
  }
  return readJson(siteConfigPath);
};

export const fetchApifyDataset = async (actorId, input) => {
  const url = `https://api.apify.com/v2/acts/${actorId}/run-sync-get-dataset-items?token=${process.env.APIFY_API_TOKEN}`;
  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(input),
  });

  if (!response.ok) {
    throw new Error(`HTTP ${response.status}: ${await response.text()}`);
  }

  const results = await response.json();
  if (!Array.isArray(results)) throw new Error("Invalid API response format");
  return results;
};

export const saveFetchedItems = async (items, name, saveItem) => {
  console.log(`Found ${items.length} ${name}`);
  const saved = (await Promise.all(items.map(saveItem))).filter(Boolean).length;
  console.log(
    `\nSaved ${saved} new ${name} (${items.length - saved} already existed)`,
  );
};

export const runMain = (isMain, main) => {
  if (!isMain) return;
  main().catch((error) => {
    console.error("Error:", error.message);
    process.exit(1);
  });
};
