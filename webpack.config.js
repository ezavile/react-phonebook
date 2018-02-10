const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");

const src = path.join(__dirname, "src");
const dist = path.join(__dirname, "dist");

module.exports = {
  devServer: {
    host: process.env.HOST,
    port: 3000
  },
  entry: {
    app: src
  },
  output: {
    path: dist,
    filename: "bundle.js"
  },
  plugins: [
    new htmlWebpackPlugin({
      title: "Hi from Webpack"
    })
  ]
};
