export const DEFAULT_WALKERS = {
  Program(node, process) {
    for (const statement of node.body) {
      process(statement);
    }
  },
  ExpressionStatement(node, process) {
    process(node.expression);
  },
  ArrayExpression(node, process) {
    for (const element of node.elements) {
      process(element);
    }
  },
  ObjectExpression(node, process) {
    for (const property of node.properties) {
      process(property);
    }
  },
  Property(node, process) {
    process(node.key);
    process(node.value);
  },
};

export function walk(ast, visitors, walkers) {
  walkers = walkers ? walkers : DEFAULT_WALKERS;

  function process(node) {
    const callback = visitors[node.type];
    const walker = walkers[node.type];

    let keepWalking = true;

    if (callback) {
      const signal = callback(node);
      keepWalking =
        signal === undefined || signal === true || signal === 1 ? true : false;
    }

    if (walker) walker(node, process);
  }

  process(ast);
}
