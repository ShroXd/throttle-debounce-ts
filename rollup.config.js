import resolve from '@rollup/plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import typescript from "rollup-plugin-typescript2";
import sourceMaps from "rollup-plugin-sourcemaps";
import { terser } from 'rollup-plugin-terser'

const libraryName = "throttle-debounce-ts";

export default {
    input: "./src/index.ts",
    output: [
        {
            format: "umd",
            file: "dist/bundle.umd.js",
            name: libraryName,
            sourcemap: true
        },
        {
            format: "es",
            file: "dist/bundle.esm.js",
            sourcemap: true
        }
    ],
    plugins: [
        resolve(),
        commonjs(),
        typescript({
            useTsconfigDeclarationDir: true
        }),
        sourceMaps(),
        terser()
    ],
    external: []
};
