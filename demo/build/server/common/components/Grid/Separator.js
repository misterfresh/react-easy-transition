'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _noImportant = require('aphrodite/no-important');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var Separator = function Separator(_ref) {
  var style = _ref.style,
      _ref$full = _ref.full,
      full = _ref$full === undefined ? false : _ref$full;
  return _react2['default'].createElement('hr', {
    className: (0, _noImportant.css)(styles.separator, full && styles.full),
    style: (0, _extends3['default'])({}, style)
  });
};

exports['default'] = Separator;


var styles = _noImportant.StyleSheet.create({
  separator: {
    margin: '10px 0',
    border: '0',
    borderTop: '1px solid #eee',
    boxSizing: 'content-box'
  },
  full: {
    margin: 0,
    height: 20,
    background: '#f2f2f2',
    width: '100%'
  }
});
//# sourceMappingURL=Separator.js.map