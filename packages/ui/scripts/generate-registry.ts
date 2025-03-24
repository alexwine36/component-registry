import fs from 'node:fs';
import { RegistryDef } from '../registry/new-york/registry';

const generateRegistry = () => {
  console.log('Running generate-registry script...');
  console.log('Generating registry...');
  const data = RegistryDef.formatData();

  fs.writeFileSync('./registry.json', JSON.stringify(data, null, 2));

  fs.writeFileSync(
    './registry-items.json',
    JSON.stringify(RegistryDef.formatRegistryComponents(), null, 2)
  );
};

generateRegistry();
