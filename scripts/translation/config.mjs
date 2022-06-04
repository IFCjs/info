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
    source: "i18n/%language%",
    output: "i18n/%language%",
  },
  components: {
    IfcAlert: [],
    IfcCard: ["title"],
    IfcImage: ["image"],
    IfcTab: ["items", "items.content"],
  },
};
