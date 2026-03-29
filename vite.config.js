// Copyright 2026 Leaflock
// This project is open source. See LICENSE for terms.

import react from '@vitejs/plugin-react';
import { readFileSync } from 'fs';
import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';
import { defineConfig } from 'vitest/config';

const fileName = fileURLToPath(import.meta.url);
const dirName = dirname(fileName);

// Read version from package.json
const packageJson = JSON.parse(readFileSync(resolve(dirName, 'package.json'), 'utf-8'));

// https://vite.dev/config/
export default defineConfig({
  define: {
    __APP_VERSION__: JSON.stringify(packageJson.version),
  },
  envPrefix: 'FP_',
  plugins: [react()],
  resolve: {
    alias: {
      '@': resolve(dirName, './src'),
    },
  },
  test: {
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json-summary', 'html'],
      reportsDirectory: 'coverage',
    },
    environment: 'jsdom',
    globals: true,
    include: ['src/**/*.{test,spec}.{js,jsx}'],
    passWithNoTests: true,
  },
});
