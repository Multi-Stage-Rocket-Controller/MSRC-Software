const rules = require('./webpack.rules');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');

rules.push({
  test: /\.css$/,
  use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
});

module.exports = {
  module: {
    rules,
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        { from: path.resolve(__dirname, 'public'), to: path.resolve(__dirname, 'dist') },
      ],
    }),
  ],
};
