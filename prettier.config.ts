import type { Config } from "prettier"

const config: Config = {
  endOfLine: "lf",
  semi: false,
  singleQuote: false,
  tabWidth: 2,
  trailingComma: "all",
  useTabs: false,

  plugins: ["prettier-plugin-tailwindcss"],
}

export default config
