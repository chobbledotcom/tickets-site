import { chromium } from "/opt/node22/lib/node_modules/playwright/index.mjs";
import { readdirSync } from "fs";
import { join } from "path";

const BASE_URL = "https://tickets-demo-1.chobble.com";
const SCREENSHOTS_DIR = join(import.meta.dirname, "..", "images", "screenshots");
const TIMEOUT = 90000;

const getProxyConfig = () => {
  const raw =
    process.env.HTTPS_PROXY ||
    process.env.HTTP_PROXY ||
    process.env.https_proxy ||
    process.env.http_proxy;
  if (!raw) return null;
  try {
    const u = new URL(raw);
    return {
      server: `${u.protocol}//${u.hostname}:${u.port}`,
      username: decodeURIComponent(u.username),
      password: decodeURIComponent(u.password),
    };
  } catch {
    return { server: raw };
  }
};

const removeBanner = (page) =>
  page.evaluate(() => {
    const el = document.querySelector(".demo-banner");
    if (el) el.remove();
  });

const screenshot = async (page, name) => {
  await removeBanner(page);
  const path = join(SCREENSHOTS_DIR, `${name}.png`);
  await page.screenshot({ path, fullPage: false });
  console.log(`  >> ${name}.png`);
};

const fullScreenshot = async (page, name) => {
  await removeBanner(page);
  const path = join(SCREENSHOTS_DIR, `${name}.png`);
  await page.screenshot({ path, fullPage: true });
  console.log(`  >> ${name}.png (full)`);
};

const goto = async (page, url) => {
  const resp = await page.goto(url, {
    waitUntil: "domcontentloaded",
    timeout: TIMEOUT,
  });
  await page.waitForTimeout(2000);
  return resp?.status();
};

const login = async (page) => {
  await goto(page, BASE_URL);
  const title = await page.title();
  if (title.toLowerCase().includes("login")) {
    await page.fill('input[name="username"]', "demo");
    await page.fill('input[name="password"]', "demo1234");
    await page.click('button[type="submit"]');
    await page.waitForLoadState("domcontentloaded");
    await page.waitForTimeout(2000);
  }
  return !page.url().includes("login");
};

const isLoggedIn = (page) =>
  !page.url().includes("login") && !page.url().includes("setup");

const getLinks = async (page) =>
  page.locator("a").evaluateAll((els) =>
    els.map((el) => ({ href: el.href, text: el.textContent.trim() })),
  );

const submitForm = async (page) => {
  await page
    .locator('form:has(input[name="name"]) button[type="submit"]')
    .click();
  await page.waitForLoadState("domcontentloaded");
  await page.waitForTimeout(3000);
};

const ensureLoggedIn = async (page) => {
  if (!isLoggedIn(page)) await login(page);
};

// ── Data creation helpers ──

const createEvent = async (page, data) => {
  await ensureLoggedIn(page);
  await goto(page, `${BASE_URL}/admin/event/new`);
  await page.locator('input[name="name"]').fill(data.name);
  await page.locator('input[name="description"]').fill(data.description);
  await page.locator('input[name="location"]').fill(data.location);
  await page.locator('input[name="max_attendees"]').fill(data.maxAttendees);
  await page.locator('input[name="max_quantity"]').fill(data.maxQuantity);
  await page.locator('input[name="unit_price"]').fill(data.unitPrice);
  await submitForm(page);
  const ok = page.url().includes("success");
  console.log(`  Event: ${ok ? "created" : "FAILED"} (${page.url()})`);
  return ok;
};

const createGroup = async (page, data) => {
  await ensureLoggedIn(page);
  await goto(page, `${BASE_URL}/admin/group/new`);
  await page.locator('input[name="name"]').fill(data.name);
  if (data.maxAttendees) {
    await page.locator('input[name="max_attendees"]').fill(data.maxAttendees);
  }
  await submitForm(page);
  const ok = page.url().includes("success");
  console.log(`  Group: ${ok ? "created" : "FAILED"} (${page.url()})`);
  return ok;
};

