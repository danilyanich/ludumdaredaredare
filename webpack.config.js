const path = require('path')
// const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: path.join(__dirname, '/src/index.js'),

  output: {
    path: path.join(__dirname, '/lib'),
    publicPath: '/',
    filename: 'bundle.js'
  },

  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['es2015']
        }
      }
    }]
  },

  resolve: {
    modules: [
      'node_modules/',
      path.join(__dirname, '/src')
    ]
  },

  devtool: 'source-map',

  devServer: {
    hot: true,
    publicPath: '/',
    port: 3113,
    contentBase: path.join(__dirname, '/lib')
  }
}
