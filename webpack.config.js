const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    index: './src/index.js',
  },

  plugins: [
    new HtmlWebpackPlugin({

      title: 'Fast Eddy\'s',

    }),
  ],

  module: {
      rules: [
        {
          test: /\.css$/i,
          use: ['style-loader', 'css-loader'],
        },
      ],
    },


    devtool: 'inline-source-map',
    devServer: {
    static: './dist',
    hot: true,
  },

  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
     };