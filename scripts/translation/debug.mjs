import { getMdxAst, getTranslatableStrings } from "./extract.mjs";
import { getMdxFromAst, getTranslatedAst } from "./generate.mjs";
import { getFile, resolvePath } from "./utils.mjs";

const PATH = "docs/Introduction.mdx";
const INDEX = "42";

function main() {
  const file = getFile(resolvePath(PATH));

  const ast = getMdxAst(file.value);

  const strings = getTranslatableStrings(ast);

  // console.log(JSON.stringify(ast.children[INDEX], null, 2));

  // console.log(ast.children[INDEX].attributes[0]);

  // console.log(
  //   Object.keys(
  //     ast.children[INDEX].attributes[0].value.data.estree.body[0].expression
  //       .elements[0].properties
  //   )
  // );

  // console.log(JSON.stringify(strings, null, 2));

  const tast = getTranslatedAst(ast, strings);
}

main();
