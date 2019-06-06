const path = require('path'),
  HtmlWebpackPlugin = require('html-webpack-plugin'),
  CleanWebpackPlugin = require('clean-webpack-plugin').CleanWebpackPlugin,
  webpack = require('webpack'),
  MiniCssExtractPlugin = require('mini-css-extract-plugin'),
  OptimizeCss = require('optimize-css-assets-webpack-plugin');
module.exports = {
  entry: {
    app: './src/index.js',
    dog: './src/dog.js',
    vender: ['lodash']
  },
  output: {
    filename: '[name].[chunkhash].js',
    path: path.resolve(__dirname, './dist')
  },
  devtool: 'inline-source-map',
  module: {
    // rules: [{ test: /\.css$/, use: ['style-loader', 'css-loader'] }]
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', MiniCssExtractPlugin.loader, 'css-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({ template: path.resolve(__dirname, 'index.html') }),
    new CleanWebpackPlugin(),
    new webpack.HashedModuleIdsPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].[chunkhash].css'
      // chunkFilename: '[id].css'
    }),
    // 压缩css
    new OptimizeCss()
  ],
  optimization: {
    splitChunks: {
      cacheGroups: {
        vender: {
          name: 'vender',
          chunks: 'all',
          minChunks: 2
        }
        // commons: {
        //   name: 'commons',
        //   chunks: 'all',
        //   minChunks: 2
        // }
      }
    }
  }
};
