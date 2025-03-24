import { globbySync } from 'globby';
import DataTableDef from './item';
describe('DataTable Item Test', () => {
  test('should have right amount of files', () => {
    const files = globbySync('**/*.{ts,tsx}', {
      cwd: __dirname,
    }).filter((file) => {
      return file.includes('/');
    });
    console.log(files);

    const defFiles = DataTableDef.formatFiles('');
    // console.log(defFiles);
    const defFilePaths = defFiles?.map((file) =>
      file.path.replace('data-table/', '')
    );
    console.log(defFilePaths);
    expect(files).toEqual(defFilePaths);
  });
});
