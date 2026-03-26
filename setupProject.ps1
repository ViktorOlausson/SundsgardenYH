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

npx prisma init
npx eslint --init

npm pkg set 'scripts.start=set NODE_NO_WARNINGS=1&& node --loader ts-node/esm server.ts'
npm pkg set 'scripts.dev=nodemon --watch . --ext ts --exec "set NODE_NO_WARNINGS=1&& node --loader ts-node/esm" server.ts'
npm pkg set 'scripts.lint=eslint'
npm pkg set 'scripts.lint:fix=eslint --fix'
npm pkg set 'scripts.migrate=prisma migrate dev && prisma generate'
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
