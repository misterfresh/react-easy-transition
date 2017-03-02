'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _noImportant = require('aphrodite/no-important');

var _Env = require('../../../../utils/Env');

var _Env2 = _interopRequireDefault(_Env);

var _MainTitle = require('../../../../components/Text/MainTitle');

var _MainTitle2 = _interopRequireDefault(_MainTitle);

var _Paragraph = require('../../../../components/Text/Paragraph');

var _Paragraph2 = _interopRequireDefault(_Paragraph);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var Slide = function Slide(_ref) {
  var image = _ref.image,
      caption = _ref.caption,
      active = _ref.active;
  return _react2['default'].createElement(
    'div',
    { className: (0, _noImportant.css)(styles.slide) },
    _react2['default'].createElement('img', { src: (0, _Env2['default'])().assets + image, className: (0, _noImportant.css)(styles.image) }),
    _react2['default'].createElement(
      'div',
      { className: (0, _noImportant.css)(styles.caption) },
      caption.get('title') && _react2['default'].createElement(_MainTitle2['default'], { title: caption.get('title'), classes: [styles.white] }),
      caption.get('description') && _react2['default'].createElement(
        _Paragraph2['default'],
        { classes: [styles.white] },
        caption.get('description')
      )
    )
  );
};

exports['default'] = Slide;


var styles = _noImportant.StyleSheet.create({
  slide: {
    overflow: 'hidden',
    width: '100%',
    maxHeight: 550,
    height: 'auto',
    perspective: '1000px',
    position: 'relative',
    display: 'block',
    pointerEvents: 'auto',
    opacity: 1,
    left: 0
  },
  image: {
    width: '100%',
    height: 'auto',
    lineHeight: 1,
    display: 'block',
    maxWidth: '100%'
  },
  caption: {
    position: 'absolute',
    right: '15%',
    bottom: 20,
    left: '15%',
    zIndex: 10,
    paddingTop: 20,
    paddingBottom: 20,
    color: '#fff',
    textAlign: 'center',
    textShadow: '0 1px 2px rgba(0,0,0,.6)',
    '@media screen and (min-width: 768px)': {
      right: '20%',
      left: '20%',
      paddingBottom: 30
    }
  },
  white: {
    color: '#fff'
  }
});
//# sourceMappingURL=Slide.js.map