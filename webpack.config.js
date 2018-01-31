const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const PATHS = {
  src: path.join(__dirname, "src"),
  dist: path.join(__dirname, "dist"),
};

module.exports = {
  entry: {
    app: PATHS.src,
  },
  output: {
    path: PATHS.dist,
    filename: "[name].js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Hi from Webpack",
    }),
  ],
};
