import glob from "glob";
import { Translator } from "deepl-node";
import { config } from "./config.mjs";
import { TranslationMemory } from "./memory.mjs";
import { CWD, getFile } from "./utils.mjs";

const DEEPL_AUTH_KEY = process.env.DEEPL_AUTH_KEY;

function main() {
  const memory = new TranslationMemory({
    cwd: CWD,
    storage: "./scripts/translation/memory.json",
  });
  const deepl = new Translator(DEEPL_AUTH_KEY);

  // loop over output languages
  //    Loop over json files in /i18n/en/.
  //        Handle docusaurus json files and markdown sourced json files differently.
  //        Check translation memory for a given string in a particular language.
  //        If not memorized yet, send it to the request buffer until it reach either 5 strings or 124 KiB in size.
  //        Send request in batches, then save the result in translation memory.
  //        Merge result from translation memory and deepl.
  //        Generate mdx if it sourced from mdx.

  for (const { outputsPattern } of config.files) {
    const paths = glob.sync(outputsPattern, {
      root: CWD,
    });

    for (const language of config.outputLanguages) {
      for (const path of paths) {
        const file = getFile(path);
      }
    }
  }
}

main();
