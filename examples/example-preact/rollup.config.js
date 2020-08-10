import node_resolve from 'rollup-plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import hotcss from 'rollup-plugin-hot-css';
import static_files from 'rollup-plugin-static-files';
import { terser } from 'rollup-plugin-terser';
import prefresh from '@prefresh/nollup';
import typescript from "@rollup/plugin-typescript";
import commonjs from "@rollup/plugin-commonjs";

let config = {
    input: './src/main.tsx',
    output: {
        dir: 'dist',
        format: 'esm',
        entryFileNames: '[name].[hash].js',
        assetFileNames: '[name].[hash][extname]'
    },
    plugins: [
        hotcss({
            hot: process.env.NODE_ENV === 'development',
            file: 'styles.css'
        }),
        typescript(),
        babel({
            babelHelpers: "bundled"
        }),
        node_resolve(),
        commonjs(),
        process.env.NODE_ENV === 'development' && prefresh()
    ]
}

if (process.env.NODE_ENV === 'production') {
    config.plugins = config.plugins.concat([
        static_files({
            include: ['./public']
        }),
        terser()
    ]);
}

export default config;