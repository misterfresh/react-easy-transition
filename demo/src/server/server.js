import path from 'path'
import express from 'express'
import helmet from 'helmet'
import bodyParser from 'body-parser'
import morgan from 'morgan'
import compression from 'compression'

const __PROD__ = process.env.NODE_ENV === 'production'
const __TEST__ = process.env.NODE_ENV === 'test'
const port = process.env.PORT || 5000
const server = express()

process.on('unhandledRejection', (reason, p) => {
  if (reason.stack) {
    console.error(reason.stack)
  } else {
    console.error('Unhandled Rejection at: Promise ', p, ' reason: ', reason)
  }
})

server.use(bodyParser.json())
server.use(bodyParser.urlencoded({ extended: true }))

if (__PROD__ || __TEST__) {
  //const config = require('tools/webpack.config.prod')
  server.use(morgan('combined'))
  server.use(helmet())
  server.use(compression())

} else {
  let chokidar = require('chokidar')
  server.use(morgan('dev'))
  const config = require('tools/webpack.config.dev.js')

  const webpack = require('webpack')
  const webpackDevMiddleware = require('webpack-dev-middleware')
  const webpackHotMiddleware = require('webpack-hot-middleware')
  const compiler = webpack(config)
  server.use(webpackDevMiddleware(compiler, {
    quiet: false,
    noInfo: false,
    publicPath: config.output.publicPath,
    stats: {
      colors: true
    },
    debug: true
  }))
  server.use(webpackHotMiddleware(compiler, { log: console.log }))

  // Do "hot-reloading" of express stuff on the server
  // Throw away cached modules and re-require next time
  // Ensure there's no important state in there!

  const watcher = chokidar.watch([
    path.join(process.cwd(), 'src')
  ]);

  watcher.on('ready', function() {
    watcher.on('all', function() {
      console.log("Clearing /server/ module cache from server");
      Object.keys(require.cache).forEach(function(id) {
        if (/[\/\\]src[\/\\]/.test(id)){
          //console.log('SERVER MATCH: ', id)
          delete require.cache[id];
        }
      });
    });
  });

  // Do "hot-reloading" of react stuff on the server
  // Throw away the cached client modules and let them be re-required next time
  compiler.plugin('done', function() {
    console.log("Clearing /client/ module cache from server");
    Object.keys(require.cache).forEach(function(id) {
      if (/[\/\\]src[\/\\]/.test(id)){
        //console.log('CLIENT MATCH: ', id)
        delete require.cache[id];
      }
    });
  });
}

server.use(express.static(path.join(process.cwd(), 'demo', 'public')))
server.get('*', (req, res) => (require('./render/router'))(req, res, __PROD__) )

server.listen(port, '0.0.0.0', (err) => {
  if (err) {
    console.error(err);
    throw err;
  }
  console.info('==> 🌎 Listening on port %s. Open up http://localhost:%s/ in your browser.', port, port);
});

module.exports = server