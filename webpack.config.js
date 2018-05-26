const htmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const src = path.join(__dirname, 'src');
const dist = path.join(__dirname, 'dist');

module.exports = {
  entry: {
    app: src
  },
  output: {
    path: dist,
    filename: 'bundle.js'
  },
  plugins: [
    new htmlWebpackPlugin({
      title: 'Hi From Webpack'
    })
  ]
}