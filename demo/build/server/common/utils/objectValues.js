'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var objectValues = function objectValues(x) {
  return (0, _keys2['default'])(x).reduce(function (y, z) {
    return y.push(x[z]) && y;
  }, []);
};

exports['default'] = objectValues;
//# sourceMappingURL=objectValues.js.map