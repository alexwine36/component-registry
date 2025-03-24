import { RegistryDef } from './registry';

describe('Registry', () => {
  test('should first', () => {
    console.log(RegistryDef);
    console.log(JSON.stringify(RegistryDef.formatData(), null, 2));

    console.log(
      JSON.stringify(RegistryDef.formatRegistryComponents(), null, 2)
    );
  });
});
