'use strict';

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _helmet = require('helmet');

var _helmet2 = _interopRequireDefault(_helmet);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _morgan = require('morgan');

var _morgan2 = _interopRequireDefault(_morgan);

var _compression = require('compression');

var _compression2 = _interopRequireDefault(_compression);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var __PROD__ = process.env.NODE_ENV === 'production';
var __TEST__ = process.env.NODE_ENV === 'test';
var port = process.env.PORT || 5000;
var server = (0, _express2['default'])();

process.on('unhandledRejection', function (reason, p) {
  if (reason.stack) {
    console.error(reason.stack);
  } else {
    console.error('Unhandled Rejection at: Promise ', p, ' reason: ', reason);
  }
});

server.use(_bodyParser2['default'].json());
server.use(_bodyParser2['default'].urlencoded({ extended: true }));

if (__PROD__ || __TEST__) {
  //const config = require('tools/webpack.config.prod')
  server.use((0, _morgan2['default'])('combined'));
  server.use((0, _helmet2['default'])());
  server.use((0, _compression2['default'])());
} else {
  var chokidar = require('chokidar');
  server.use((0, _morgan2['default'])('dev'));
  var config = require('../../tools/webpack.config.dev.js');

  var webpack = require('webpack');
  var webpackDevMiddleware = require('webpack-dev-middleware');
  var webpackHotMiddleware = require('webpack-hot-middleware');
  var compiler = webpack(config);
  server.use(webpackDevMiddleware(compiler, {
    quiet: false,
    noInfo: false,
    publicPath: config.output.publicPath,
    stats: {
      colors: true
    },
    debug: true
  }));
  server.use(webpackHotMiddleware(compiler, { log: console.log }));

  // Do "hot-reloading" of express stuff on the server
  // Throw away cached modules and re-require next time
  // Ensure there's no important state in there!

  var watcher = chokidar.watch([_path2['default'].join(process.cwd(), 'src')]);

  watcher.on('ready', function () {
    watcher.on('all', function () {
      console.log("Clearing /server/ module cache from server");
      (0, _keys2['default'])(require.cache).forEach(function (id) {
        if (/[\/\\]src[\/\\]/.test(id)) {
          //console.log('SERVER MATCH: ', id)
          delete require.cache[id];
        }
      });
    });
  });

  // Do "hot-reloading" of react stuff on the server
  // Throw away the cached client modules and let them be re-required next time
  compiler.plugin('done', function () {
    console.log("Clearing /client/ module cache from server");
    (0, _keys2['default'])(require.cache).forEach(function (id) {
      if (/[\/\\]src[\/\\]/.test(id)) {
        //console.log('CLIENT MATCH: ', id)
        delete require.cache[id];
      }
    });
  });
}

server.use(_express2['default']['static'](_path2['default'].join(process.cwd(), 'demo', 'public')));
server.get('*', function (req, res) {
  return require('./render/router')(req, res, __PROD__);
});

server.listen(port, '0.0.0.0', function (err) {
  if (err) {
    console.error(err);
    throw err;
  }
  console.info('==> 🌎 Listening on port %s. Open up http://localhost:%s/ in your browser.', port, port);
});

module.exports = server;
//# sourceMappingURL=server.js.map