// Draws public/og.png, the 1200×630 share card every page points at. Run: npm run og
// The copy comes from src/config.ts, so the card says what the footer and schema say.
import sharp from 'sharp';
import { readFile, writeFile } from 'node:fs/promises';

// config.ts imports images, so it is read as text: a quoted or template string export, `${NAME}` references resolved.
const source = await readFile(new URL('../src/config.ts', import.meta.url), 'utf8');
const constant = (name) => {
  const m = source.match(new RegExp(`^export const ${name} =\\s*(['\`])([^'\`]*)\\1;`, 'm'));
  if (!m) throw new Error(`${name} not found in src/config.ts`);
  return m[2].replace(/\$\{(\w+)\}/g, (_, ref) => constant(ref));
};
const company = constant('COMPANY');
const about = constant('ABOUT_LINE');

// Greedy word wrap into lines that fit the card at 30px.
const lines = about.split(' ').reduce((acc, word) => {
  const last = acc[acc.length - 1];
  if (last !== undefined && (last + ' ' + word).length <= 56) acc[acc.length - 1] = last + ' ' + word;
  else acc.push(word);
  return acc;
}, []);
if (lines.length > 2) throw new Error(`ABOUT_LINE wraps to ${lines.length} lines; the card has room for two`);

const ink = '#0b1526', ac = '#11b3c8', body = '#c5cdd9', dim = '#8a94a6';
const font = 'Lato, DejaVu Sans, sans-serif'; // Lato is on the build machine; the card is a static file, not the site's font
const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;');
const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="${ink}"/>
  <rect x="0" y="0" width="12" height="630" fill="${ac}"/>
  <g transform="translate(88,76) scale(2)" fill="none" stroke="#fff" stroke-width="2.4" stroke-linecap="round">
    <path d="M9 4H4v20h5M19 4h5v20h-5"/>
    <circle cx="14" cy="14" r="3.2" fill="${ac}" stroke="none"/>
  </g>
  <text x="160" y="116" font-family="${font}" font-weight="700" font-size="32" fill="#fff">${esc(company)}</text>
  <text x="88" y="318" font-family="${font}" font-weight="900" font-size="104" letter-spacing="-4" fill="#fff">Stop chasing.</text>
  <text x="88" y="422" font-family="${font}" font-weight="900" font-size="104" letter-spacing="-4" fill="${ac}">Start placing.</text>
  ${lines.map((l, i) => `<text x="88" y="${500 + i * 42}" font-family="${font}" font-weight="500" font-size="30" fill="${body}">${esc(l)}</text>`).join('\n  ')}
  <text x="88" y="586" font-family="${font}" font-weight="700" font-size="20" letter-spacing="3" fill="${dim}">RUNOTECH.COM</text>
</svg>`;

const png = await sharp(Buffer.from(svg)).png({ compressionLevel: 9, palette: true }).toBuffer();
await writeFile(new URL('../public/og.png', import.meta.url), png);
console.log(`public/og.png ${(png.length / 1024).toFixed(0)} KB`);
