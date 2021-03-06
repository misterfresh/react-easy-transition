'use strict';

require.extensions['.css'] = function () {
  return;
};

if (process.env.NODE_ENV !== 'production') {
  require('babel-register');
}

require('./server.js');
//# sourceMappingURL=index.js.map