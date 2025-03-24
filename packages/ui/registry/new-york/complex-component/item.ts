import { RegistryItem } from '../../../utils/registry-generator';

const def = new RegistryItem({
  name: 'complex-component',
  registryDependencies: ['card'],
  title: 'Complex Component',
  description: 'A complex component showing hooks, libs and components.',
});

def.addFile({
  path: './page.tsx',
  type: 'registry:page',
  target: 'app/pokemon/page.tsx',
});

def.addComponent('./components/pokemon-card.tsx');

def.addComponent('./components/pokemon-image.tsx');

def.addLib('./lib/pokemon.ts');

def.addHook('./hooks/use-pokemon.ts');

export default def;
