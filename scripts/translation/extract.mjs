import fs from "fs-extra";
import glob from "glob";
import { mdxToMarkdown } from "mdast-util-mdx";
import { toMarkdown } from "mdast-util-to-markdown";
import { visit } from "unist-util-visit";
import { config } from "./config.mjs";
import {
  CWD,
  IGNORE_NODE_TYPES,
  endsWith,
  getOutputsPattern,
  getFile,
  getInferredPathStart,
  getMdxAst,
  setFile,
} from "./utils.mjs";

function main() {
  for (const files of config.files) {
    const paths = glob.sync(files.sourcesPattern, {
      root: CWD,
    });

    const inferredPathStart = getInferredPathStart(files.sourcesPattern);
    const outputsPattern = getOutputsPattern(files.outputsPattern).replace(
      "%lang_code%",
      config.sourceLanguage
    );

    // cleanup output directory before writing and copying files
    fs.removeSync(outputsPattern.replace("%infer_path%", ""));

    /**
     * @type { { source: string; destination: string; } }
     */
    const nonMdx = [];

    for (const path of paths) {
      const inferredPath = path.slice(inferredPathStart);

      if (endsWith(".mdx")(path)) {
        const { value } = getFile(path);

        const ast = getMdxAst(value);
        const strings = getTranslatableStrings(ast);

        setFile({
          path: outputsPattern.replace(
            "%infer_path%",
            inferredPath.replace(".mdx", ".json")
          ),
          value: JSON.stringify(strings),
        });
      } else {
        nonMdx.push({
          source: path,
          destination: outputsPattern.replace("%infer_path%", inferredPath),
        });
      }
    }

    // copy non-mdx files
    for (const { source, destination } of nonMdx) {
      fs.copyFileSync(source, destination);
    }
  }
}

main();

function getTranslatableStrings(ast) {
  const strings = [];

  visit(ast, (node, _index, parent) => {
    if (
      parent === undefined ||
      parent.type !== "root" ||
      IGNORE_NODE_TYPES.includes(node.type)
    ) {
      return;
    }

    const string = toMarkdown(node, { extensions: [mdxToMarkdown()] });
    strings.push(string);
  });

  return strings;
}
