var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: ['./src/app.jsx']
  },

  output: {
    path: './build',
    filename: '[name].bundle.js'
  },

  module: {
    loaders: [
      {
          test: /\.css$/,
          loader: 'style!' + 'css?sourceMap'
      },
      {
          test: /\.scss$/,
          loader: 'style!' + 'css?sourceMap' + '!sass?sourceMap'
      },
      {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          loader: 'babel-loader'
      },
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: 'Indicative of my js skills'
    })
  ],

  devtool: 'source-map'

};