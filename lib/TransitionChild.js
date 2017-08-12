'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports['default'] = undefined;

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

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

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var TransitionChild = function (_Component) {
  (0, _inherits3['default'])(TransitionChild, _Component);

  function TransitionChild() {
    (0, _classCallCheck3['default'])(this, TransitionChild);
    return (0, _possibleConstructorReturn3['default'])(this, (TransitionChild.__proto__ || (0, _getPrototypeOf2['default'])(TransitionChild)).apply(this, arguments));
  }

  (0, _createClass3['default'])(TransitionChild, [{
    key: 'componentWillAppear',
    value: function componentWillAppear(callback) {
      this.componentFadeIn(callback);
    }
  }, {
    key: 'componentWillEnter',
    value: function componentWillEnter(callback) {
      this.componentFadeIn(callback);
    }
  }, {
    key: 'componentFadeIn',
    value: function componentFadeIn(callback) {
      var _this2 = this;

      var page = this.page,
          finalStyle = this.props.finalStyle;
      (0, _extends3['default'])(this.page.style, this.props.initialStyle);
      (0, _keys2['default'])(this.props.initialStyle).forEach(function (property) {
        return window.getComputedStyle(_this2.page)[property];
      });
      this.page.style.transition = this.props.transition;
      setTimeout(function () {
        return (0, _extends3['default'])(page.style, finalStyle);
      });
      var transitionsRemaining = this.props.transition.split(',').length;
      this.page.addEventListener('transitionend', function () {
        transitionsRemaining--;
        if (transitionsRemaining) return;
        callback();
      }, false);
    }
  }, {
    key: 'componentWillLeave',
    value: function componentWillLeave(callback) {
      var _this3 = this;

      var leaveStyle = this.props.leaveStyle ? this.props.leaveStyle : this.props.initialStyle;
      (0, _extends3['default'])(this.page.style, leaveStyle);
      var transitionsRemaining = this.props.transition.split(',').length;
      this.page.addEventListener('transitionend', function () {
        transitionsRemaining--;
        if (transitionsRemaining) return;
        callback();
        _this3.props.childDidLeave();
      }, false);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this4 = this;

      return _react2['default'].createElement(
        'div',
        { ref: function ref(_ref) {
            return _this4.page = _ref;
          }, style: this.props.initialStyle },
        this.props.children
      );
    }
  }]);
  return TransitionChild;
}(_react.Component);

exports['default'] = TransitionChild;
//# sourceMappingURL=TransitionChild.js.map