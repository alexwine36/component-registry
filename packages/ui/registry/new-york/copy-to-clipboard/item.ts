import { RegistryItem } from '../../../utils/registry-generator';

const def = new RegistryItem({
  name: 'copy-to-clipboard',
  registryDependencies: ['button'],
  title: 'Copy to Clipboard',
  description: 'A button that copies a string to the clipboard',
});

def.addUi('./components/copy-button.tsx');
def.addLib('./lib/copy-to-clipboard.ts');

export default def;
