import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'register-keyboard',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader'
    },
    // {
    //   type: 'dist-custom-elements-bundle'
    // },
    {
      type: 'experimental-dist-module'
    },
    {
      type: 'docs-readme',
      footer: '*Keyboard-Blocks Web Component Library* - 2020',
    },
    {
      type: 'docs-json',
      file: '/dist/docs/docs.json',
    },
    {
      type: 'docs-vscode',
      file: 'dist/html.html-data.json',
      sourceCodeBaseUrl: 'https://github.com/parkerpierpont/Keyboard-Blocks/tree/master',
    },
    // {
    //   type: 'www',
    //   serviceWorker: null // disable service workers
    // }
  ]
};
