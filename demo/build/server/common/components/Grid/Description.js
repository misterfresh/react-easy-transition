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

var Description = function Description(_ref) {
  var style = _ref.style,
      classes = _ref.classes,
      children = _ref.children;
  return _react2['default'].createElement(
    'div',
    {
      className: (0, _noImportant.css)(styles.description, classes),
      style: (0, _extends3['default'])({}, style)
    },
    children
  );
};

exports['default'] = Description;


var styles = _noImportant.StyleSheet.create({
  description: {
    padding: '40px 0 30px',
    position: 'relative',
    background: '#f2f2f2',
    borderTop: '1px solid #eee'
  }
});
//# sourceMappingURL=Description.js.map