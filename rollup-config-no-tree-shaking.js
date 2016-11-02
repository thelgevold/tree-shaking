export default {
  entry: 'app/main.js',
  dest: 'dist/no-tree-shaking.js',
  format: 'iife',
  moduleName: 'greetingModule',
  treeshake: false
}