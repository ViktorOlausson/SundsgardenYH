param(
    [string]$ProjectPath = "."
)

Set-Location $ProjectPath

if (-not (Test-Path "package.json")) {
    npm init -y
}

npm install express @prisma/client dotenv pg zod
npm install -D prisma @types/express @types/pg @eslint/js eslint eslint-config-prettier eslint-plugin-prettier globals jiti nodemon prettier ts-node typescript typescript-eslint
ni server.ts
npx eslint --init

npm pkg set scripts.dev="nodemon --watch server.ts --exec ts-node server.ts"
npm pkg set scripts.lint="eslint"
npm pkg set scripts."lint:fix"="eslint --fix"
npm pkg set type="module"

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
