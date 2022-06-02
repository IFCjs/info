/**
 * @type { import("./types").Config }
 */
export const config = {
  sourceLanguage: "en",
  outputLanguages: ["ja", "zh"],
  docs: {
    source: "docs",
    output: "i18n/$language$/docusaurus-plugin-content-docs/current",
  },
  blog: {
    source: "blog",
    output: "i18n/$language$/docusaurus-plugin-content-blog",
  },
  translations: {
    source: "i18n",
    output: "i18n",
  },
};
