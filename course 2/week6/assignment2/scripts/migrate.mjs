import { spawnSync } from "node:child_process";

const args = process.argv.slice(2);

if (!args.includes("--name")) {
  console.error('Missing required argument: --name');
  console.error('Usage: npm run migrate -- --name add_users_table');
  process.exit(1);
}

const prismaBin = process.platform === "win32" ? "npx.cmd" : "npx";

const migrateResult = spawnSync(
  prismaBin,
  ["prisma", "migrate", "dev", ...args],
  { stdio: "inherit" }
);

if (migrateResult.status !== 0) {
  process.exit(migrateResult.status ?? 1);
}

const generateResult = spawnSync(prismaBin, ["prisma", "generate"], {
  stdio: "inherit",
});

process.exit(generateResult.status ?? 1);
