import fs from "fs-extra";
import glob from "glob";
import { mdxToMarkdown } from "mdast-util-mdx";
import { toMarkdown } from "mdast-util-to-markdown";
import { visit } from "unist-util-visit";
import { config } from "./config.mjs";
import {
  IGNORE_NODE_TYPES,
  endsWith,
  getFile,
  resolvePath,
  setFile,
} from "./utils.mjs";

function main() {
  const blogFilePaths = glob.sync(config.blog.source.concat("/**/*"));
  const docsFilePaths = glob.sync(config.docs.source.concat("/**/*"));

  const blogOutputDir = resolvePath(
    config.blog.output.replace("$language$", config.sourceLanguage)
  );
  const docsOutputDir = resolvePath(
    config.docs.output.replace("$language$", config.sourceLanguage)
  );

  // Clean up output directories.
  fs.removeSync(blogOutputDir);
  fs.removeSync(docsOutputDir);

  /**
   * @type { { source: string; output: string; }[] }
   */
  const nonMdx = [];

  for (const path of blogFilePaths) {
    const inferredPath = path.slice(blogOutputDir.length);
    const outputPath = resolvePath(inferredPath, blogOutputDir);

    if (endsWith(".mdx")(path)) {
      const { value } = getFile(path);

      const ast = getMdxAst(value);
      const strings = getTranslatableStrings(ast);

      setFile({
        path: outputPath.concat(".json"),
        value: JSON.stringify(strings),
      });
    } else {
      nonMdx.push({
        source: path,
        output: outputPath,
      });
    }
  }

  for (const path of docsFilePaths) {
    const inferredPath = path.slice(docsOutputDir.length);
    const outputPath = resolvePath(inferredPath, docsOutputDir);

    if (endsWith(".mdx")(path)) {
      const { value } = getFile(path);

      const ast = getMdxAst(value);
      const strings = getTranslatableStrings(ast);

      setFile({
        path: outputPath.concat(".ast"),
        value: JSON.stringify(ast),
      });

      setFile({
        path: outputPath.concat(".json"),
        value: JSON.stringify(strings),
      });
    } else {
      nonMdx.push({
        source: path,
        output: outputPath,
      });
    }
  }

  // Copy non-mdx files.
  for (const { source, output } of nonMdx) {
    fs.copyFileSync(source, output);
  }
}

main();

/**
 * Get MDX flavored `mdast`.
 *
 * @param { string } value
 * @returns { import('remark-mdx').Root }
 */
function getMdxAst(value) {
  return remark()
    .use(remarkFrontmatter)
    .use(remarkMdx)
    .use(remarkComment, { ast: true })
    .parse(value);
}

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
