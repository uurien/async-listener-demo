import commonjs from 'rollup-plugin-commonjs';
import json from 'rollup-plugin-json';
import resolve from 'rollup-plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2';
// import resources from './build/rollup-plugin-resources';

export default {
    input: 'src/index.ts',
    output: [
        {file: 'dist/index.js', format: 'cjs', sourceMap: true}
    ],
    external: ['fs', 'path', 'readline', 'events', 'crypto', 'buffer'],
    plugins: [
        resolve({preferBuiltins: true}),
        commonjs(),
        typescript({tsconfig: 'tsconfig.json'})
    ]
};