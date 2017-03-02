'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _noImportant = require('aphrodite/no-important');

var _Row = require('../Grid/Row');

var _Row2 = _interopRequireDefault(_Row);

var _Column = require('../Grid/Column');

var _Column2 = _interopRequireDefault(_Column);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var Headline = function Headline(_ref) {
  var title = _ref.title,
      _ref$classes = _ref.classes,
      classes = _ref$classes === undefined ? [] : _ref$classes;
  return _react2['default'].createElement(
    _Row2['default'],
    null,
    _react2['default'].createElement(
      _Column2['default'],
      null,
      _react2['default'].createElement(
        'div',
        { className: (0, _noImportant.css)(styles.headline) },
        _react2['default'].createElement(
          'h2',
          { className: _noImportant.css.apply(undefined, [styles.title].concat((0, _toConsumableArray3['default'])(classes))) },
          title
        )
      )
    )
  );
};

exports['default'] = Headline;


var styles = _noImportant.StyleSheet.create({
  headline: {
    display: 'block',
    margin: '0px 0 15px 0',
    borderBottom: '1px dotted #e4e9f0'
  },
  title: {
    color: '#555',
    borderBottom: '2px solid #3498db',
    fontSize: '18px',
    lineHeight: '24px',
    margin: '0 0 -2px 0',
    paddingBottom: 5,
    display: 'inline-block',
    fontFamily: 'Arial, Helvetica, sans-serif',
    textShadow: 'none',
    fontWeight: 'normal'
  }
});
//# sourceMappingURL=Headline.js.map