import { spawn, spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";

const host = "127.0.0.1";
const port = "3212";
const root = fileURLToPath(new URL("../", import.meta.url));
const nextBin = fileURLToPath(new URL("../node_modules/next/dist/bin/next", import.meta.url));
const playwrightBin = fileURLToPath(
  new URL("../node_modules/@playwright/test/cli.js", import.meta.url),
);

const build = spawnSync(process.execPath, [nextBin, "build"], {
  cwd: root,
  stdio: "inherit",
});

if (build.status !== 0) {
  process.exit(build.status ?? 1);
}

const server = spawn(
  process.execPath,
  [nextBin, "start", "--hostname", host, "--port", port],
  { cwd: root, stdio: "inherit" },
);

function stopServer() {
  if (!server.pid || server.killed) return;

  if (process.platform === "win32") {
    spawnSync("taskkill", ["/pid", String(server.pid), "/T", "/F"], {
      stdio: "ignore",
    });
  } else {
    server.kill("SIGTERM");
  }
}

async function waitForServer() {
  const deadline = Date.now() + 120_000;

  while (Date.now() < deadline) {
    if (server.exitCode !== null) {
      throw new Error(`Next.js exited before Playwright started (code ${server.exitCode}).`);
    }

    try {
      const response = await fetch(`http://${host}:${port}`);
      if (response.ok) return;
    } catch {
      // The server is still starting.
    }

    await new Promise((resolve) => setTimeout(resolve, 250));
  }

  throw new Error("Timed out waiting for the Next.js production server.");
}

try {
  await waitForServer();
  const testProcess = spawn(
    process.execPath,
    [playwrightBin, "test", ...process.argv.slice(2)],
    { cwd: root, stdio: "inherit" },
  );
  const exitCode = await new Promise((resolve, reject) => {
    testProcess.once("error", reject);
    testProcess.once("exit", (code) => resolve(code ?? 1));
  });
  process.exitCode = exitCode;
} finally {
  stopServer();
}

process.exit(process.exitCode ?? 1);
