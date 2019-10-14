import typescript from "rollup-plugin-typescript";
import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import json from "rollup-plugin-json";

export default {
  input: "./src/index.ts",
  output: {
    dir: "umd",
    format: "umd",
    name: "KintoneApiClient"
  },
  plugins: [commonjs(), resolve({ browser: true }), json(), typescript()]
};
