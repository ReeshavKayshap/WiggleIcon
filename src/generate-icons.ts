import fs from "fs";
import path from "path";

const ICONS_DIR = path.resolve("src/icons");
const OUTPUT_FILE = path.resolve("src/icon-list.ts");

const files = fs
  .readdirSync(ICONS_DIR)
  .filter((f) => f.endsWith(".tsx") && f !== "index.ts");

const imports = files.map((f) => f.replace(".tsx", "")).join(", ");

const icons = files.map((file, index) => {
  const name = file.replace(".tsx", "");
  const code = fs.readFileSync(path.join(ICONS_DIR, file), "utf8");

  return `{
  id: ${index + 1},
  Component: ${name},
  title: "${name.toLowerCase()}",
  code: \`${code.replace(/`/g, "\\`")}\`,
}`;
});

const output = `
import { ${imports} } from "./icons";

export interface Icon {
  id: number;
  Component: React.ComponentType<any>;
  title: string;
  code: string;
}

export const IconList: Icon[] = [
${icons.join(",\n")}
];
`;

fs.writeFileSync(OUTPUT_FILE, output);
console.log("✅ Icon list generated");
