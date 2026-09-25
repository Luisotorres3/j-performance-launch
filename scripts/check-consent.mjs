import assert from "node:assert/strict";
const { chromium } = await import(process.env.PLAYWRIGHT_MODULE || "playwright");
const browser = await chromium.launch({ channel: "msedge", headless: true });
const page = await browser.newPage();
let analyticsRequests = 0;
try {
  await page.route("**/src/constants/analytics.ts*", route => route.fulfill({ contentType: "application/javascript", body: 'export const measurementId="G-QATEST"; export const analyticsConfigured=true;' }));
  await page.route("https://www.googletagmanager.com/**", route => { analyticsRequests++; return route.fulfill({ contentType: "application/javascript", body: "/* analytics provider mocked: no data leaves browser */" }); });
  await page.goto("http://127.0.0.1:5173/");
  await page.locator(".cookie-notice").waitFor();
  assert.equal(analyticsRequests, 0);
  await page.getByRole("button", { name: "Rechazar", exact: true }).click();
  assert.equal(analyticsRequests, 0);
  await page.evaluate(() => window.dispatchEvent(new Event("open-cookie-preferences")));
  await page.getByRole("button", { name: "Aceptar", exact: true }).click();
  await page.waitForTimeout(300);
  assert.equal(analyticsRequests, 1);
  await page.getByRole("link", { name: "Contacto", exact: true }).first().click();
  await page.locator(".contact-form").waitFor();
  const events = await page.evaluate(() => window.dataLayer.filter(item => item[0] === "event").map(item => item[2].page_location));
  assert(events.every(url => !url.includes("contacto") && !url.includes("?")));
  await page.evaluate(() => { document.cookie = "_ga=qa; path=/"; window.dispatchEvent(new Event("open-cookie-preferences")); });
  await page.getByRole("button", { name: "Rechazar", exact: true }).click();
  assert.equal(await page.evaluate(() => window["ga-disable-G-QATEST"]), true);
  assert.equal(await page.evaluate(() => document.cookie.includes("_ga=")), false);
  console.log("PASS: no analytics before consent, rejection, opt-in, private routes excluded, revocation and cookie removal. Provider mocked.");
} finally { await browser.close(); }
