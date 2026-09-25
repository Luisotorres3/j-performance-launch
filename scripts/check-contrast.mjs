import { writeFile } from "node:fs/promises";
const { chromium } = await import(process.env.PLAYWRIGHT_MODULE || "playwright");
const browser = await chromium.launch({ channel: "msedge", headless: true });
const page = await browser.newPage({ reducedMotion: "reduce", viewport: { width: 1440, height: 1000 } });
await page.addInitScript(() => localStorage.setItem("cookieConsent", "rejected"));
const findings = [];
try {
  for (const path of ["/", "/planes", "/retos", "/contacto", "/condiciones"]) {
    await page.goto(`http://127.0.0.1:4173${path}`);
    await page.locator("h1").waitFor();
    const issues = await page.evaluate(() => {
      const rgb = color => color.match(/[\d.]+/g)?.map(Number);
      const luminance = color => color.slice(0, 3).map(c => { c /= 255; return c <= .04045 ? c / 12.92 : ((c + .055) / 1.055) ** 2.4; }).reduce((sum, c, i) => sum + c * [.2126, .7152, .0722][i], 0);
      return [...document.querySelectorAll("body *")].flatMap(el => {
        if (![...el.childNodes].some(n => n.nodeType === Node.TEXT_NODE && n.textContent.trim())) return [];
        const r = el.getBoundingClientRect();
        if (!r.width || !r.height || r.bottom < 0 || r.top > innerHeight || el.closest("[aria-hidden=true]")) return [];
        const style = getComputedStyle(el);
        if (style.visibility === "hidden" || Number(style.opacity) === 0) return [];
        let bg;
        for (let node = el; node; node = node.parentElement) {
          const s = getComputedStyle(node);
          // Photos and gradients require manual inspection, not a flat-color estimate.
          if (s.backgroundImage !== "none" || Number(s.opacity) < 1) return [];
          const c = rgb(s.backgroundColor);
          if (c && (c.length === 3 || c[3] === 1)) { bg = c; break; }
          if (c?.[3] > 0) return [];
        }
        if (!bg) return [];
        const fg = rgb(style.color);
        if (!fg || (fg.length === 4 && fg[3] < 1)) return [];
        const a = luminance(fg), b = luminance(bg);
        const ratio = (Math.max(a, b) + .05) / (Math.min(a, b) + .05);
        const size = parseFloat(style.fontSize);
        const required = size >= 24 || (size >= 18.66 && Number(style.fontWeight) >= 700) ? 3 : 4.5;
        return ratio < required ? [{ text: el.textContent.trim().slice(0, 70), className: el.className, ratio: +ratio.toFixed(2), required }] : [];
      });
    });
    findings.push(...issues.map(issue => ({ path, ...issue })));
  }
  await writeFile("qa.local/contrast-results.json", JSON.stringify(findings, null, 2));
  console.log(JSON.stringify(findings, null, 2));
} finally { await browser.close(); }
