export function getWasmPath() {
  const url = location.href.toString();
  const filter = /\/ifcjs.github.io\//;
  const isDeployed = filter.test(url);
  return isDeployed ? "../../" : null;
}
