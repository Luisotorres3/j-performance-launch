import { readFile, writeFile } from "node:fs/promises";

// Embed the original bitmap so the favicon is self-contained; frame only the JP mark.
const logo = await readFile(new URL("../src/assets/jps-white.webp", import.meta.url));
const favicon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="405 50 820 820"><image width="1536" height="1024" href="data:image/webp;base64,${logo.toString("base64")}"/></svg>`;
await writeFile(new URL("../public/favicon-white.svg", import.meta.url), favicon);
