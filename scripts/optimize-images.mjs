import sharp from "sharp";
import { stat } from "node:fs/promises";

const files = ["juan-personal", "jps-white", "jps-dark", ...["running", "strength", "hybrid", "opposition"].map(name => `plans/${name}-personal`)];
let before = 0;
let after = 0;
for (const file of files) {
  const source = `src/assets/${file}.png`;
  const target = `src/assets/${file}.webp`;
  await sharp(source).webp({ quality: 82, effort: 6 }).toFile(target);
  before += (await stat(source)).size;
  after += (await stat(target)).size;
}
console.log(JSON.stringify({ originalBytes: before, optimizedBytes: after, savedPercent: Math.round((1 - after / before) * 100) }));
