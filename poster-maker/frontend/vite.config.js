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

/** @type {import('vite').UserConfig} */
module.exports = {
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      'react-dom': path.resolve(__dirname, 'node_modules/react-dom'),
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './setupTests.js',
  },
};
