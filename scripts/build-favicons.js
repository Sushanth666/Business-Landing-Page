const fs = require('fs');

const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none">
  <!-- Top Circle -->
  <circle cx="16" cy="6.5" r="2.8" stroke="#FF4820" stroke-width="2.6" fill="none" />
  <!-- Center Vertical Stem -->
  <path d="M16 10.5V20" stroke="#FF4820" stroke-width="2.6" stroke-linecap="round" />
  <!-- Outer U Shape -->
  <path d="M6.8 11.5V19C6.8 24.1 10.9 28.2 16 28.2C21.1 28.2 25.2 24.1 25.2 19V11.5" stroke="#FF4820" stroke-width="2.6" stroke-linecap="round" />
</svg>`;

fs.writeFileSync('./public/favicon.svg', svgContent);
fs.writeFileSync('./public/logo-icon.svg', svgContent);

const pngBuf = fs.readFileSync('./public/favicon.png');
const svgBase64 = 'data:image/svg+xml;base64,' + Buffer.from(svgContent).toString('base64');
const pngBase64 = 'data:image/png;base64,' + pngBuf.toString('base64');

console.log('SVG Base64:', svgBase64);
console.log('PNG Base64:', pngBase64);
