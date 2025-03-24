import path from 'node:path';
import type {
  Registry as RegistryDef,
  RegistryItem as RegistryItemDef,
} from 'shadcn/registry';
// type RegistryItemDef = Registry['items'][0];

type RegistryFile = NonNullable<RegistryItemDef['files']>[0];

type InitialRegistryItemDef = Omit<RegistryItemDef, 'type'> &
  Required<Pick<RegistryItemDef, 'registryDependencies'>>;

export class RegistryItem {
  data: InitialRegistryItemDef;
  files: RegistryFile[];
  type: RegistryItemDef['type'] = 'registry:component';

  constructor(data: InitialRegistryItemDef) {
    this.data = data;
    this.files = [];
  }

  addFile(file: RegistryFile) {
    this.files.push(file);
  }
  addLib(path: Omit<RegistryFile, 'type'>['path']) {
    this.files.push({ path, type: 'registry:lib' });
  }
  addComponent(path: Omit<RegistryFile, 'type'>['path']) {
    this.files.push({ path, type: 'registry:component' });
  }
  addUi(path: Omit<RegistryFile, 'type'>['path']) {
    this.files.push({ path, type: 'registry:ui' });
  }
  addHook(path: Omit<RegistryFile, 'type'>['path']) {
    this.files.push({ path, type: 'registry:hook' });
  }

  formatFiles(parentFolder: string): RegistryItemDef['files'] {
    return this.files.map((file) => ({
      ...file,
      path: path.join(parentFolder, this.data.name, file.path),
    }));
  }

  formatItem(parentFolder: string): RegistryItemDef {
    return {
      ...this.data,
      type: this.type,
      files: this.formatFiles(parentFolder),
    };
  }
}

type RegistryInput = Omit<RegistryDef, 'items'> & {
  items: RegistryItem[];
  folder?: string;
};

export class Registry {
  items: RegistryItem[];
  data: Omit<RegistryDef, 'items'>;
  folder: string;

  constructor({ items, folder = 'registry/new-york', ...data }: RegistryInput) {
    this.items = items;
    this.data = data;
    this.folder = folder;
  }

  formatData(): RegistryDef & { $schema: string } {
    return {
      $schema: 'https://ui.shadcn.com/schema/registry.json',
      ...this.data,
      items: this.items.map((item) => item.formatItem(this.folder)),
    };
  }

  formatRegistryComponents() {
    const base = this.formatData();
    return base.items.reduce(
      (acc, item) => {
        acc[item.name] = item;
        return acc;
      },
      {} as Record<string, RegistryItemDef>
    );
  }
}
