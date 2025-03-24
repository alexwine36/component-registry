import { RegistryItem } from '../../../utils/registry-generator';

const def = new RegistryItem({
  name: 'data-table',
  registryDependencies: [
    'table',
    'dropdown-menu',
    'button',
    'input',
    'skeleton',
    'separator',
  ],
  title: 'Data Table',
  description: 'A data table component',
  dependencies: ['@tanstack/react-table', 'remeda'],
});

def.addUi('./components/data-table-body.tsx');
def.addUi('./components/data-table-column-header.tsx');
def.addUi('./components/data-table-component.tsx');
def.addUi('./components/data-table-faceted-filter.tsx');
def.addUi('./components/data-table-pagination.tsx');
def.addUi('./components/data-table-toolbar.tsx');
def.addUi('./components/data-table-view-options.tsx');
def.addUi('./components/data-table.tsx');

def.addFile({
  path: './files/react-table.d.ts',
  type: 'registry:file',
  target: '~/react-table.d.ts',
});
def.addHook('./hooks/use-data-table.tsx');
def.addLib('./lib/data-table-types.ts');
def.addLib('./lib/data-table-utils.ts');

export default def;
