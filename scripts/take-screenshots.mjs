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

const screenshot = async (page, name) => {
  const path = join(SCREENSHOTS_DIR, `${name}.png`);
  await page.screenshot({ path, fullPage: false });
  console.log(`  >> ${name}.png`);
};

const fullScreenshot = async (page, name) => {
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

const isLoggedIn = (page) => !page.url().includes("login") && !page.url().includes("setup");

const getLinks = async (page) =>
  page.locator("a").evaluateAll((els) =>
    els.map((el) => ({ href: el.href, text: el.textContent.trim() }))
  );

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

  // ── Phase 1: Login and create event WITHOUT typing (let demo fill data) ──
  console.log("=== Phase 1: Create event (no typing) ===");
  if (!(await login(page))) {
    console.log("Cannot log in. Aborting.");
    await browser.close();
    return;
  }

  await goto(page, `${BASE_URL}/admin/event/new`);
  await fullScreenshot(page, "create-event-form");

  // Set form values via JavaScript to bypass demo mode text interception
  // Then submit via JS as well
  await page.evaluate(() => {
    const setVal = (name, value) => {
      const el = document.querySelector(`[name="${name}"]`);
      if (el) {
        const nativeSetter = Object.getOwnPropertyDescriptor(
          HTMLInputElement.prototype,
          "value",
        )?.set;
        if (nativeSetter) nativeSetter.call(el, value);
        else el.value = value;
        el.dispatchEvent(new Event("input", { bubbles: true }));
        el.dispatchEvent(new Event("change", { bubbles: true }));
      }
    };
    setVal("name", "Summer Music Festival 2026");
    setVal("description", "An outdoor music festival with live bands and food");
    setVal("location", "Village Hall");
    setVal("max_attendees", "200");
    setVal("unit_price", "15.00");
    const form = document.querySelector("form");
    if (form) form.submit();
  });
  await page.waitForLoadState("domcontentloaded");
  await page.waitForTimeout(3000);
  console.log(`After form submit: ${page.url()}`);

  // Check if still logged in
  const stillLoggedIn = isLoggedIn(page);
  console.log(`Still logged in: ${stillLoggedIn}`);

  if (!stillLoggedIn) {
    console.log("Got logged out after event create. Logging back in...");
    await login(page);
  }

  // ── Phase 2: Screenshot all admin pages ──
  console.log("\n=== Phase 2: Admin screenshots ===");
  if (!isLoggedIn(page)) await login(page);

  // Dashboard
  await goto(page, `${BASE_URL}/admin/`);
  await screenshot(page, "dashboard");

  // Get body text to check for events
  const dashText = await page.locator("body").innerText();
  console.log(`Dashboard text (first 300): ${dashText.slice(0, 300)}`);

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
    if (!isLoggedIn(page)) await login(page);
    await goto(page, `${BASE_URL}${path}`);
    if (isLoggedIn(page)) {
      await screenshot(page, name);
    }
  }

  // Full page versions
  if (!isLoggedIn(page)) await login(page);
  await goto(page, `${BASE_URL}/admin/settings`);
  if (isLoggedIn(page)) await fullScreenshot(page, "settings-full");

  if (!isLoggedIn(page)) await login(page);
  await goto(page, `${BASE_URL}/admin/guide`);
  if (isLoggedIn(page)) await fullScreenshot(page, "guide-full");

  // ── Phase 3: Event details ──
  console.log("\n=== Phase 3: Event details ===");
  if (!isLoggedIn(page)) await login(page);
  await goto(page, `${BASE_URL}/admin/`);

  const eventPageLinks = await getLinks(page);
  const eventLinks = eventPageLinks.filter(
    (l) => l.href.match(/\/admin\/event\/\d/) && !l.href.includes("/new")
  );
  console.log(`Found ${eventLinks.length} events: ${JSON.stringify(eventLinks.map((l) => l.text))}`);

  if (eventLinks.length > 0) {
    const eventUrl = eventLinks[0].href;

    await goto(page, eventUrl);
    if (isLoggedIn(page)) {
      await screenshot(page, "event-detail");
      await fullScreenshot(page, "event-detail-full");

      // Find event sub-page links
      const detailLinks = await getLinks(page);
      const subLinks = detailLinks.filter(
        (l) =>
          l.href.startsWith(eventUrl) &&
          l.href !== eventUrl &&
          !l.href.includes("logout") &&
          !l.href.includes("delete")
      );
      console.log("Event sub-pages:");
      for (const l of subLinks) console.log(`  ${l.text} -> ${l.href}`);

      for (const link of subLinks) {
        const subName = link.href
          .replace(eventUrl, "")
          .replace(/^\//, "")
          .replace(/\//g, "-")
          .replace(/\?.*/, "");
        if (!subName) continue;

        if (!isLoggedIn(page)) await login(page);
        await goto(page, link.href);
        if (isLoggedIn(page)) {
          await screenshot(page, `event-${subName}`);
        }
      }
    }

    // Public event page
    console.log("\n=== Phase 4: Public event page ===");
    const eventId = eventUrl.match(/\/event\/(\d+)/)?.[1];
    if (eventId) {
      const pubCtx = await browser.newContext({
        viewport: { width: 1280, height: 800 },
        ignoreHTTPSErrors: true,
      });
      const pubPage = await pubCtx.newPage();

      // Check if the public URL is /event/{slug} or /event/{id}
      // The public event page might have a different URL pattern
      try {
        // Try a few public URL patterns
        for (const pubPath of [`/event/${eventId}`, `/e/${eventId}`]) {
          await goto(pubPage, `${BASE_URL}${pubPath}`);
          const pubTitle = await pubPage.title();
          console.log(`Public ${pubPath}: ${pubTitle}`);
          if (!pubTitle.includes("Login") && !pubTitle.includes("Not Found")) {
            await screenshot(pubPage, "public-event");
            await fullScreenshot(pubPage, "public-event-full");
            break;
          }
        }

        // Also check the event detail page for a "View public page" link
        if (!isLoggedIn(page)) await login(page);
        await goto(page, eventUrl);
        const allLinks = await getLinks(page);
        const publicLink = allLinks.find(
          (l) =>
            (l.text.toLowerCase().includes("public") ||
              l.text.toLowerCase().includes("view") ||
              l.text.toLowerCase().includes("ticket")) &&
            !l.href.includes("/admin/")
        );
        if (publicLink) {
          console.log(`Found public link: ${publicLink.text} -> ${publicLink.href}`);
          await goto(pubPage, publicLink.href);
          await screenshot(pubPage, "public-ticket-page");
          await fullScreenshot(pubPage, "public-ticket-page-full");
        }
      } catch (err) {
        console.log(`Public page error: ${err.message.slice(0, 80)}`);
      }
      await pubCtx.close();
    }
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
      // Use evaluate to submit to avoid timeout issues with mobile clicks
      await mobilePage.evaluate(() => {
        const form = document.querySelector("form");
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
