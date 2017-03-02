'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactHelmet = require('react-helmet');

var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

var _redux = require('redux');

var _reactRedux = require('react-redux');

var _globalData = require('../../utils/globalData');

var _globalData2 = _interopRequireDefault(_globalData);

var _Slider = require('./components/Slider/Slider');

var _Slider2 = _interopRequireDefault(_Slider);

var _actions = require('./actions');

var HomeActions = _interopRequireWildcard(_actions);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var Home = function (_Component) {
  (0, _inherits3['default'])(Home, _Component);
  (0, _createClass3['default'])(Home, null, [{
    key: 'readyOnActions',
    value: function readyOnActions(dispatch) {
      return _promise2['default'].all([]);
    }
  }]);

  function Home(props) {
    (0, _classCallCheck3['default'])(this, Home);
    return (0, _possibleConstructorReturn3['default'])(this, (Home.__proto__ || (0, _getPrototypeOf2['default'])(Home)).call(this, props));
  }

  (0, _createClass3['default'])(Home, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _props = this.props,
          dispatch = _props.dispatch,
          homeActions = _props.homeActions;

      Home.readyOnActions(dispatch);
      if ('development' !== process.env.NODE_ENV && !_globalData2['default'].get('slideshowBrowsing')) {
        _globalData2['default'].set('slideshowBrowsing', window.setInterval(function () {
          homeActions.browseSlide('next');
        }, 6000));
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          slides = _props2.slides,
          activeSlideId = _props2.activeSlideId,
          homeActions = _props2.homeActions;


      return _react2['default'].createElement(
        'div',
        null,
        _react2['default'].createElement(_reactHelmet2['default'], {
          title: 'Home',
          meta: [{ 'name': 'description', 'content': "React Easy Transition Demo" }]
        }),
        _react2['default'].createElement(_Slider2['default'], {
          slides: slides,
          browseSlide: homeActions.browseSlide,
          setActiveSlide: homeActions.setActiveSlide,
          activeSlideId: activeSlideId,
          transition: {
            path: 'slide-' + activeSlideId,
            initialStyle: { opacity: 0 },
            transition: "opacity 0.5s ease-in-out",
            finalStyle: { opacity: 1 }
          }
        })
      );
    }
  }]);
  return Home;
}(_react.Component);

function mapStateToProps(state) {
  return {
    activeSlideId: state.getIn(['home', 'activeSlideId']),
    slides: state.getIn(['home', 'slides'])
  };
}

function mapDispatchToProps(dispatch) {
  return {
    homeActions: (0, _redux.bindActionCreators)(HomeActions, dispatch),
    dispatch: dispatch
  };
}

exports['default'] = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Home);
//# sourceMappingURL=Home.js.map