import fs from 'node:fs';
import path from 'node:path';
import { globbySync } from 'globby';
export const sourceDir = path.join(__dirname, '../../public');
export const targetDir = path.join(__dirname, '../../../../apps/web/public');

export const getFiles = () => {
  const sourcePaths = globbySync('**/*.json', {
    cwd: sourceDir,
  });

  return sourcePaths.map((file) => {
    return {
      source: path.join(sourceDir, file),
      target: path.join(targetDir, file),
    };
  });
};

export const copyComponents = () => {
  const files = getFiles();

  files.forEach((file) => {
    const targetDir = path.dirname(file.target);

    console.log(`Creating directory ${targetDir}`);
    fs.mkdirSync(targetDir, { recursive: true });
    console.log(`Copying ${file.source} to ${file.target}`);
    fs.copyFileSync(file.source, file.target);
  });
};
