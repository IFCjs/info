import fs from "fs";
import glob from "glob";
import p from "path";
import pc from "picocolors";
import { remark } from "remark";
import remarkComment from "remark-comment";
import remarkFrontmatter from "remark-frontmatter";
import remarkMdx from "remark-mdx";

let errorCount = 0;

function main() {
  const paths = glob.sync("/{blog,docs}/**/*.mdx", {
    root: process.cwd(),
  });

  tryParsing(paths);

  if (errorCount > 0) {
    console.log("====================\n");
    console.log(pc.italic("Summary:\n"));
    console.log(
      pc.red(
        pc.bold(
          `Found ${errorCount} MDX file with parsing errors. See above for details.\n`
        )
      )
    );
    console.log(
      pc.bold(
        `Read ${p.resolve(process.cwd(), "MDX.md")} for common solutions.\n`
      )
    );
    process.exit(1);
  } else {
    console.log("====================\n");
    console.log(pc.italic("Summary:\n"));
    console.log(
      pc.green(
        pc.bold(`${paths.length} MDX files parsed. There is no parse error.\n`)
      )
    );
  }
}

main();

function tryParsing(paths) {
  console.log(
    pc.bold(pc.italic(`\nTrying to parse ${paths.length} MDX files.\n`))
  );

  for (let i = 0; i < paths.length; i++) {
    const path = paths[i];
    const value = fs.readFileSync(path, { encoding: "utf-8" });

    try {
      remark()
        .use(remarkFrontmatter)
        .use(remarkMdx)
        .use(remarkComment)
        .parse(value);
    } catch (error) {
      errorCount++;

      console.log(pc.red(pc.bold("Error while parsing.")));
      console.log(pc.red(pc.bold("File: " + path)));
      console.log(pc.red("  ||"));
      console.log(pc.red("  \\/"));
      console.error(error);
      console.log("\n");
    }
  }
}
