'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _noImportant = require('aphrodite/no-important');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var Paragraph = function Paragraph(_ref) {
  var style = _ref.style,
      children = _ref.children,
      _ref$classes = _ref.classes,
      classes = _ref$classes === undefined ? [] : _ref$classes;
  return _react2['default'].createElement(
    'p',
    {
      className: _noImportant.css.apply(undefined, [styles.paragraph].concat((0, _toConsumableArray3['default'])(classes))),
      style: style
    },
    children
  );
};

exports['default'] = Paragraph;


var styles = _noImportant.StyleSheet.create({
  paragraph: {
    textAlign: 'justify',
    lineHeight: '1.3',
    padding: 0,
    margin: '0 0 10px',
    color: '#555'
  }
});
//# sourceMappingURL=Paragraph.js.map