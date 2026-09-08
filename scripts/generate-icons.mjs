import sharp from "sharp";

const icons = [
  { size: 180, path: "public/apple-touch-icon.png" },
  { size: 192, path: "public/icon-192.png" },
  { size: 512, path: "public/icon-512.png" },
];

function artwork(size) {
  const radius = Math.round(size * 0.22);
  const fontSize = Math.round(size * 0.58);

  return Buffer.from(`
    <svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">
      <rect width="${size}" height="${size}" rx="${radius}" fill="#B33A63"/>
      <text x="50%" y="54%" dominant-baseline="middle" text-anchor="middle"
        fill="#FAF6F3" font-family="Georgia, serif" font-size="${fontSize}" font-weight="400">S</text>
      <circle cx="72%" cy="72%" r="${Math.max(3, Math.round(size * 0.026))}" fill="#C79A5B"/>
    </svg>
  `);
}

await Promise.all(
  icons.map(({ size, path }) => sharp(artwork(size)).png().toFile(path))
);
