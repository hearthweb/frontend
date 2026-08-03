import { defineConfig } from "@hey-api/openapi-ts"

export default defineConfig({
  input: "./openapi/openapi.json",
  output: "app/client",
  plugins: [
    "@hey-api/client-fetch",
    "@hey-api/sdk",
    "@hey-api/typescript",
    "zod",
  ],
})
