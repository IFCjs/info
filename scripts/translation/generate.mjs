import glob from "glob";
import { fromMarkdown } from "mdast-util-from-markdown";
import { mdxFromMarkdown } from "mdast-util-mdx";
import { mdxjs } from "micromark-extension-mdxjs";
import { remark } from "remark";
import remarkComment from "remark-comment";
import remarkFrontmatter from "remark-frontmatter";
import remarkMdx from "remark-mdx";
import { visit } from "unist-util-visit";
import { config } from "./config.mjs";
import {
  CWD,
  IGNORE_NODE_TYPES,
  endsWith,
  getFile,
  getInferredPathStart,
  getMdxAst,
  getOutputsPattern,
  setFile,
} from "./utils.mjs";

function main() {
  for (const files of config.files) {
    // get extraction sources paths and do loop operation on them
    const paths = glob.sync(files.sourcesPattern, {
      root: CWD,
    });

    const inferredPathStart = getInferredPathStart(files.sourcesPattern);
    const outputsPattern = getOutputsPattern(files.outputsPattern);

    for (const path of paths) {
      const inferredPath = path.slice(inferredPathStart);
      const outputPatttern = outputsPattern.replace(
        "%infer_path%",
        inferredPath
      );

      if (endsWith(".mdx")(path)) {
        const jsonSourcePath = outputPatttern.replace(".mdx", ".json");

        const mdx = getFile(path);

        for (const language of config.outputLanguages) {
          const { value: strings } = getFile(
            jsonSourcePath.replace("%lang_code%", language)
          );

          const translatedAst = getTranslatedAst(
            getMdxAst(mdx),
            JSON.parse(strings)
          );

          const translatedMdx = remark()
            .use(remarkFrontmatter)
            .use(remarkMdx)
            .use(remarkComment, { ast: true })
            .stringify(translatedAst);

          setFile({
            path: outputPatttern.replace("%lang_code%", language),
            value: translatedMdx,
          });
        }
      }
    }
  }
}

main();

/**
 * @param { import('remark-mdx').Root } ast
 * @param { string[] } strings
 * @returns { import('remark-mdx').Root }
 */
function getTranslatedAst(ast, strings) {
  const translatedStrings = strings.reverse();

  visit(ast, (node, _index, parent) => {
    delete node.position;

    if (
      parent === undefined ||
      parent.type !== "root" ||
      IGNORE_NODE_TYPES.includes(node.type)
    ) {
      return;
    }

    const translatedNode = fromMarkdown(translatedStrings.pop(), {
      extensions: [mdxjs()],
      mdastExtensions: [mdxFromMarkdown()],
    }).children[0];

    for (const property in node) {
      node[property] = translatedNode[property];
    }
  });

  return ast;
}
