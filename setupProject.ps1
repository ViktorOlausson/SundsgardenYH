param(
    [string]$ProjectPath = "."
)

Set-Location $ProjectPath

if (-not (Test-Path "package.json")) {
    npm init -y
}

npm install express @prisma/client dotenv pg zod @prisma/adapter-pg
npm install -D jest prisma @types/express @types/pg @eslint/js eslint eslint-config-prettier eslint-plugin-prettier globals jiti nodemon prettier ts-node typescript typescript-eslint

npx tsc --init

if (-not (Test-Path "src")) {
    New-Item -ItemType Directory -Path "src" | Out-Null
}

if (-not (Test-Path "src/server.ts")) {
    if (Test-Path "server.ts") {
        Move-Item -Path "server.ts" -Destination "src/server.ts"
    } else {
@'
import express from "express";
// import { PrismaClient } from "./generated/prisma/client.js";
// import { PrismaPg } from "@prisma/adapter-pg";
// import "dotenv/config";

const app = express();
app.use(express.json());
const PORT = 3000;
// const connectionString = process.env.DATABASE_URL;

// if (!connectionString) {
//   throw new Error("DATABASE_URL is not set");
// }

// const adapter = new PrismaPg({ connectionString });
// const prisma = new PrismaClient({ adapter });

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:3000`);
});

app.get("/ping", (req, res) => {
  res.json({ message: "pong" });
});
'@ | Set-Content "src/server.ts"
    }
}

if (-not (Test-Path "__tests__")) {
    New-Item -ItemType Directory -Path "__tests__" | Out-Null
}

if (-not (Test-Path "__tests__/unit")) {
    New-Item -ItemType Directory -Path "__tests__/unit" | Out-Null
}

if (-not (Test-Path "__tests__/integrations")) {
    New-Item -ItemType Directory -Path "__tests__/integrations" | Out-Null
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

if (Test-Path "eslint.config.ts") {
    Remove-Item -Path "eslint.config.ts"
}

@'
import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import { defineConfig } from "eslint/config";
import eslintPrettier from "eslint-plugin-prettier/recommended";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts}"],
    plugins: { js },
    extends: ["js/recommended"],
    languageOptions: { globals: globals.node },
  },
  eslintPrettier,
  tseslint.configs.recommended,
  {
    rules: {
      "@typescript-eslint/no-unused-vars": "off",
      "no-undef": "warn",
      "arrow-body-style": ["error", "always"],
      "prettier/prettier": ["error", { semi: true }],
      "prefer-template": "error",
      //New stuff:
      // "space-before-function-paren": ["error", "never"],
      // "space-infix-ops": "error",
      // "arrow-spacing": ["error", { before: true, after: true }],
      // "key-spacing": ["error", { beforeColon: false, afterColon: true }],
      "space-infix-ops": "error",
      "arrow-spacing": "error",
      "keyword-spacing": "error",
      "comma-spacing": "error",
      "@typescript-eslint/no-explicit-any": "off",

      "capitalized-comments": [
        "error",
        "always",
        {
          ignorePattern: "pragma|ignored",
          ignoreInlineComments: true,
        },
      ],
    },
  },
]);
'@ | Set-Content "eslint.config.mts"

$packageJson = Get-Content "package.json" -Raw | ConvertFrom-Json

if (-not $packageJson.scripts) {
    $packageJson | Add-Member -MemberType NoteProperty -Name "scripts" -Value ([pscustomobject]@{})
}

$packageJson.scripts | Add-Member -MemberType NoteProperty -Name "start" -Value "set NODE_NO_WARNINGS=1&& node --loader ts-node/esm src/server.ts" -Force
$packageJson.scripts | Add-Member -MemberType NoteProperty -Name "dev" -Value "nodemon --watch . --ext ts --exec `"set NODE_NO_WARNINGS=1&& node --loader ts-node/esm`" src/server.ts" -Force
$packageJson.scripts | Add-Member -MemberType NoteProperty -Name "test" -Value "jest" -Force
$packageJson.scripts | Add-Member -MemberType NoteProperty -Name "lint" -Value "eslint" -Force
$packageJson.scripts | Add-Member -MemberType NoteProperty -Name "lint:fix" -Value "eslint --fix" -Force
$packageJson.scripts | Add-Member -MemberType NoteProperty -Name "migrate" -Value "node scripts/migrate.mjs" -Force
$packageJson | Add-Member -MemberType NoteProperty -Name "type" -Value "module" -Force

$packageJson | ConvertTo-Json -Depth 20 | Set-Content "package.json"

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
