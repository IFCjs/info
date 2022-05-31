import fs from "fs-extra";

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
