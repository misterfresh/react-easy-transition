'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _noImportant = require('aphrodite/no-important');

var _Indicator = require('./Indicator');

var _Indicator2 = _interopRequireDefault(_Indicator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var Indicators = function Indicators(_ref) {
  var slides = _ref.slides,
      activeSlideId = _ref.activeSlideId,
      setActiveSlide = _ref.setActiveSlide;
  return _react2['default'].createElement(
    'ol',
    { className: (0, _noImportant.css)(styles.indicators) },
    slides.toIndexedSeq().map(function (slide, index) {
      return _react2['default'].createElement(_Indicator2['default'], {
        key: index,
        active: activeSlideId === index,
        setActiveSlide: setActiveSlide,
        slideId: index
      });
    })
  );
};

exports['default'] = Indicators;


var styles = _noImportant.StyleSheet.create({
  indicators: {
    position: 'absolute',
    bottom: 10,
    left: '50%',
    zIndex: 15,
    width: '60%',
    paddingLeft: 0,
    marginLeft: '-30%',
    textAlign: 'center',
    listStyle: 'none'
  }
});
//# sourceMappingURL=Indicators.js.map