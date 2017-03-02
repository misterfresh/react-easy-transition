'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactHelmet = require('react-helmet');

var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var NoMatch = function (_Component) {
  (0, _inherits3['default'])(NoMatch, _Component);

  function NoMatch() {
    (0, _classCallCheck3['default'])(this, NoMatch);
    return (0, _possibleConstructorReturn3['default'])(this, (NoMatch.__proto__ || (0, _getPrototypeOf2['default'])(NoMatch)).apply(this, arguments));
  }

  (0, _createClass3['default'])(NoMatch, [{
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        'div',
        null,
        _react2['default'].createElement(_reactHelmet2['default'], { title: 'Not Found' }),
        'Page was not found'
      );
    }
  }]);
  return NoMatch;
}(_react.Component);

exports['default'] = NoMatch;
//# sourceMappingURL=NoMatch.js.map