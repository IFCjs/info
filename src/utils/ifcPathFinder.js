export function getIFCPath() {
  const url = location.href.toString();
  const filter = /.+\/info\//;
  const root = filter.exec(url)[0];
  return root + "IFC/";
}
