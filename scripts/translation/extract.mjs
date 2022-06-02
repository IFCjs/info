import fs from "fs-extra";
import glob from "glob";
import { mdxToMarkdown } from "mdast-util-mdx";
import { toMarkdown } from "mdast-util-to-markdown";
import { remark } from "remark";
import remarkComment from "remark-comment";
import remarkFrontmatter from "remark-frontmatter";
import remarkMdx from "remark-mdx";
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
  const blogFilePaths = glob
    .sync(config.blog.source.concat("/**/*.*"))
    .map((path) => resolvePath(path));
  const docsFilePaths = glob
    .sync(config.docs.source.concat("/**/*.*"))
    .map((path) => resolvePath(path));

  const blogOutputDir = resolvePath(
    config.blog.output.replace("$language$", config.sourceLanguage)
  );
  const docsOutputDir = resolvePath(
    config.docs.output.replace("$language$", config.sourceLanguage)
  );

  // Clean up output directories.
  fs.removeSync(blogOutputDir);
  fs.removeSync(docsOutputDir);

  /** @type { { source: string; output: string; }[] } */
  const toCopy = [];

  for (let path of blogFilePaths) {
    const unprocessed = extract(config.blog.source, path, blogOutputDir);

    if (unprocessed) {
      toCopy.push(unprocessed);
    }
  }

  for (let path of docsFilePaths) {
    const unprocessed = extract(config.docs.source, path, docsOutputDir);
    if (unprocessed) {
      toCopy.push(unprocessed);
    }
  }

  for (const { source, output } of toCopy) {
    fs.copyFileSync(source, output);
  }
}

main();

/**
 * Extract and serialize ast and strings to be translated.
 *
 * @param { string } base
 * @param { string } path
 * @returns { { source: string; output: string; } | undefined }
 */
function extract(baseDir, path, outputDir) {
  const inferredPath = path.slice(resolvePath(baseDir).length + 1);
  const outputPath = resolvePath(inferredPath, outputDir);

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
    return {
      source: path,
      output: outputPath,
    };
  }
}

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
