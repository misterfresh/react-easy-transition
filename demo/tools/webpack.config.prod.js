'use strict'

var path = require('path')
var webpack = require('webpack')

module.exports = {
  entry: {
    app: [
      'babel-polyfill',
      path.join(process.cwd(), 'src/client/client.js')
    ],
    vendors: [
      'aphrodite',
      'immutable',
      'react',
      'react-dom',
      'react-helmet',
      'react-redux',
      'react-router',
      'react-router-redux',
      'redux',
      'redux-immutable',
      'redux-thunk'
    ]
  },
  output: {
    path: path.join(process.cwd(), 'build/client'),
    filename: '[name].min.js',
    publicPath: '/'
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.CommonsChunkPlugin({name: 'vendors', filename: 'vendors.min.js'}),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false,
        screw_ie8: true
      }
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    })
  ],
  module: {
    loaders: [
      {
        test: /\.js?$/,
        loader: 'babel',
        exclude: /(node_modules|server|public)/,
        include: /(client|common)/,
        query: {
          plugins: [
            ['transform-object-assign'],
            ["transform-decorators-legacy"],
            ["transform-react-constant-elements"],
            ["transform-react-inline-elements"]
          ]
        }
      },
      {
        test: /\.json$/,
        loader: 'json'
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader"
      }
    ]
  }
}