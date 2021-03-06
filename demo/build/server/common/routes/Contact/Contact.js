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

var _Headline = require('../../components/Text/Headline');

var _Headline2 = _interopRequireDefault(_Headline);

var _Description = require('../../components/Grid/Description');

var _Description2 = _interopRequireDefault(_Description);

var _Row = require('../../components/Grid/Row');

var _Row2 = _interopRequireDefault(_Row);

var _Column = require('../../components/Grid/Column');

var _Column2 = _interopRequireDefault(_Column);

var _Container = require('../../components/Grid/Container');

var _Container2 = _interopRequireDefault(_Container);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var Contact = function (_Component) {
  (0, _inherits3['default'])(Contact, _Component);

  function Contact() {
    (0, _classCallCheck3['default'])(this, Contact);
    return (0, _possibleConstructorReturn3['default'])(this, (Contact.__proto__ || (0, _getPrototypeOf2['default'])(Contact)).apply(this, arguments));
  }

  (0, _createClass3['default'])(Contact, [{
    key: 'render',
    value: function render() {

      return _react2['default'].createElement(
        'div',
        null,
        _react2['default'].createElement(_reactHelmet2['default'], {
          title: 'Contact',
          meta: [{ 'name': 'description', 'content': "Contact Page" }]
        }),
        _react2['default'].createElement(
          _Description2['default'],
          { style: { paddingBottom: 40, minHeight: 750 } },
          _react2['default'].createElement(
            _Container2['default'],
            { style: { display: 'table' } },
            _react2['default'].createElement(_Headline2['default'], { title: 'Contact us' }),
            _react2['default'].createElement(
              _Row2['default'],
              null,
              _react2['default'].createElement(
                _Column2['default'],
                { size: 'large' },
                'There could be a contact form here.'
              )
            )
          )
        )
      );
    }
  }]);
  return Contact;
}(_react.Component);

exports['default'] = Contact;
//# sourceMappingURL=Contact.js.map