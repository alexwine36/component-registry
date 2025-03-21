import { globbySync } from 'globby';
import { fs, vol } from 'memfs';
import path from 'node:path';
import type { Mock } from 'vitest';
import { copyComponents, getFiles, sourceDir, targetDir } from '.';

const mockSourceDir = sourceDir;
const mockTargetDir = targetDir;

beforeAll(() => {
  vi.mock('globby');
  vi.mock('node:fs');
  vi.mock('node:fs/promises');
});
beforeEach(() => {
  vol.reset();
  vi.clearAllMocks();
});

const setupMockFileSystem = (
  files: Record<string, string>,
  directory = mockSourceDir
) => {
  (globbySync as Mock).mockReturnValue(Object.keys(files));
  vol.fromJSON(files, directory);
  return files;
};

describe('getFiles', () => {
  test('should return correct file paths for JSON files', () => {
    const mockFiles = setupMockFileSystem({
      'r/file1.json': JSON.stringify({ name: 'file1' }),
      'r/file2.json': JSON.stringify({ name: 'file2' }),
    });

    const result = getFiles();

    // Verify the result
    expect(result).toEqual(
      Object.keys(mockFiles).map((file) => ({
        source: path.join(mockSourceDir, file),
        target: path.join(mockTargetDir, file),
      }))
    );

    // Ensure globbySync was called with the correct arguments
    expect(globbySync).toHaveBeenCalledWith('**/*.json', {
      cwd: mockSourceDir,
    });
  });

  test('should return an empty array if no JSON files are found', () => {
    setupMockFileSystem({});

    const result = getFiles();

    // Verify the result
    expect(result).toEqual([]);

    // Ensure globbySync was called with the correct arguments
    expect(globbySync).toHaveBeenCalledWith('**/*.json', {
      cwd: mockSourceDir,
    });
  });
});

describe('copyComponents', () => {
  test('should copy components to targetDir', () => {
    const mockFiles = setupMockFileSystem({
      'r/file1.json': JSON.stringify({ name: 'file1' }),
      'r/file2.json': JSON.stringify({ name: 'file2' }),
    });

    setupMockFileSystem({
      'r/file1.json': JSON.stringify({ name: 'file-old-1' }),
      'r/file2.json': JSON.stringify({ name: 'file-old-2' }),
    });

    copyComponents();

    const sourceFiles = Object.keys(mockFiles).map((file) => {
      const p = path.join(mockSourceDir, file);
      return fs.readFileSync(p, 'utf8');
    });
    const targetFiles = Object.keys(mockFiles).map((file) => {
      const p = path.join(mockTargetDir, file);
      return fs.readFileSync(p, 'utf8');
    });
    expect(sourceFiles).toEqual(targetFiles);
  });
});
