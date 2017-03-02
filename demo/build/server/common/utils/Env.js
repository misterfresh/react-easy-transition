'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports['default'] = Env;

var _constants = require('../constants.js');

function Env() {
  return process.env.NODE_ENV === 'development' ? {
    front: 'http://localhost:5000/',
    api: 'http://localhost:8000/',
    assets: 'http://localhost:5000/'
  } : {
    front: 'https://tellnspread-front.herokuapp.com/',
    api: 'https://tellnspread-api.herokuapp.com/',
    assets: _constants.AWS_S3_BASE + _constants.S3_DEV
  };
}
//# sourceMappingURL=Env.js.map