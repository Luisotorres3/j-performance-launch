import { cp, readFile, writeFile } from "node:fs/promises";

await cp("qa.local/v1-source/dist", "dist/v1", { recursive: true });
const file = "dist/v1/index.html";
let html = await readFile(file, "utf8");
html = html.replace(/<meta\s+name="robots"[^>]*>/gi, "");
html = html.replace("</head>", '<meta name="robots" content="noindex,nofollow" /></head>');
await writeFile(file, html);
console.log(
  "V1 preview available at /v1/ (not indexed). Exact rollback remains v1-pages-snapshot."
);
