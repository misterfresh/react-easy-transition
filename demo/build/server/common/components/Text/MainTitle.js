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

var MainTitle = function MainTitle(_ref) {
  var title = _ref.title,
      _ref$classes = _ref.classes,
      classes = _ref$classes === undefined ? [] : _ref$classes;
  return _react2['default'].createElement(
    'h1',
    {
      className: _noImportant.css.apply(undefined, [styles.mainTitle].concat((0, _toConsumableArray3['default'])(classes)))
    },
    title
  );
};

exports['default'] = MainTitle;


var styles = _noImportant.StyleSheet.create({
  mainTitle: {
    textAlign: 'left',
    textTransform: 'none',
    fontSize: '28px',
    lineHeight: '35px',
    marginTop: 5,
    marginBottom: 10,
    fontFamily: 'Arial, Helvetica, sans-serif',
    color: '#555',
    textShadow: 'none',
    fontWeight: 'normal'
  }
});
//# sourceMappingURL=MainTitle.js.map