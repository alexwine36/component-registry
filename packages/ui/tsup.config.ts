import { type Options, defineConfig } from 'tsup';

export default defineConfig((options: Options) => ({
  //   entry: ['./**/*'],
  entry: ['./index.ts'],
  format: ['cjs', 'esm'],
  external: ['react', 'react-dom'],
  dts: true,
  // clean: true,
  banner: {
    js: "'use client'",
  },
  // treeshake: true,
  // splitting: true,
  ...options,
}));
