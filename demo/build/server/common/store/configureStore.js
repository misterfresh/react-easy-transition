'use strict';

if (process.env.NODE_ENV === 'development') {
  module.exports = require('./configureStore.dev');
} else {
  module.exports = require('./configureStore.prod')['default'];
}
//# sourceMappingURL=configureStore.js.map