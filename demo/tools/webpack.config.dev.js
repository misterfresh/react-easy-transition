'use strict'

let path = require('path')
let webpack = require('webpack')
let HappyPack = require('happypack')

module.exports = {
  cache: true,
  resolve: {
    extensions: ['.js', '.json']
  },
  devtool: 'eval-source-map',
  entry: {
    app: [
      'webpack-hot-middleware/client',
      path.join(process.cwd(), 'demo/src/client/client.js')
    ]
  },
  output: {
    path: path.join(process.cwd(), 'demo/public'),
    filename: '[name].js',
    publicPath: '/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DllReferencePlugin({
      context: path.join(process.cwd()),
      manifest: require(path.join(process.cwd(), "demo", "tools", "dll", "vendor-manifest.json"))
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
          path.join(process.cwd(), 'demo', 'src', 'client'),
          path.join(process.cwd(), 'demo', 'src', 'common'),
          path.join(process.cwd(), 'src')
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