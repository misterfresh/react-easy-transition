'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _noImportant = require('aphrodite/no-important');

var _reactHelmet = require('react-helmet');

var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

var _ReactEasyTransition = require('../../../../../lib/ReactEasyTransition.js');

var _ReactEasyTransition2 = _interopRequireDefault(_ReactEasyTransition);

var _Navbar = require('./Navbar/Navbar');

var _Navbar2 = _interopRequireDefault(_Navbar);

var _Clear = require('../Grid/Clear');

var _Clear2 = _interopRequireDefault(_Clear);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var Page = function Page(_ref) {
  var links = _ref.links,
      path = _ref.path,
      children = _ref.children;
  return _react2['default'].createElement(
    'div',
    { className: (0, _noImportant.css)(styles.page) },
    _react2['default'].createElement(_reactHelmet2['default'], { title: "React Easy Transition", titleTemplate: '%s - ' + "React" }),
    _react2['default'].createElement(
      'div',
      {
        className: (0, _noImportant.css)(styles.wrapper)
      },
      _react2['default'].createElement(_Navbar2['default'], {
        mainLinks: links.get('mainLinks'),
        path: path
      }),
      _react2['default'].createElement(
        'div',
        { style: { marginTop: 60 } },
        _react2['default'].createElement(
          _ReactEasyTransition2['default'],
          {
            path: path,
            initialStyle: { opacity: 0 },
            transition: 'opacity 0.5s ease-in-out',
            finalStyle: { opacity: 1 }
          },
          children
        )
      )
    ),
    _react2['default'].createElement(_Clear2['default'], null)
  );
};

exports['default'] = Page;


var styles = _noImportant.StyleSheet.create({
  page: {
    color: '#555',
    fontSize: '13px',
    lineHeight: '1.6',
    display: 'block',
    boxSizing: 'border-box',
    borderRadius: '0',
    fontFamily: 'Arial, Helvetica, sans-serif',
    background: '#fff'
  },
  wrapper: {
    width: 'auto',
    overflow: 'hidden',
    paddingTop: 0,
    paddingBottom: 0,
    paddingRight: 0,
    paddingLeft: 0
  }
});
//# sourceMappingURL=Page.js.map