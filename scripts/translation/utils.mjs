import fs from "fs-extra";
import p from "path";
import { remark } from "remark";
import remarkComment from "remark-comment";
import remarkFrontmatter from "remark-frontmatter";
import remarkMdx from "remark-mdx";

export const CWD = process.cwd();
export const IGNORE_NODE_TYPES = ["code", "comment", "mdxjsEsm", "yaml"];

/**
 * check whether a file have the given extension.
 *
 * @param { string } extension
 * @returns { function(string): boolean }
 */
export function endsWith(extension) {
  return (path) => {
    return path.endsWith(extension);
  };
}

/**
 * get file content and group it with its path
 *
 * @param { string } path
 * @returns { import("./types").File }
 */
export function getFile(path) {
  const value = fs.readFileSync(path, { encoding: "utf-8" });

  return {
    path,
    value,
  };
}

/**
 * write file to disk using fs-extra to automatically create
 * parent directories if not yet exist.
 *
 * @param { import("./types").File } file
 */
export function setFile({ path, value }) {
  fs.outputFileSync(path, value);
}

/**
 * find the start index of the dynamic part of `sourcesPattern`.
 *
 * @param { string } sourcesPattern
 * @returns { string }
 */
export function getInferredPathStart(sourcesPattern) {
  return CWD.length + sourcesPattern.indexOf("*");
}

/**
 * attach `cwd` to outputsPattern, so it become an absolute path.
 *
 * @param { string } outputsPattern
 * @returns { string }
 */
export function getOutputsPattern(outputsPattern) {
  return p.join(CWD, outputsPattern);
}

/**
 * get MDX flavored `mdast`.
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
