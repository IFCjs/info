import { generate, GENERATOR } from "astring";
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
import { JSX } from "./JSX.mjs";
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
export function getMdxAst(value) {
  return remark()
    .use(remarkFrontmatter)
    .use(remarkMdx)
    .use(remarkComment, { ast: true })
    .parse(value);
}

/**
 * @param { import("@types/mdast").Root } ast
 * @returns { strings[] }
 */
export function getTranslatableStrings(ast) {
  const names = Object.keys(config.components);
  const strings = [];

  visit(ast, (node, _index, parent) => {
    if (
      parent === undefined ||
      parent.type !== "root" ||
      IGNORE_NODE_TYPES.includes(node.type)
    ) {
      return;
    }

    if (node.type === "mdxJsxFlowElement") {
      /** @type { import("mdast-util-mdx").MdxJsxFlowElement } */
      const { name, attributes, children } = node;

      if (!names.includes(name)) return;

      if (attributes) {
        for (const attribute of attributes) {
          if (!config.components[name].includes(attribute.name)) continue;

          if (typeof attribute.value === "string") {
            strings.push(attribute.value);
          } else {
            const expression = attribute.value.data.estree.body[0].expression;

            if (expression.type === "Literal") {
              strings.push(expression.raw);
            } else if (expression.type === "JSXElement") {
              strings.push(
                generate(attribute.value.data.estree, {
                  generator: { ...GENERATOR, ...JSX },
                })
              );
            }
          }
        }
      }

      if (children.length > 0) {
        for (const child of children) {
          const string = toMarkdown(child, { extensions: [mdxToMarkdown()] });
          strings.push(string);
        }
      }
    } else {
      const string = toMarkdown(node, { extensions: [mdxToMarkdown()] });
      strings.push(string);
    }
  });

  return strings;
}
