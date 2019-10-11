const path = require("path");

module.exports = {
  entry: {
    "get-record": "./src/get-record.ts"
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
  devtool: "inline-cheap-source-map"
};
