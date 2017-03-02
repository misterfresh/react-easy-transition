'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _noImportant = require('aphrodite/no-important');

var _Container = require('../../Grid/Container');

var _Container2 = _interopRequireDefault(_Container);

var _MainMenu = require('./MainMenu/MainMenu');

var _MainMenu2 = _interopRequireDefault(_MainMenu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var Navbar = function Navbar(_ref) {
  var mainLinks = _ref.mainLinks,
      path = _ref.path;
  return _react2['default'].createElement(
    'div',
    { className: (0, _noImportant.css)(styles.header) },
    _react2['default'].createElement(
      'nav',
      {
        className: (0, _noImportant.css)(styles.navbar),
        role: 'navigation'
      },
      _react2['default'].createElement(
        _Container2['default'],
        { classes: [styles.container] },
        _react2['default'].createElement(_MainMenu2['default'], {
          mainLinks: mainLinks,
          path: path
        })
      )
    )
  );
};

exports['default'] = Navbar;


var styles = _noImportant.StyleSheet.create({
  header: {
    boxShadow: 'none',
    borderBottom: 'none',
    top: 0,
    left: 0,
    width: '100%',
    height: 'auto',
    zIndex: 999,
    position: 'fixed'
  },
  navbar: {
    display: 'block',
    right: 0,
    left: 0,
    zIndex: 1030,
    position: 'relative',
    top: 0,

    border: 'none',
    marginBottom: 0,
    background: '#212121',
    minHeight: 60,
    borderRadius: 0
  },
  container: {
    position: 'relative'
  }
});
//# sourceMappingURL=Navbar.js.map