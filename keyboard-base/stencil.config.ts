import { Config } from "@stencil/core";
import { postcss } from "@stencil/postcss";
import { sass } from "@stencil/sass";
// @ts-ignore
import autoprefixer from "autoprefixer";
// @ts-ignore
import rtl from "postcss-rtl";

export const config: Config = {
  namespace: "register-keyboard",
  plugins: [
    sass(),
    postcss({
      plugins: [autoprefixer(), rtl()]
    })
  ],
  outputTargets: [
    {
      type: "dist",
      esmLoaderPath: "../loader"
    },
    // {
    //   type: 'dist-custom-elements-bundle'
    // },
    {
      type: "experimental-dist-module"
    },
    {
      type: "docs-readme",
      footer: "*Keyboard-Blocks Web Component Library* - 2020"
    },
    {
      type: "docs-json",
      file: "/dist/docs/docs.json"
    },
    {
      type: "docs-vscode",
      file: "dist/html.html-data.json",
      sourceCodeBaseUrl:
        "https://github.com/parkerpierpont/Keyboard-Blocks/tree/master"
    },
    {
      type: "www",
      serviceWorker: null // disable service workers
    }
  ]
};
