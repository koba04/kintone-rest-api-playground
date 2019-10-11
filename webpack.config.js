const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: {
    "get-record": "./scripts/browser/get-record.ts"
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js"
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },
  module: {
    rules: [{ test: /\.tsx?$/, loader: "ts-loader" }]
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env.KINTONE_API_TOKEN": JSON.stringify(
        process.env.KINTONE_API_TOKEN
      ),
      "process.env.KINTONE_DOMAIN": JSON.stringify(process.env.KINTONE_DOMAIN)
    })
  ],
  devtool: "inline-cheap-source-map"
};
