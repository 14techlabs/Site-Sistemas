import { chromium } from "playwright";
import { mkdir } from "node:fs/promises";
import path from "node:path";

const targets = [
  { name: "14tech", url: process.env.BASE_URL_14TECH ?? "http://127.0.0.1:5173" },
  { name: "suapre", url: process.env.BASE_URL_SUAPRE ?? "http://127.0.0.1:5175" },
  { name: "sigac", url: process.env.BASE_URL_SIGAC ?? "http://127.0.0.1:5173" },
  { name: "gardian", url: process.env.BASE_URL_GARDIAN ?? "http://127.0.0.1:5173" },
  { name: "frotason", url: process.env.BASE_URL_FROTASON ?? "http://127.0.0.1:5173" },
];
const output = path.resolve("artifacts/screenshots/baseline");
await mkdir(output, { recursive: true });
const browser = await chromium.launch({ headless: true });
try {
  for (const target of targets) {
    for (const viewport of [{ width: 1440, height: 900 }, { width: 390, height: 844 }]) {
      const page = await browser.newPage({ viewport, deviceScaleFactor: 1 });
      await page.emulateMedia({ reducedMotion: "reduce" });
      await page.goto(target.url, { waitUntil: "networkidle", timeout: 60000 });
      await page.addStyleTag({ content: "*, *::before, *::after { animation: none !important; transition: none !important; caret-color: transparent !important; scroll-behavior: auto !important; }" });
      await page.screenshot({ path: path.join(output, `${target.name}-${viewport.width}x${viewport.height}.png`), fullPage: true, animations: "disabled" });
      await page.close();
    }
  }
} finally { await browser.close(); }
