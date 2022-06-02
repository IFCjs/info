// Make sure that character references don’t pop up.
// For example, the text `&copy;` should stay that way, and not turn into `©`.
// We could encode all `&` (easy but verbose) or look for actual valid
// references (complex but cleanest output).
// Looking for the 2nd character gives us a middle ground.
// The `#` is for (decimal and hexadecimal) numeric references, the letters
// are for the named references.
function encodeJsx(value) {
  return value.replace(/&(?=[#a-z])/gi, "&amp;");
}

export const JSX = {
  // `attr`
  // `attr="something"`
  // `attr={1}`
  JSXAttribute(node, state) {
    this[node.name.type](node.name, state);

    if (node.value !== undefined && node.value !== null) {
      state.write("=");

      // Encode double quotes in attribute values.
      if (node.value.type === "Literal") {
        state.write(
          '"' +
            encodeJsx(String(node.value.value)).replace(/"/g, "&quot;") +
            '"',
          node
        );
      } else {
        this[node.value.type](node.value, state);
      }
    }
  },
  // `</div>`
  JSXClosingElement(node, state) {
    state.write("</");
    this[node.name.type](node.name, state);
    state.write(">");
  },
  // `</>`
  JSXClosingFragment(node, state) {
    state.write("</>", node);
  },
  // `<div />`
  // `<div></div>`
  JSXElement(node, state) {
    let index = -1;

    this[node.openingElement.type](node.openingElement, state);

    if (node.children) {
      while (++index < node.children.length) {
        this[node.children[index].type](node.children[index], state);
      }
    }

    if (node.closingElement) {
      this[node.closingElement.type](node.closingElement, state);
    }
  },
  // `{}` (always in a `JSXExpressionContainer`, which does the curlies)
  JSXEmptyExpression() {},
  // `{expression}`
  JSXExpressionContainer(node, state) {
    state.write("{");
    this[node.expression.type](node.expression, state);
    state.write("}");
  },
  // `<></>`
  JSXFragment(node, state) {
    let index = -1;

    this[node.openingFragment.type](node.openingElement, state);

    if (node.children) {
      while (++index < node.children.length) {
        this[node.children[index].type](node.children[index], state);
      }
    }

    this[node.closingFragment.type](node.closingElement, state);
  },
  // `div`
  JSXIdentifier(node, state) {
    state.write(node.name, node);
  },
  // `member.expression`
  JSXMemberExpression(node, state) {
    this[node.object.type](node.object, state);
    state.write(".");
    this[node.property.type](node.property, state);
  },
  // `ns:name`
  JSXNamespacedName(node, state) {
    this[node.namespace.type](node.namespace, state);
    state.write(":");
    this[node.name.type](node.name, state);
  },
  // `<div>`
  JSXOpeningElement(node, state) {
    let index = -1;

    state.write("<");
    this[node.name.type](node.name, state);

    if (node.attributes) {
      while (++index < node.attributes.length) {
        state.write(" ");
        this[node.attributes[index].type](node.attributes[index], state);
      }
    }

    state.write(node.selfClosing ? " />" : ">");
  },
  // `<>`
  JSXOpeningFragment(node, state) {
    state.write("<>", node);
  },
  // `{...argument}`
  JSXSpreadAttribute(node, state) {
    state.write("{");
    this.SpreadElement(node, state);
    state.write("}");
  },
  // `!`
  JSXText(node, state) {
    state.write(
      encodeJsx(node.value).replace(/<|\{/g, function ($0) {
        return $0 === "<" ? "&lt;" : "&#123;";
      }),
      node
    );
  },
};
