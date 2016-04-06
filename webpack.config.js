const debug = process.env.NODE_ENV !== 'production';
const webpack = require('webpack');

module.exports = {
  context: `${__dirname}/js`,
  devtool: debug ? 'inline-sourcemap' : null,
  entry: './main.js',
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exlude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0'],
          plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy']
          ,
        },
      },
    ],
  },
  output: {
    path: `${__dirname}/../build/`,
    filename: 'bundle.min.js',
  },
  plugins: debug ? [] : [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
  ] };