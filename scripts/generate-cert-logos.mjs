import sharp from "sharp";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const dir = path.join(root, "public", "images", "certifications");

if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir, { recursive: true });
}

// 1. ISO 9001:2015 SVG
const isoSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="240" height="240" viewBox="0 0 120 120">
  <circle cx="60" cy="50" r="42" fill="none" stroke="#0F172A" stroke-width="2.5" stroke-dasharray="4 3"/>
  <ellipse cx="60" cy="50" rx="20" ry="42" fill="none" stroke="#0F172A" stroke-width="2"/>
  <line x1="18" y1="50" x2="102" y2="50" stroke="#0F172A" stroke-width="2"/>
  <path d="M25 32 C38 38, 82 38, 95 32" fill="none" stroke="#0F172A" stroke-width="2"/>
  <path d="M25 68 C38 62, 82 62, 95 68" fill="none" stroke="#0F172A" stroke-width="2"/>
  <rect x="26" y="34" width="68" height="32" rx="3" fill="#FFFFFF" stroke="#0F172A" stroke-width="1"/>
  <text x="60" y="58" font-family="Arial, sans-serif" font-size="24" font-weight="900" fill="#0F172A" text-anchor="middle" letter-spacing="-1">ISO</text>
  <text x="60" y="106" font-family="Arial, sans-serif" font-size="14" font-weight="700" fill="#0F172A" text-anchor="middle" letter-spacing="0.5">9001:2015</text>
</svg>`;

// 2. CE Mark SVG
const ceSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="280" height="180" viewBox="0 0 140 90">
  <path d="M54 15 C32 15, 15 28, 15 45 C15 62, 32 75, 54 75" fill="none" stroke="#0F172A" stroke-width="10" stroke-linecap="round"/>
  <path d="M120 15 C98 15, 80 28, 80 45 C80 62, 98 75, 120 75" fill="none" stroke="#0F172A" stroke-width="10" stroke-linecap="round"/>
  <line x1="80" y1="45" x2="104" y2="45" stroke="#0F172A" stroke-width="10" stroke-linecap="round"/>
</svg>`;

// 3. ISI Mark SVG
const isiSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 100 100">
  <rect x="10" y="10" width="80" height="80" rx="4" fill="none" stroke="#0F172A" stroke-width="5"/>
  <path d="M30 25 H38 V75 H30 Z" fill="#0F172A"/>
  <path d="M46 36 C46 27, 68 26, 68 36 C68 46, 46 45, 46 58 C46 72, 70 70, 70 60 L62 60 C62 65, 54 65, 54 58 C54 50, 76 50, 76 36 C76 21, 46 21, 46 36 Z" fill="#0F172A"/>
  <path d="M78 25 H86 V75 H78 Z" fill="#0F172A"/>
  <line x1="10" y1="20" x2="90" y2="20" stroke="#0F172A" stroke-width="2"/>
  <line x1="10" y1="80" x2="90" y2="80" stroke="#0F172A" stroke-width="2"/>
</svg>`;

async function make() {
  await sharp(Buffer.from(isoSvg)).webp().toFile(path.join(dir, "iso-9001-2015.webp"));
  await sharp(Buffer.from(ceSvg)).webp().toFile(path.join(dir, "ce-mark.webp"));
  await sharp(Buffer.from(isiSvg)).webp().toFile(path.join(dir, "isi-mark.webp"));
  console.log("Certification webp files created!");
}

make();
