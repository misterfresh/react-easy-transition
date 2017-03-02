'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _noImportant = require('aphrodite/no-important');

var _ReactEasyTransition = require('../../../../../../../lib/ReactEasyTransition.js');

var _ReactEasyTransition2 = _interopRequireDefault(_ReactEasyTransition);

var _Env = require('../../../../utils/Env');

var _Env2 = _interopRequireDefault(_Env);

var _Slide = require('./Slide');

var _Slide2 = _interopRequireDefault(_Slide);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var SlidesWrapper = function SlidesWrapper(_ref) {
  var activeSlideId = _ref.activeSlideId,
      slide = _ref.slide,
      slides = _ref.slides,
      transition = _ref.transition;
  return _react2['default'].createElement(
    'div',
    {
      className: (0, _noImportant.css)(styles.slides)
    },
    slides.toIndexedSeq().map(function (element, index) {
      return _react2['default'].createElement('img', { src: (0, _Env2['default'])().assets + slide.get('image'), style: { display: 'none' }, key: "hidden-image-" + index });
    }),
    _react2['default'].createElement(
      _ReactEasyTransition2['default'],
      transition,
      _react2['default'].createElement(_Slide2['default'], {
        image: slide.get('image'),
        caption: slide.get('caption')
      })
    )
  );
};

exports['default'] = SlidesWrapper;


var styles = _noImportant.StyleSheet.create({
  slides: {
    height: '100%',
    position: 'relative',
    width: '100%',
    overflow: 'hidden'
  }
});
//# sourceMappingURL=SlidesWrapper.js.map