import { RegistryItem } from '../../../utils/registry-generator';

const def = new RegistryItem({
  name: 'typography',
  registryDependencies: [],
  title: 'Typography',
  description: 'A typography component for consistent text display',
});

def.addUi('./components/typography.tsx');

export default def;
