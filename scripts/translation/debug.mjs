import { getMdxAst, getTranslatableStrings } from "./extract.mjs";
import { getFile, resolvePath } from "./utils.mjs";

const PATH = "docs/Patreon.mdx";
const INDEX = "5";

function main() {
  const file = getFile(resolvePath(PATH));

  const ast = getMdxAst(file.value);

  const strings = getTranslatableStrings(ast);

  // console.log(JSON.stringify(ast.children[INDEX], null, 2));
  console.log(ast.children[INDEX].attributes[0].value.data.estree);
  console.log(JSON.stringify(strings, null, 2));
}

main();
