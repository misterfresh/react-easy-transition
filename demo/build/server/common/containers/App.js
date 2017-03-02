'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

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

var _redux = require('redux');

var _reactRedux = require('react-redux');

var _Page = require('../components/Layout/Page');

var _Page2 = _interopRequireDefault(_Page);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var App = function (_Component) {
  (0, _inherits3['default'])(App, _Component);

  function App() {
    (0, _classCallCheck3['default'])(this, App);
    return (0, _possibleConstructorReturn3['default'])(this, (App.__proto__ || (0, _getPrototypeOf2['default'])(App)).apply(this, arguments));
  }

  (0, _createClass3['default'])(App, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var dispatch = this.props.dispatch;

      App.readyOnActions(dispatch);
    }
  }, {
    key: 'renderPage',
    value: function renderPage() {
      var _props = this.props,
          links = _props.links,
          path = _props.path,
          children = _props.children;


      return _react2['default'].createElement(
        _Page2['default'],
        {
          links: links,
          path: path
        },
        children
      );
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        'div',
        null,
        _react2['default'].createElement(_reactHelmet2['default'], {
          title: "React Easy Transition",
          titleTemplate: "%s - " + "React Easy Transition",
          meta: [{ 'char-set': 'utf-8' }, { 'name': 'description', 'content': 'Create easy transition effects!' }]
        }),
        this.renderPage()
      );
    }
  }], [{
    key: 'readyOnActions',
    value: function readyOnActions(dispatch) {
      return _promise2['default'].all([]);
    }
  }]);
  return App;
}(_react.Component);

function mapStateToProps(state) {
  return {
    links: state.getIn(['display', 'links']),
    path: state.getIn(['route', 'locationBeforeTransitions', 'pathname'])
  };
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch: dispatch
  };
}
exports['default'] = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(App);
//# sourceMappingURL=App.js.map