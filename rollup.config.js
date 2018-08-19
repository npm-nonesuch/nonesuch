import json from 'rollup-plugin-json';
import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';

const babelPlugin = babel({
    exclude: 'node_modules/**/*',
});

export default [
    {
        input: 'src/index.js', 
        output: {
            file: 'build/nonesuch.mjs',
            format: 'esm'
        },
        plugins: [
            json(),
            resolve(),
            commonjs(),
        ],
    },
    {
        input: 'src/index.js', 
        output: {
            file: 'build/nonesuch.js',
            format: 'cjs'
        },
        plugins: [
            json(),
            resolve(),
            commonjs(),
        ],
    },
    {
        input: 'src/index.js', 
        output: {
            file: 'build/nonesuch.browser.js',
            format: 'iife',
            name: 'nonesuch',
        },
        plugins: [
            json(),
            resolve(),
            commonjs(),
            babelPlugin,
        ],
    }
];
