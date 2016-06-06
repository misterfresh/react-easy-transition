'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactAddonsTransitionGroup = require('react-addons-transition-group');

var _reactAddonsTransitionGroup2 = _interopRequireDefault(_reactAddonsTransitionGroup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var EasyTransition = function (_Component) {
    _inherits(EasyTransition, _Component);

    function EasyTransition() {
        var _Object$getPrototypeO;

        var _temp, _this, _ret;

        _classCallCheck(this, EasyTransition);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(EasyTransition)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.state = {
            visible: true
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(EasyTransition, [{
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
                { transitionName: 'fade', component: 'div' },
                this.state.visible && _react2['default'].createElement(
                    TransitionChild,
                    _extends({ key: this.props.path, childDidLeave: this.childDidLeave.bind(this) }, this.props),
                    this.props.children
                )
            );
        }
    }]);

    return EasyTransition;
}(_react.Component);

EasyTransition.propTypes = {
    path: _react.PropTypes.string.isRequired,
    initialStyle: _react.PropTypes.object.isRequired,
    transition: _react.PropTypes.string.isRequired,
    finalStyle: _react.PropTypes.object.isRequired,
    leaveStyle: _react.PropTypes.object
};
exports['default'] = EasyTransition;

var TransitionChild = function (_Component2) {
    _inherits(TransitionChild, _Component2);

    function TransitionChild() {
        _classCallCheck(this, TransitionChild);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(TransitionChild).apply(this, arguments));
    }

    _createClass(TransitionChild, [{
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
            var _this3 = this;

            Object.assign(this.page.style, this.props.initialStyle);
            Object.keys(this.props.initialStyle).forEach(function (property) {
                return window.getComputedStyle(_this3.page)[property];
            });
            this.page.style.transition = this.props.transition;
            Object.assign(this.page.style, this.props.finalStyle);
            var transitionsRemaining = this.props.transition.split(',').length;
            this.page.addEventListener("transitionend", function (event) {
                transitionsRemaining--;
                if (transitionsRemaining) return;
                callback();
            }, false);
        }
    }, {
        key: 'componentWillLeave',
        value: function componentWillLeave(callback) {
            var _this4 = this;

            var leaveStyle = this.props.leaveStyle ? this.props.leaveStyle : this.props.initialStyle;
            Object.assign(this.page.style, leaveStyle);
            var transitionsRemaining = this.props.transition.split(',').length;
            this.page.addEventListener("transitionend", function (event) {
                transitionsRemaining--;
                if (transitionsRemaining) return;
                callback();
                _this4.props.childDidLeave();
            }, false);
        }
    }, {
        key: 'render',
        value: function render() {
            var _this5 = this;

            return _react2['default'].createElement(
                'div',
                { ref: function ref(_ref) {
                        return _this5.page = _ref;
                    }, style: this.props.initialStyle },
                this.props.children
            );
        }
    }]);

    return TransitionChild;
}(_react.Component);