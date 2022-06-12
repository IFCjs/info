/** @type { import('deepmark').UserConfig } */
export default {
  source_language: "en",
  output_languages: ["ja", "zh"],
  directories: {
    sources: ["blog", "docs", "i18n/%language%"],
    outputs: [
      "i18n/%language%/docusaurus-plugin-content-blog",
      "i18n/%language%/docusaurus-plugin-content-docs/current",
      "i18n/%language%",
    ],
  },
  ignore_components: ["Scene"],
  components_attributes: {
    IfcCard: ["children", "title"],
    IfcTab: ["items.content"],
    IfcImage: ["image"],
  },
  frontmatter: ["author_title", "title", "tags"],
};
