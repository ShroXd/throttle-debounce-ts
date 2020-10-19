import resolve from '@rollup/plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import typescript from "rollup-plugin-typescript2";
import sourceMaps from "rollup-plugin-sourcemaps";
import { terser } from 'rollup-plugin-terser'

export default {
    input: "./src/index.ts",
    plugins: [
        resolve(),
        commonjs(),
        typescript({
            useTsconfigDeclarationDir: true
        }),
        sourceMaps(),
        terser()
    ],
    output: [
        {
            format: "cjs",
            file: "dist/bundle.cjs.js",
            sourcemap: true
        },
        {
            format: "es",
            file: "dist/bundle.esm.js",
            sourcemap: true
        }
    ]
};
