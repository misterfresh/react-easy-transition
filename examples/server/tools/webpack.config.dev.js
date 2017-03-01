'use strict'

var path = require('path')
var webpack = require('webpack')
var HappyPack = require('happypack')

module.exports = {
  cache: true,
  resolve: {
    extensions: ['.js', '.json']
  },
  devtool: 'eval-source-map',
  entry: {
    app: [
      'webpack-hot-middleware/client',
      path.join(process.cwd(), 'client/client.js')
    ]
  },
  output: {
    path: path.join(process.cwd(), 'public'),
    filename: '[name].js',
    publicPath: '/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DllReferencePlugin({
      context: path.join(process.cwd()),
      manifest: require(path.join(process.cwd(), "tools", "dll", "vendor-manifest.json"))
    }),
    new HappyPack({
      loaders: [ 'babel-loader?' + JSON.stringify({
        cacheDirectory: true,
        plugins: [
          ['react-transform', {
            'transforms': [{
              transform: 'react-transform-hmr',
              imports: ['react'],
              locals: ['module']
            }]
          }],
          ['transform-object-assign'],
          ["transform-decorators-legacy"]
        ]
      }) ],
      id: 'js',
      threads: 4,
      debug: false,
      verbose: true,
      cache: true,
      enabled: true
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('development')
      }
    })
  ],
  module: {
    rules: [
      {
        test: /\.js?$/,
        include: [
          path.join(process.cwd(), "client"),
          path.join(process.cwd(), "common")
        ],
        exclude: /(node_modules|public)/,
        loader: path.join(process.cwd(), "node_modules", 'happypack', 'loader.js'),
        options: {
          id: 'js'
        }
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader"
      }

    ]
  }
}