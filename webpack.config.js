const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const merge = require("webpack-merge");
const utils = require("./webpack.utils");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const PATHS = {
  src: path.join(__dirname, "src"),
  dist: path.join(__dirname, "dist"),
};


const commonConfig = merge([
  {
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
  },
]);

const productionConfig = merge([
  {
    module: {
      rules: [
        {
          test: /\.(css|scss)$/,
          use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: ['css-loader', 'fast-sass-loader']
          })
        }
      ]
    },
    plugins: [
      new ExtractTextPlugin({
        filename: '[name].css'
      })
    ]
  }
]);

const developmentConfig = merge([
  utils.devServer({
    host: process.env.HOST,
    port: process.env.PORT,
  }),
  {
    module: {
      rules: [
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader"],
        },
        {
          test: /\.scss$/,
          use: [
            "style-loader",
            "css-loader",
            "fast-sass-loader",
          ],
        }
      ],
    },
  }
]);

module.exports = env => {
  if (env === "production") {
    return merge(commonConfig, productionConfig);
  }

  return merge(commonConfig, developmentConfig);
};
