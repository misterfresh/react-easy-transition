'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports['default'] = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

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

var _class, _temp2;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactAddonsTransitionGroup = require('react-addons-transition-group');

var _reactAddonsTransitionGroup2 = _interopRequireDefault(_reactAddonsTransitionGroup);

var _TransitionChild = require('./TransitionChild');

var _TransitionChild2 = _interopRequireDefault(_TransitionChild);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var ReactEasyTransition = (_temp2 = _class = function (_Component) {
  (0, _inherits3['default'])(ReactEasyTransition, _Component);

  function ReactEasyTransition() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3['default'])(this, ReactEasyTransition);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3['default'])(this, (_ref = ReactEasyTransition.__proto__ || (0, _getPrototypeOf2['default'])(ReactEasyTransition)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      visible: true
    }, _temp), (0, _possibleConstructorReturn3['default'])(_this, _ret);
  }

  (0, _createClass3['default'])(ReactEasyTransition, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      this.setState({
        visible: this.props.path === nextProps.path || typeof this.props.path === 'undefined'
      });
    }
  }, {
    key: 'childDidLeave',
    value: function childDidLeave() {
      this.setState({
        visible: true
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        _reactAddonsTransitionGroup2['default'],
        {
          transitionName: 'fade',
          className: this.props.className,
          component: this.props.component || 'div'
        },
        this.state.visible && _react2['default'].createElement(
          _TransitionChild2['default'],
          (0, _extends3['default'])({
            key: this.props.path,
            childDidLeave: this.childDidLeave.bind(this)
          }, this.props),
          this.props.children
        )
      );
    }
  }]);
  return ReactEasyTransition;
}(_react.Component), _class.propTypes = {
  path: _propTypes2['default'].string.isRequired,
  initialStyle: _propTypes2['default'].object.isRequired,
  transition: _propTypes2['default'].string.isRequired,
  finalStyle: _propTypes2['default'].object.isRequired,
  leaveStyle: _propTypes2['default'].object,
  className: _propTypes2['default'].string,
  component: _propTypes2['default'].string
}, _temp2);
exports['default'] = ReactEasyTransition;
//# sourceMappingURL=ReactEasyTransition.js.map