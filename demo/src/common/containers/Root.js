if (process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'test') {
  module.exports = require('./Root.dev')
} else {
  module.exports = require('./Root.prod').default
}