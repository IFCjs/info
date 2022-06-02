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
import { IGNORE_NODE_TYPES, endsWith, getFile, setFile } from "./utils.mjs";

function main() {
  for (const language of config.outputLanguages) {
    const translationsOutputFilePaths = glob.sync(
      config.translations.output.concat(`/${language}`, "/**/*")
    );

    for (const path of translationsOutputFilePaths) {
      if (endsWith(".mdx.json")(path)) {
        const astFilePath = path
          .replace(`/${language}/`, `/${config.sourceLanguage}/`)
          .replace(".mdx.json", ".mdx.ast");
        const ast = JSON.parse(getFile(astFilePath));
        const strings = JSON.parse(getFile(path));

        const translatedAst = getTranslatedAst(ast, strings);
        const translatedMdx = remark()
          .use(remarkFrontmatter)
          .use(remarkMdx)
          .use(remarkComment, { ast: true })
          .stringify(translatedAst);

        setFile({
          path: path.slice(0, -5),
          value: translatedMdx,
        });
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
