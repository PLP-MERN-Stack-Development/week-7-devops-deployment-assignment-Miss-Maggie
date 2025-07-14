// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react-swc'
// import tailwindcss from '@tailwindcss/vite'
// import path from 'path'

// export default defineConfig({
//   plugins: [react(), tailwindcss()],
//   resolve: {
//     alias: {
//       '@': path.resolve(__dirname, 'src'),
//      'react-dom': path.resolve(__dirname, 'node_modules/react-dom'),

//     },                                                                                                                                                                                                                                                                                                                                                                                                                                    
//   },
//   test: {
//     globals: true,
//     environment: 'jsdom',
//     setupFiles: './setupTests.js',
//   },
// });

const path = require('path');
const react = require('@vitejs/plugin-react-swc');
const tailwindcss = require('@tailwindcss/vite');

const path = require('path');
const react = require('@vitejs/plugin-react-swc');
const tailwindcss = require('@tailwindcss/vite');

/** @type {import('vite').UserConfig} */
module.exports = {
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      'react-dom': path.resolve(__dirname, 'node_modules/react-dom'),
      '@radix-ui/react-slot': require.resolve('@radix-ui/react-slot'), // 👈 helps Vite resolve it
    },
  },
  optimizeDeps: {
    include: ['@radix-ui/react-slot'], // 👈 ensures it's pre-bundled during dev
  },
  build: {
    commonjsOptions: {
      include: [/node_modules/, /@radix-ui\/react-slot/], // 👈 helps Rollup handle CJS modules
    },
    rollupOptions: {
      external: [], // 👈 leave empty unless you're loading modules via CDN
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './setupTests.js',
  },
};
