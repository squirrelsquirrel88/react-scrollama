import type { Options } from 'tsup';
import { defineConfig } from 'tsup';

import pkg from './package.json';

const banner = `/**
 * Name: ${pkg.name}
 * Version: ${pkg.version}
 * Author: ${pkg.author}
 * Homepage: ${pkg.homepage}
 * License: ${pkg.license} © 2020-Present
 */\n`;

const baseOptions: Options = {
  minify: false,
  sourcemap: true,
  dts: true,
  clean: true,
  target: 'es2020',
  external: ['react'],
  format: ['esm', 'cjs'],
  banner: {
    js: banner,
  },
};

export default defineConfig([
  {
    ...baseOptions,
    entryPoints: ['src/index.ts'],
    outDir: 'dist',
  },
]);
