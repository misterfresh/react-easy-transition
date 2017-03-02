'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _noImportant = require('aphrodite/no-important');

var _Indicators = require('./Indicators');

var _Indicators2 = _interopRequireDefault(_Indicators);

var _Control = require('./Control');

var _Control2 = _interopRequireDefault(_Control);

var _SlidesWrapper = require('./SlidesWrapper');

var _SlidesWrapper2 = _interopRequireDefault(_SlidesWrapper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var Slider = function Slider(_ref) {
  var slides = _ref.slides,
      activeSlideId = _ref.activeSlideId,
      browseSlide = _ref.browseSlide,
      setActiveSlide = _ref.setActiveSlide,
      transition = _ref.transition;
  return _react2['default'].createElement(
    'section',
    { id: 'intro', style: { display: 'block' }, className: (0, _noImportant.css)(styles.carousel) },
    _react2['default'].createElement(_Indicators2['default'], {
      slides: slides,
      activeSlideId: activeSlideId,
      setActiveSlide: setActiveSlide
    }),
    _react2['default'].createElement(_SlidesWrapper2['default'], {
      slide: slides.toIndexedSeq().get(activeSlideId),
      activeSlideId: activeSlideId,
      slides: slides,
      transition: transition
    }),
    _react2['default'].createElement(_Control2['default'], {
      key: 'previous',
      direction: 'previous',
      browseSlide: browseSlide
    }),
    _react2['default'].createElement(_Control2['default'], {
      key: 'next',
      direction: 'next',
      browseSlide: browseSlide
    })
  );
};

exports['default'] = Slider;


var styles = _noImportant.StyleSheet.create({
  carousel: {
    height: '100%',
    position: 'relative'
  }
});
//# sourceMappingURL=Slider.js.map