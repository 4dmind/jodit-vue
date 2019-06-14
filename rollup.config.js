import vue from 'rollup-plugin-vue'
import commonjs from 'rollup-plugin-commonjs';
import buble from 'rollup-plugin-buble'
import uglify from 'rollup-plugin-uglify-es'

export default {
  external: ['jodit'],
  input: 'src/wrapper.js',
  output: {
    name: 'JoditVue',
    exports: 'named',
    sourceMap: 'inline',
    globals: {
      'jodit': 'Jodit'
    }
  },
  plugins: [
    vue({
      css: true,
      compileTemplate: true
    }),
    commonjs(),
    buble({
      objectAssign: 'Object.assign'
    }),
    uglify()
  ]
}
