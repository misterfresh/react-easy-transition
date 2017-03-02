'use strict';

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var path = require('path');
var webpack = require('webpack');
var HappyPack = require('happypack');

module.exports = {
  cache: true,
  resolve: {
    extensions: ['.js', '.json']
  },
  devtool: 'eval-source-map',
  entry: {
    app: ['webpack-hot-middleware/client', path.join(process.cwd(), 'demo/src/client/client.js')]
  },
  output: {
    path: path.join(process.cwd(), 'demo/public'),
    filename: '[name].js',
    publicPath: '/'
  },
  plugins: [new webpack.HotModuleReplacementPlugin(), new webpack.NoEmitOnErrorsPlugin(), new webpack.DllReferencePlugin({
    context: path.join(process.cwd()),
    manifest: require(path.join(process.cwd(), "demo", "tools", "dll", "vendor-manifest.json"))
  }), new HappyPack({
    loaders: ['babel-loader?' + (0, _stringify2['default'])({
      cacheDirectory: true,
      plugins: [['react-transform', {
        'transforms': [{
          transform: 'react-transform-hmr',
          imports: ['react'],
          locals: ['module']
        }]
      }], ['transform-object-assign'], ["transform-decorators-legacy"]]
    })],
    id: 'js',
    threads: 4,
    debug: false,
    verbose: true,
    cache: true,
    enabled: true
  }), new webpack.DefinePlugin({
    'process.env': {
      'NODE_ENV': (0, _stringify2['default'])('development')
    }
  })],
  module: {
    rules: [{
      test: /\.js?$/,
      include: [path.join(process.cwd(), 'demo', 'src', 'client'), path.join(process.cwd(), 'demo', 'src', 'common'), path.join(process.cwd(), 'src')],
      exclude: /(node_modules|public)/,
      loader: path.join(process.cwd(), "node_modules", 'happypack', 'loader.js'),
      options: {
        id: 'js'
      }
    }, {
      test: /\.json$/,
      loader: 'json-loader'
    }, {
      test: /\.css$/,
      loader: "style-loader!css-loader"
    }]
  }
};
//# sourceMappingURL=webpack.config.dev.js.map