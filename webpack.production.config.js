'use strict';

let path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/script.js',
  output: {
    filename: 'bundle.js',
    path: __dirname + '/public/'
  },

  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [['@babel/preset-env', {
                debug: false,
                corejs: 3,
                useBuiltIns: "usage"
            }]]
          }
        }
      }
    ]
  }
};
