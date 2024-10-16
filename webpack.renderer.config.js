const rules = require('./webpack.rules');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');
const path = require('path');
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');

rules.push({
  test: /\.css$/,
  use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
});

module.exports = {
  entry: './src/renderer.js',
  mode: 'development',
  module: {
    rules,
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        { from: path.resolve(__dirname, 'public'), to: path.resolve(__dirname, 'dist') },
      ],
    }),
    new webpack.ProvidePlugin({
      process: 'process/browser',
    }),
    new NodePolyfillPlugin(),
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'renderer.bundle.js',
  },  
};