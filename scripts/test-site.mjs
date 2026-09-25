import { spawn } from "node:child_process";
import { setTimeout } from "node:timers/promises";

const port = process.env.TEST_PORT || "4175";
const base = `http://127.0.0.1:${port}`;
const server = spawn(
  process.execPath,
  [
    "node_modules/vite/bin/vite.js",
    "preview",
    "--host",
    "127.0.0.1",
    "--port",
    port,
    "--strictPort",
  ],
  { stdio: "inherit" }
);
let serverStopped = false;
server.on("exit", () => {
  serverStopped = true;
});
try {
  let ready = false;
  for (let i = 0; i < 60; i++) {
    if (serverStopped) throw new Error("Preview server stopped; choose another TEST_PORT.");
    try {
      ready = (await fetch(base)).ok;
    } catch {
      /* Wait for preview. */
    }
    if (ready) break;
    await setTimeout(500);
  }
  if (!ready) throw new Error("Preview server did not start.");
  for (const script of ["launch-smoke.mjs", "release-check.mjs"]) {
    const code = await new Promise((resolve, reject) => {
      const test = spawn(process.execPath, [`scripts/${script}`], {
        stdio: "inherit",
        env: { ...process.env, TEST_BASE_URL: base },
      });
      test.on("error", reject);
      test.on("exit", resolve);
    });
    if (code !== 0) throw new Error(`${script} failed (${code}).`);
  }
} finally {
  server.kill();
}
