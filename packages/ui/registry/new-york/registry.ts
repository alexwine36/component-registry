import { Registry } from '../../utils/registry-generator';
import complexComponent from './complex-component/item';
import copyToClipboard from './copy-to-clipboard/item';
import dataTable from './data-table/item';
import typography from './typography/item';
export const RegistryDef = new Registry({
  name: 'acme',
  homepage: 'https://acme.com',
  items: [copyToClipboard, complexComponent, typography, dataTable],
});
