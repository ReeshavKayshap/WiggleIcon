import fs from 'fs';
import path from 'path';

const isDirectory = (source) => fs.lstatSync(source).isDirectory();
const iconsDir = path.resolve('src/icons');

const files = fs.readdirSync(iconsDir)
  .filter(file => file.endsWith('.tsx') || file.endsWith('.ts'))
  .filter(file => file !== 'index.ts');

let exportsContent = files.map(file => {
  const baseName = path.basename(file, path.extname(file));
  return `export * from "./${baseName}";`;
}).join('\n');

exportsContent += '\nexport * from "../types/Type";\n';

fs.writeFileSync(path.join(iconsDir, 'index.ts'), exportsContent, 'utf8');
console.log('✅ Generated src/icons/index.ts with auto-exports!');
