'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports['default'] = undefined;

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

var _reactRedux = require('react-redux');

var _DevTools = require('./DevTools');

var _DevTools2 = _interopRequireDefault(_DevTools);

var _Router = require('react-router/lib/Router');

var _Router2 = _interopRequireDefault(_Router);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var Root = function (_Component) {
  (0, _inherits3['default'])(Root, _Component);

  function Root(props) {
    (0, _classCallCheck3['default'])(this, Root);

    var _this = (0, _possibleConstructorReturn3['default'])(this, (Root.__proto__ || (0, _getPrototypeOf2['default'])(Root)).call(this, props));

    _this.state = { isMounted: false };
    return _this;
  }

  (0, _createClass3['default'])(Root, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.setState({ isMounted: true });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          store = _props.store,
          history = _props.history,
          routes = _props.routes;

      return _react2['default'].createElement(
        _reactRedux.Provider,
        { store: store },
        _react2['default'].createElement(
          'div',
          null,
          _react2['default'].createElement(_Router2['default'], { history: history, routes: routes, key: Math.random() }),
          this.state.isMounted && _react2['default'].createElement(_DevTools2['default'], null)
        )
      );
    }
  }]);
  return Root;
}(_react.Component);

exports['default'] = Root;
//# sourceMappingURL=Root.dev.js.map