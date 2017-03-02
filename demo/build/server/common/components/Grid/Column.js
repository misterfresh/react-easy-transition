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

var Column = function Column(_ref) {
  var style = _ref.style,
      _ref$classes = _ref.classes,
      classes = _ref$classes === undefined ? [] : _ref$classes,
      _ref$size = _ref.size,
      size = _ref$size === undefined ? 'full' : _ref$size,
      children = _ref.children;
  return _react2['default'].createElement(
    'div',
    {
      className: _noImportant.css.apply(undefined, [styles.column].concat((0, _toConsumableArray3['default'])(classes), [styles[size]])),
      style: (0, _extends3['default'])({}, style)
    },
    children
  );
};

exports['default'] = Column;


var styles = _noImportant.StyleSheet.create({
  column: {
    position: 'relative',
    minHeight: 1,
    paddingRight: 15,
    paddingLeft: 15
  },
  full: {
    '@media (min-width: 992px)': {
      width: '100%'
    }
  },
  large: {
    '@media (min-width: 992px)': {
      width: '75%',
      float: 'left'
    }
  },
  medium: {
    '@media (min-width: 992px)': {
      width: '50%',
      float: 'left'
    }
  },
  mediumNoFloat: {
    '@media (min-width: 992px)': {
      width: '50%'
    }
  },
  small: {
    '@media (min-width: 992px)': {
      width: '25%',
      float: 'left'
    }
  },
  third: {
    '@media (min-width: 992px)': {
      width: '33%',
      float: 'left'
    }
  },
  twoThirds: {
    '@media (min-width: 992px)': {
      width: '66.66666667%',
      float: 'left'
    }
  }
});
//# sourceMappingURL=Column.js.map