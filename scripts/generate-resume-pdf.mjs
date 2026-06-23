// Generates public/resume.pdf from the built /resume page using Puppeteer.
//
// Flow: serve the already-built site with `astro preview`, render /resume to a
// Letter-size PDF, write it to public/resume.pdf. A subsequent `astro build`
// copies that file into build/ for deployment. The "Résumé" button links to
// /resume.pdf.
//
// The preview port is read from astro's own startup output rather than
// hard-coded, so it works even when other dev servers occupy nearby ports.
//
// Usage:  npm run build && npm run build:resume   (or just: npm run resume)
import { spawn } from "node:child_process";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";
import { mkdir } from "node:fs/promises";
import puppeteer from "puppeteer";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, "..");
const OUT = resolve(root, "public/resume.pdf");
const astroBin = resolve(root, "node_modules/.bin/astro");

// Start `astro preview` and resolve with the base URL it actually bound to
// (astro auto-increments the port if the default is busy).
function startPreview() {
  return new Promise((resolvePromise, reject) => {
    const server = spawn(astroBin, ["preview"], { cwd: root });
    let out = "";
    const onData = (chunk) => {
      out += chunk.toString();
      const m = out.match(/https?:\/\/localhost:(\d+)/);
      if (m) {
        server.stdout.off("data", onData);
        resolvePromise({ server, base: `http://localhost:${m[1]}` });
      }
    };
    server.stdout.on("data", onData);
    server.stderr.on("data", (c) => process.stderr.write(c));
    server.on("error", reject);
    setTimeout(() => reject(new Error("Timed out starting astro preview")), 30000);
  });
}

async function main() {
  await mkdir(resolve(root, "public"), { recursive: true });

  console.log("▸ Starting astro preview …");
  const { server, base } = await startPreview();
  const url = `${base}/resume`;
  console.log(`▸ Server up at ${base}. Rendering /resume → PDF …`);

  let browser;
  try {
    browser = await puppeteer.launch({ headless: "new" });
    const page = await browser.newPage();
    const res = await page.goto(url, { waitUntil: "networkidle0", timeout: 30000 });
    if (!res || !res.ok()) {
      throw new Error(`/resume returned HTTP ${res ? res.status() : "no response"}`);
    }
    // Ensure web fonts are fully loaded before snapshotting.
    await page.evaluateHandle("document.fonts.ready");
    await page.pdf({
      path: OUT,
      printBackground: true,
      preferCSSPageSize: true, // honor @page { size: Letter }
      format: "Letter", // fallback if preferCSSPageSize is unavailable
    });
    console.log(`✓ Wrote ${OUT}`);
  } finally {
    if (browser) await browser.close();
    server.kill("SIGTERM");
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
