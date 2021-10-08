import resolve from '@rollup/plugin-node-resolve';
import livereload from 'rollup-plugin-livereload';
import serve from 'rollup-plugin-serve';
import path from 'path';
import { terser } from "rollup-plugin-terser";

export default {
  input: 'src/main.js',
  output: {
      file: 'dist/app.js',
  },
  plugins: [
    resolve(),
    terser(),
    serve({contentBase: ['dist']}),
    livereload({
      watch: [
        path.resolve(__dirname, 'dist'),
      ],
      exts: [ 'html', 'js', 'css' ]
    }),
  ]
};
