/**
 * One-time brand asset pipeline.
 * Trims the transparent padding from the supplied 2000x2000 logo exports,
 * emits web-ready PNGs into public/brand, and generates favicon + OG images.
 *
 * Run: node scripts/process-assets.mjs
 */
import sharp from "sharp";
import { mkdir } from "node:fs/promises";
import path from "node:path";

const SRC = "/Users/mac/Desktop/Front/Images";
const OUT = path.resolve("public/brand");
const APP = path.resolve("app");

await mkdir(OUT, { recursive: true });

async function trimmed(file) {
  return sharp(path.join(SRC, file)).trim({ threshold: 10 });
}

async function emit(file, name, height) {
  const img = await trimmed(file);
  const resized = img.resize({ height, withoutEnlargement: true });
  await resized.png({ compressionLevel: 9 }).toFile(path.join(OUT, `${name}.png`));
  const meta = await sharp(path.join(OUT, `${name}.png`)).metadata();
  console.log(`${name}.png ${meta.width}x${meta.height}`);
}

// Navbar / footer wordmarks (2x for retina at display size)
await emit("FrontisT_horizental.png", "logo-horizontal", 96);
await emit("FrontisT_stacked.png", "logo-stacked", 400);
await emit("favicon.png", "mark", 256);

// Favicons — the mark centered on transparent, square canvas
async function icon(size, dest) {
  const buf = await (await trimmed("favicon.png"))
    .resize(Math.round(size * 0.86), Math.round(size * 0.86), {
      fit: "contain",
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    })
    .png()
    .toBuffer();
  await sharp({
    create: { width: size, height: size, channels: 4, background: { r: 0, g: 0, b: 0, alpha: 0 } },
  })
    .composite([{ input: buf, gravity: "centre" }])
    .png()
    .toFile(dest);
  console.log(`icon ${size} -> ${dest}`);
}

await icon(512, path.join(APP, "icon.png"));
await icon(180, path.join(APP, "apple-icon.png"));

// OG image: stacked logo centered on white, 1200x630
const stacked = await (await trimmed("FrontisT_stacked.png"))
  .resize(null, 380, { fit: "inside" })
  .png()
  .toBuffer();
await sharp({
  create: { width: 1200, height: 630, channels: 4, background: "#ffffff" },
})
  .composite([{ input: stacked, gravity: "centre" }])
  .png()
  .toFile(path.join(OUT, "og.png"));
console.log("og.png 1200x630");
