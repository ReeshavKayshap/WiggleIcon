import fs from "fs";
import path from "path";

const SRC_DIR = path.resolve(process.cwd(), "src/icons");
const REGISTRY_DIR = path.resolve(process.cwd(), "public/r");

if (!fs.existsSync(REGISTRY_DIR)) {
  fs.mkdirSync(REGISTRY_DIR, { recursive: true });
}

// Ensure the main registry.json exists
const mainRegistryPath = path.resolve(REGISTRY_DIR, "index.json");

const typeFilePath = path.resolve(process.cwd(), "src/types/Type.ts");
const typeContent = fs.existsSync(typeFilePath)
  ? fs.readFileSync(typeFilePath, "utf-8")
  : "";

const mainRegistry = {
  $schema: "https://ui.shadcn.com/schema/registry-item.json",
  name: "index",
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
  files: [
    {
      path: `src/types/Type.ts`,
      content: typeContent,
      type: "registry:ui",
      target: `types/Type.ts`,
    },
  ],
};

const files = fs.readdirSync(SRC_DIR).filter((file) => file.endsWith(".tsx"));

files.forEach((file) => {
  const componentName = file.replace(".tsx", "");
  const filePath = path.join(SRC_DIR, file);
  let content = fs.readFileSync(filePath, "utf-8");

  const registryItem = {
    $schema: "https://ui.shadcn.com/schema/registry-item.json",
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
      {
        path: `src/types/Type.ts`,
        content: typeContent,
        type: "registry:ui",
        target: `types/Type.ts`,
      },
    ],
  };

  // Add individual component files to the main registry
  mainRegistry.files.push({
    path: `src/icons/${file}`,
    content: content,
    type: "registry:ui",
  });

  // Create individual registry file for each component e.g. menu.json
  const componentRegistryPath = path.resolve(
    REGISTRY_DIR,
    `${componentName.toLowerCase()}.json`,
  );
  fs.writeFileSync(
    componentRegistryPath,
    JSON.stringify(registryItem, null, 2),
  );
});

// Create the index.json
fs.writeFileSync(mainRegistryPath, JSON.stringify(mainRegistry, null, 2));

console.log(
  `Successfully generated registry files for ${files.length} components.`,
);
