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
      path.join(process.cwd(), 'src/client/client.js')
    ]
  },
  output: {
    path: path.join(process.cwd(), 'public'),
    filename: '[name].js',
    publicPath: '/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
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
          path.join(process.cwd(), 'src', 'client'),
          path.join(process.cwd(), 'src', 'common')
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

// This will make the redux-simpler-router module resolve to the
// latest src instead of using it from npm. Remove this if running
// outside of the source.

let src = path.join(__dirname, '../../src/react-easy-transition.js')
let react = path.join(__dirname, '../../node_modules/react')
let fs = require('fs')
if (fs.existsSync(src)) {
  console.log('use src', src)
  // Use the latest src
  module.exports.resolve = {
    alias: {
      'react-easy-transition': src,
      'react': react
    }
  }
  module.exports.module.rules.push(
    {
      test: /\.js?$/,
      include: [
        src
      ],
      use: [{
        loader: 'babel-loader',
        options: {
          presets: ['es2015', 'react', 'stage-1'],
          plugins: [
            ['transform-object-assign'],
            ["transform-react-constant-elements"],
            ["transform-react-inline-elements"]
          ]
        }
      }]
    }
  )
}