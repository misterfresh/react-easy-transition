'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _noImportant = require('aphrodite/no-important');

var _reactRouter = require('react-router');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var MainLink = function MainLink(_ref) {
  var link = _ref.link,
      active = _ref.active;
  return _react2['default'].createElement(
    _reactRouter.Link,
    {
      to: link.get('href'),
      className: (0, _noImportant.css)(styles.mainlink, active ? styles.active : styles.base),
      style: {
        textDecoration: 'none',
        textTransform: 'none'
      }
    },
    link.get('title')
  );
};

exports['default'] = MainLink;


var styles = _noImportant.StyleSheet.create({
  mainlink: {
    letterSpacing: '1px',
    paddingTop: 10,
    paddingBottom: 10,
    position: 'relative',
    display: 'inline-block',
    outline: '0',
    background: 'none',
    padding: '12px 12px',
    lineHeight: '30px',
    fontSize: '1.1em',
    fontWeight: '400'
  },
  base: {
    color: '#fff',
    ':visited': {
      color: '#fff'
    },
    ':active': {
      color: '#fff'
    },
    ':hover': {
      color: '#3498db'
    }
  },
  active: {
    color: '#3498db',
    ':visited': {
      color: '#3498db'
    },
    ':active': {
      color: '#3498db'
    },
    ':hover': {
      color: '#5fa8d8'
    }
  }
});
//# sourceMappingURL=MainLink.js.map