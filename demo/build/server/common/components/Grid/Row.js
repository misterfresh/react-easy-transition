'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _noImportant = require('aphrodite/no-important');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var Row = function Row(_ref) {
  var _ref$classes = _ref.classes,
      classes = _ref$classes === undefined ? [] : _ref$classes,
      style = _ref.style,
      children = _ref.children;
  return _react2['default'].createElement(
    'div',
    {
      className: _noImportant.css.apply(undefined, [styles.row].concat((0, _toConsumableArray3['default'])(classes))),
      style: (0, _extends3['default'])({}, style)
    },
    children
  );
};

exports['default'] = Row;


var styles = _noImportant.StyleSheet.create({
  row: {
    marginRight: -15,
    marginLeft: -15
  }
});
//# sourceMappingURL=Row.js.map