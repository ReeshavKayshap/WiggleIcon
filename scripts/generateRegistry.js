import fs from "fs";
import path from "path";

const SRC_DIR = path.resolve(process.cwd(), "src/icons");
const REGISTRY_DIR = path.resolve(process.cwd(), "public/registry");

if (!fs.existsSync(REGISTRY_DIR)) {
  fs.mkdirSync(REGISTRY_DIR, { recursive: true });
}

// Ensure the main registry.json exists
const mainRegistryPath = path.resolve(REGISTRY_DIR, "index.json");
const mainRegistry = {
  name: "iconlibrary",
  type: "registry:ui",
  dependencies: ["motion"],
  registryDependencies: [],
  tailwind: {
    config: {
      theme: {
        extend: {},
      },
    },
  },
  items: [],
};

const files = fs.readdirSync(SRC_DIR).filter((file) => file.endsWith(".tsx"));

files.forEach((file) => {
  const componentName = file.replace(".tsx", "");
  const filePath = path.join(SRC_DIR, file);
  let content = fs.readFileSync(filePath, "utf-8");

  // Check if the file already defines the types
  const hasDefs = content.includes("export interface AnimatedIconHandle");

  if (!hasDefs) {
    const typeDefs = `export interface AnimatedIconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  duration?: number;
  className?: string;
}
`;
    content = content.replace(
      /import type \{[^}]+\} from ["']@\/types\/Type["'];?\n?/,
      typeDefs,
    );
  }

  const registryItem = {
    name: componentName.toLowerCase(), // This acts as the ID for `shadcn add`
    type: "registry:ui",
    dependencies: ["motion"],
    registryDependencies: [],
    files: [
      {
        path: `src/icons/${file}`,
        content: content,
        type: "registry:ui",
      },
    ],
  };

  // Create individual registry file for each component e.g. menu.json
  const componentRegistryPath = path.resolve(
    REGISTRY_DIR,
    `${componentName.toLowerCase()}.json`,
  );
  fs.writeFileSync(
    componentRegistryPath,
    JSON.stringify(registryItem, null, 2),
  );

  // Add to main index
  mainRegistry.items.push(registryItem);
});

// Optionally create the index.json
fs.writeFileSync(mainRegistryPath, JSON.stringify(mainRegistry, null, 2));

console.log(
  `Successfully generated registry files for ${files.length} components.`,
);
