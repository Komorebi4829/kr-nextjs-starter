/** @format */
module.exports = {
  singleQuote: true,
  trailingComma: "all",
  printWidth: 140,
  proseWrap: "never",
  endOfLine: "auto",
  semi: false,
  tabWidth: 2,
  vueIndentScriptAndStyle: true,
  htmlWhitespaceSensitivity: "strict",
  useTabs: false,
  overrides: [
    {
      files: ".prettierrc",
      options: {
        parser: "json",
      },
    },
    {
      files: "document.ejs",
      options: {
        parser: "html",
      },
    },
  ],
  plugins: [
    "prettier-plugin-tailwindcss"
  ]
};
