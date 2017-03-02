'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reduxImmutable = require('redux-immutable');

var _route = require('./route');

var _route2 = _interopRequireDefault(_route);

var _display = require('./display');

var _display2 = _interopRequireDefault(_display);

var _reducer = require('../routes/Home/reducer');

var _reducer2 = _interopRequireDefault(_reducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var rootReducer = (0, _reduxImmutable.combineReducers)({
  display: _display2['default'],
  home: _reducer2['default'],
  route: _route2['default']
});

exports['default'] = rootReducer;
//# sourceMappingURL=index.js.map