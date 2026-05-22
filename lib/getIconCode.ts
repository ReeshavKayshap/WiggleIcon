

import fs from "fs";
import path from "path";

export function getIconCode(iconName: string) {
  try {
    const filePath = path.join(
      process.cwd(),
      "src/components/icons",
      `${iconName}.tsx`,
    );

    return fs.readFileSync(filePath, "utf-8");
  } catch {
    return "// Icon not found";
  }
}
