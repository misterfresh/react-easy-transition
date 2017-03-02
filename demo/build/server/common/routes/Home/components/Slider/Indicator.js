'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _noImportant = require('aphrodite/no-important');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var Indicator = function Indicator(_ref) {
  var active = _ref.active,
      slideId = _ref.slideId,
      setActiveSlide = _ref.setActiveSlide;
  return _react2['default'].createElement('li', {
    className: (0, _noImportant.css)(styles.indicator, active && styles.active),
    onClick: setActiveSlide,
    'data-slideId': slideId
  });
};

exports['default'] = Indicator;


var styles = _noImportant.StyleSheet.create({
  active: {
    width: 17,
    height: 17,
    margin: 0,
    backgroundColor: '#fff',
    marginLeft: 10,
    ':hover': {
      backgroundColor: '#fff'
    }
  },
  indicator: {
    margin: 1,
    textIndent: '-999px',
    cursor: 'pointer',
    backgroundColor: 'rgba(0,0,0,0)',
    border: '1px solid #fff',
    borderRadius: '10px',
    display: 'inline-block',
    width: 15,
    height: 15,
    marginLeft: 10,
    ':hover': {
      backgroundColor: 'rgba(202, 203, 217, 0.4)'
    }
  }
});
//# sourceMappingURL=Indicator.js.map