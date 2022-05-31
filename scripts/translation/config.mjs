/**
 * @typedef Files
 *
 * @property { string } sourcesPattern
 * @property { string } outputsPattern
 */

/**
 * @typedef Config
 *
 * @property { string } sourceLanguage
 * @property { string[] } outputLanguages
 * @property { Files[] } files
 */

/**
 * @type { Config }
 */
export const config = {
  sourceLanguage: "en",
  outputLanguages: ["ja", "zh"],
  files: [
    {
      sourcesPattern: "/docs/**/*.*",
      outputsPattern:
        "/i18n/%lang_code%/docusaurus-plugin-content-docs/current/%infer_path%",
    },
    {
      sourcesPattern: "/blog/**/*.*",
      outputsPattern:
        "/i18n/%lang_code%/docusaurus-plugin-content-blog/%infer_path%",
    },
  ],
};
