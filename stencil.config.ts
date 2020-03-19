import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'register-keyboard',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader'
    },
    {
      type: 'docs-readme',
      footer: '*Keyboard-Blocks Web Component Library* - 2020',
    },
    {
      type: 'www',
      serviceWorker: null // disable service workers
    }
  ]
};
