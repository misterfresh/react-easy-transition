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

var Container = function Container(_ref) {
  var style = _ref.style,
      _ref$classes = _ref.classes,
      classes = _ref$classes === undefined ? [] : _ref$classes,
      children = _ref.children;
  return _react2['default'].createElement(
    'div',
    {
      className: _noImportant.css.apply(undefined, [styles.container].concat((0, _toConsumableArray3['default'])(classes))),
      style: (0, _extends3['default'])({}, style)
    },
    children
  );
};

exports['default'] = Container;


var styles = _noImportant.StyleSheet.create({
  container: {
    paddingRight: 15,
    paddingLeft: 15,
    marginRight: 'auto',
    marginLeft: 'auto',
    '@media (min-width: 768px)': {
      width: 750
    },
    '@media (min-width: 992px)': {
      width: 970
    },
    '@media (min-width: 1200px)': {
      width: 1170
    },
    ':before': {
      display: 'table',
      content: '" "'
    }
  }
});
//# sourceMappingURL=Container.js.map