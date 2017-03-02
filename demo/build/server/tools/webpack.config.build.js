'use strict';

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var path = require('path');
var webpack = require('webpack');

module.exports = {
  resolve: {
    extensions: ['.js', '.json']
  },
  entry: {
    app: ['babel-polyfill', path.join(process.cwd(), 'demo/src/client/client.js')],
    vendors: ['aphrodite', 'immutable', 'react', 'react-dom', 'react-helmet', 'react-redux', 'react-router', 'react-router-redux', 'redux', 'redux-immutable', 'redux-thunk']
  },
  output: {
    path: path.join(process.cwd(), 'demo', 'build', 'client'),
    filename: '[name].min.js',
    publicPath: '/'
  },
  plugins: [new webpack.optimize.CommonsChunkPlugin({ name: 'vendors', filename: 'vendors.min.js' }), new webpack.DefinePlugin({
    'process.env': {
      'NODE_ENV': (0, _stringify2['default'])('production')
    }
  })],
  module: {
    rules: [{
      test: /\.js?$/,
      include: [path.join(process.cwd(), 'demo', 'src', 'client'), path.join(process.cwd(), 'demo', 'src', 'common'), path.join(process.cwd(), 'src')],
      exclude: /node_modules/,
      use: [{
        loader: 'babel-loader',
        options: {
          presets: ['es2015', 'react', 'stage-1'],
          plugins: [['transform-object-assign'], ["transform-decorators-legacy"], ["transform-react-constant-elements"], ["transform-react-inline-elements"]]
        }
      }]
    }, {
      test: /\.css$/,
      loader: "style-loader!css-loader"
    }]
  }
};
//# sourceMappingURL=webpack.config.build.js.map