'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports['default'] = display;

var _immutable = require('immutable');

var _immutable2 = _interopRequireDefault(_immutable);

require('../constants.js');

var _links = require('./links');

var Links = _interopRequireWildcard(_links);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var initialState = (0, _immutable.fromJS)({
  links: Links
});

function display() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    default:
      return state;
  }
}
//# sourceMappingURL=display.js.map