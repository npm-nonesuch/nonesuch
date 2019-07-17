import path from 'path'

import json from 'rollup-plugin-json'
import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'

const babelPlugin = babel({
    exclude: 'node_modules/**/*',
})

const BUILD_DIR = path.resolve(__dirname, 'build')

export default [
    {
        input: 'src/index.mjs',
        output: {
            file: 'build/index.mjs',
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
            file: 'build/index.js',
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
            file: 'build/nonesuch.umd.js',
            format: 'umd',
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
