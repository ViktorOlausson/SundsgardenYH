param(
    [string]$ProjectPath = "."
)

Set-Location $ProjectPath

if (-not (Test-Path "package.json")) {
    npm init -y
}

npm install express @prisma/client dotenv pg zod @prisma/adapter-pg
npm install -D prisma @types/express @types/pg @eslint/js eslint eslint-config-prettier eslint-plugin-prettier globals jiti nodemon prettier ts-node typescript typescript-eslint

npx tsc --init

if (-not (Test-Path "server.ts")) {
@'
import express from "express";

const app = express();
app.use(express.json());
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:3000`);
});

app.get("/ping", (req, res) => {
  res.json({ message: "pong" });
});
'@ | Set-Content "server.ts"
}

if (-not (Test-Path "scripts")) {
    New-Item -ItemType Directory -Path "scripts" | Out-Null
}

if (-not (Test-Path "scripts/migrate.mjs")) {
@'
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
'@ | Set-Content "scripts/migrate.mjs"
}

npx prisma init
npx eslint --init

npm pkg set 'scripts.start=set NODE_NO_WARNINGS=1&& node --loader ts-node/esm server.ts'
npm pkg set 'scripts.dev=nodemon --watch . --ext ts --exec "set NODE_NO_WARNINGS=1&& node --loader ts-node/esm" server.ts'
npm pkg set 'scripts.lint=eslint'
npm pkg set 'scripts.lint:fix=eslint --fix'
npm pkg set 'scripts.migrate=node scripts/migrate.mjs'
npm pkg set 'type=module'

if (-not (Test-Path "tsconfig.json")) {
@'
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "NodeNext",
    "moduleResolution": "NodeNext",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true
  }
}
'@ | Set-Content "tsconfig.json"
}
