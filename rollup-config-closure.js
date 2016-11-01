import closure from 'rollup-plugin-closure-compiler-js';

export default {
  entry: 'app/main.js',
  dest: 'dist/closure.js',
  format: 'iife',
  moduleName: 'greetingModule',
  plugins: [
    closure({compilationLevel: 'ADVANCED'})
  ]
}