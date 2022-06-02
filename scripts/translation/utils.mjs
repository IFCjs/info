import fs from "fs-extra";
import p from "path";
import { remark } from "remark";
import remarkComment from "remark-comment";
import remarkFrontmatter from "remark-frontmatter";
import remarkMdx from "remark-mdx";

export const CWD = process.cwd();
export const IGNORE_NODE_TYPES = ["code", "comment", "mdxjsEsm", "yaml"];

/**
 * Resolve a path from `CWD`, returning the absolute path.
 *
 * @param { string } to
 * @param { string } [from]
 * @returns { string }
 */
export function resolvePath(to, from) {
  if (from) {
    return p.resolve(from, to);
  } else {
    return p.resolve(CWD, to);
  }
}

/**
 * Check whether a file have the given extension.
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
 * Get file content and group it with its path
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
 * Write file to disk using fs-extra to automatically create
 * parent directories if not yet exist.
 *
 * @param { import("./types").File } file
 */
export function setFile({ path, value }) {
  fs.outputFileSync(path, value);
}