const createHoliday = async (page, data) => {
  await ensureLoggedIn(page);
  await goto(page, `${BASE_URL}/admin/holiday/new`);
  await page.locator('input[name="name"]').fill(data.name);
  await page.locator('input[name="start_date"]').fill(data.startDate);
  await page.locator('input[name="end_date"]').fill(data.endDate);
  await submitForm(page);
  const ok = page.url().includes("success");
  console.log(`  Holiday: ${ok ? "created" : "FAILED"} (${page.url()})`);
  return ok;
};

const run = async () => {
  const proxy = getProxyConfig();
  const launchOpts = { headless: true };
  if (proxy) {
    console.log(`Proxy: ${proxy.server}`);
    launchOpts.proxy = proxy;
  }

  const browser = await chromium.launch(launchOpts);
  const context = await browser.newContext({
    viewport: { width: 1280, height: 800 },
    ignoreHTTPSErrors: true,
  });
  context.setDefaultTimeout(TIMEOUT);
  const page = await context.newPage();

  // ── Phase 1: Login and populate demo data ──
  console.log("=== Phase 1: Populate data ===");
  if (!(await login(page))) {
    console.log("Cannot log in. Aborting.");
    await browser.close();
    return;
  }

  // Create multiple events
  await createEvent(page, {
    name: "Summer Music Festival 2026",
    description: "An outdoor music festival with live bands and food",
    location: "Village Hall, Main Street",
    maxAttendees: "200",
    maxQuantity: "10",
    unitPrice: "15.00",
  });

  await createEvent(page, {
    name: "Quiz Night",
    description: "Weekly pub quiz with prizes",
    location: "The Red Lion",
    maxAttendees: "50",
    maxQuantity: "6",
    unitPrice: "3.00",
  });

  await createEvent(page, {
    name: "Charity Fun Run",
    description: "5K run through the park raising money for local causes",
    location: "Riverside Park",
    maxAttendees: "500",
    maxQuantity: "4",
    unitPrice: "10.00",
  });

  // Screenshot the create event form (before submit)
  await ensureLoggedIn(page);
  await goto(page, `${BASE_URL}/admin/event/new`);
  await fullScreenshot(page, "create-event-form");

  // Create groups
  await createGroup(page, { name: "Summer Events", maxAttendees: "500" });
  await createGroup(page, { name: "Weekly Regulars", maxAttendees: "200" });

  // Create holidays
  await createHoliday(page, {
    name: "Christmas Break",
    startDate: "2026-12-24",
    endDate: "2026-12-26",
  });
  await createHoliday(page, {
    name: "New Year",
    startDate: "2026-12-31",
    endDate: "2027-01-01",
  });
  await createHoliday(page, {
    name: "Easter Weekend",
    startDate: "2026-03-28",
    endDate: "2026-03-30",
  });

  // ── Phase 2: Screenshot all admin pages ──
  console.log("\n=== Phase 2: Admin screenshots ===");
  await ensureLoggedIn(page);

  // Dashboard
  await goto(page, `${BASE_URL}/admin/`);
  await screenshot(page, "dashboard");

  const dashText = await page.locator("body").innerText();
  console.log(`Dashboard (first 300): ${dashText.slice(0, 300)}`);

  // Admin pages
  const adminPages = [
    ["/admin/calendar", "calendar"],
    ["/admin/users", "users"],
    ["/admin/settings", "settings"],
    ["/admin/log", "activity-log"],
    ["/admin/groups", "groups"],
    ["/admin/holidays", "holidays"],
    ["/admin/sessions", "sessions"],
    ["/admin/guide", "guide"],
  ];

  for (const [path, name] of adminPages) {
    await ensureLoggedIn(page);
    await goto(page, `${BASE_URL}${path}`);
    if (isLoggedIn(page)) {
      await screenshot(page, name);
    }
  }

  // Full page versions
  await ensureLoggedIn(page);
  await goto(page, `${BASE_URL}/admin/settings`);
  if (isLoggedIn(page)) await fullScreenshot(page, "settings-full");

  await ensureLoggedIn(page);
  await goto(page, `${BASE_URL}/admin/guide`);
  if (isLoggedIn(page)) await fullScreenshot(page, "guide-full");

  // ── Phase 3: Event details ──
  console.log("\n=== Phase 3: Event details ===");
  await ensureLoggedIn(page);
  await goto(page, `${BASE_URL}/admin/`);

  const eventPageLinks = await getLinks(page);
  const eventLinks = eventPageLinks.filter(
    (l) => l.href.match(/\/admin\/event\/\d/) && !l.href.includes("/new"),
  );
  console.log(
    `Found ${eventLinks.length} events: ${JSON.stringify(eventLinks.map((l) => l.text))}`,
  );

  if (eventLinks.length > 0) {
    const eventUrl = eventLinks[0].href;

    await goto(page, eventUrl);
    if (isLoggedIn(page)) {
      await screenshot(page, "event-detail");
      await fullScreenshot(page, "event-detail-full");

      // Find event sub-page links (skip destructive/download actions)
      const detailLinks = await getLinks(page);
      const subLinks = detailLinks.filter(
        (l) =>
          l.href.startsWith(eventUrl) &&
          l.href !== eventUrl &&
          !l.href.includes("logout") &&
          !l.href.includes("delete") &&
          !l.href.includes("export") &&
          !l.href.includes("refund"),
      );
      console.log("Event sub-pages:");
      for (const l of subLinks) console.log(`  ${l.text} -> ${l.href}`);

      for (const link of subLinks) {
        const subName = link.href
          .replace(eventUrl, "")
          .replace(/^\//, "")
          .replace(/\//g, "-")
          .replace(/[?#].*/, "");
        if (!subName) continue;

        await ensureLoggedIn(page);
        await goto(page, link.href);
        if (isLoggedIn(page)) {
          await screenshot(page, `event-${subName}`);
        }
      }
    }

    // Public event page
    console.log("\n=== Phase 4: Public event page ===");
    const pubCtx = await browser.newContext({
      viewport: { width: 1280, height: 800 },
      ignoreHTTPSErrors: true,
    });
    const pubPage = await pubCtx.newPage();

    try {
      // Find the public ticket link from the event detail page
      await ensureLoggedIn(page);
      await goto(page, eventUrl);
      const allLinks = await getLinks(page);
      const publicLink = allLinks.find(
        (l) =>
          (l.text.toLowerCase().includes("public") ||
            l.text.toLowerCase().includes("view") ||
            l.text.toLowerCase().includes("ticket")) &&
          !l.href.includes("/admin/"),
      );
      if (publicLink) {
        console.log(
          `Found public link: ${publicLink.text} -> ${publicLink.href}`,
        );
        await goto(pubPage, publicLink.href);
        await screenshot(pubPage, "public-ticket-page");
        await fullScreenshot(pubPage, "public-ticket-page-full");
      }
    } catch (err) {
      console.log(`Public page error: ${err.message.slice(0, 80)}`);
    }
    await pubCtx.close();
  }

  // ── Phase 5: Mobile ──
  console.log("\n=== Phase 5: Mobile ===");
  const mobileCtx = await browser.newContext({
    viewport: { width: 390, height: 844 },
    isMobile: true,
    ignoreHTTPSErrors: true,
  });
  const mobilePage = await mobileCtx.newPage();

  try {
    await goto(mobilePage, BASE_URL);
    if ((await mobilePage.title()).toLowerCase().includes("login")) {
      await mobilePage.fill('input[name="username"]', "demo");
      await mobilePage.fill('input[name="password"]', "demo1234");
      await mobilePage.evaluate(() => {
        const field = document.querySelector('[name="username"]');
        const form = field?.closest("form");
        if (form) form.submit();
      });
      await mobilePage.waitForLoadState("domcontentloaded");
      await mobilePage.waitForTimeout(3000);
    }

    if (!mobilePage.url().includes("login")) {
      await screenshot(mobilePage, "mobile-dashboard");

      if (eventLinks && eventLinks.length > 0) {
        await goto(mobilePage, eventLinks[0].href);
        if (!mobilePage.url().includes("login")) {
          await screenshot(mobilePage, "mobile-event");
        }
      }
    }
  } catch (err) {
    console.log(`Mobile error: ${err.message.slice(0, 80)}`);
  }
  await mobileCtx.close();

  // ── Summary ──
  console.log("\n=== Summary ===");
  const files = readdirSync(SCREENSHOTS_DIR).filter((f) => f.endsWith(".png"));
  console.log(`Total: ${files.length} screenshots`);
  for (const f of files) console.log(`  - ${f}`);

  await browser.close();
};

run().catch((err) => {
  console.error("Fatal:", err.message);
  process.exit(1);
});
