const merge = require('webpack-merge'),
  webpack = require('webpack'),
  path = require('path'),
  common = require('./webpack.common');

module.exports = merge(common, {
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist/',
    hot: true
  },
  plugins: [
    // 可以显示模块的相对路径
    new webpack.NamedModulesPlugin()
  ]
});
