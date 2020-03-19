import resolve from '@rollup/plugin-node-resolve'
import sourcemaps from 'rollup-plugin-sourcemaps'

export default {
  input: 'dist-transpiled/index.js',
  preserveSymlinks: false,
  output: [
    {
      file: 'dist/index.esm.js',
      format: 'es',
      sourcemap: true,
    },
    {
      file: 'dist/index.js',
      format: 'cjs',
      preferConst: true,
      sourcemap: true,
    },
  ],
  external: id => !/^(\.|\/)/.test(id),
  plugins: [resolve(), sourcemaps()],
}
