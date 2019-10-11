import typescript from "rollup-plugin-typescript";

export default {
  input: "./src/index.ts",
  output: {
    dir: "umd",
    format: "umd",
    name: "KintoneApiClient"
  },
  plugins: [typescript()]
};
