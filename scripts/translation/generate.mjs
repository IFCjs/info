import { Parser as AcornParser } from "acorn";
import acornJsx from "acorn-jsx";
import { generate, GENERATOR } from "astring";
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
import { walk } from "./estree-walk.mjs";
import { JSX } from "./JSX.mjs";
import {
  IGNORE_NODE_TYPES,
  endsWith,
  getFile,
  isJsxElement,
  isJsxFlowElement,
  resolvePath,
  setFile,
} from "./utils.mjs";

function main() {
  for (const language of config.outputLanguages) {
    const translatedFilePaths = glob
      .sync(
        config.translations.output
          .replace("%language%", language)
          .concat("/**/*.*")
      )
      .map((path) => resolvePath(path));

    for (const path of translatedFilePaths) {
      if (endsWith(".mdx.json")(path)) {
        const astFilePath = path.replace(".mdx.json", ".mdx.ast");

        const ast = JSON.parse(getFile(astFilePath).value);
        const strings = JSON.parse(getFile(path).value);

        const translatedAst = getTranslatedAst(ast, strings);
        const translatedMdx = getMdxFromAst(translatedAst);

        const outputPath = path.slice(0, -5);

        setFile({
          path: outputPath,
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
export function getTranslatedAst(ast, strings) {
  const names = Object.keys(config.components);
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

    let translatedNode;

    if (isJsxElement(node)) {
      /** @type { import("mdast-util-mdx").MdxJsxFlowElement } */
      const { name, attributes, children } = isJsxFlowElement(node)
        ? node
        : node.children[0];

      if (!names.includes(name)) return;

      if (attributes) {
        for (const attribute of attributes) {
          if (!config.components[name].includes(attribute.name)) continue;

          if (typeof attribute.value === "string") {
            attribute.value = translatedStrings.pop();
          } else {
            const estree = attribute.value.data.estree;

            if (!estree) continue;

            walk(estree, {
              Literal(node) {
                node.value = translatedStrings.pop();
              },
              Property(node) {
                const name = `${attribute.name}.${node.key.name}`;
                if (!names.includes(name)) return false;
              },
              JSXElement(node) {
                const string = translatedStrings.pop();

                if (attribute.name === "image") {
                  console.log(string);
                }

                const JsxParser = AcornParser.extend(acornJsx());
                const tnode = JsxParser.parse(string, {
                  ecmaVersion: 2020,
                }).body[0].expression;

                for (const property in node) {
                  node[property] = tnode[property];
                }
              },
            });

            const attributeValue = generate(estree, {
              generator: { ...GENERATOR, ...JSX },
              lineEnd: "",
            }).replace(/;$/, "");

            const JsxParser = AcornParser.extend(acornJsx());
            const attributeEstree = JsxParser.parse(attributeValue, {
              ecmaVersion: 2020,
            });

            attribute.value.value = attributeValue;
            attribute.value.data.estree = attributeEstree;
          }
        }
      }

      if (children.length > 0) {
        for (const child of children) {
          const tchild = fromMarkdown(translatedStrings.pop(), {
            extensions: [mdxjs()],
            mdastExtensions: [mdxFromMarkdown()],
          }).children[0];

          delete child.position;

          if (isJsxFlowElement(node)) {
            for (const property in child) {
              child[property] = tchild[property];
            }
          } else {
            for (const property in child) {
              child[property] = tchild.children[0][property];
            }
          }
        }
      }

      delete node.position;

      if (isJsxFlowElement(node)) {
        node.value = getMdxFromAst(node);
      } else {
        delete node.children[0].position;
        node.children[0].value = getMdxFromAst(node.children[0]);
      }

      translatedNode = node;
    } else {
      translatedNode = fromMarkdown(translatedStrings.pop(), {
        extensions: [mdxjs()],
        mdastExtensions: [mdxFromMarkdown()],
      }).children[0];
    }

    for (const property in node) {
      node[property] = translatedNode[property];
    }
  });

  return ast;
}

export function getMdxFromAst(ast) {
  return remark()
    .use(remarkFrontmatter)
    .use(remarkMdx)
    .use(remarkComment, { ast: true })
    .stringify(ast);
}
