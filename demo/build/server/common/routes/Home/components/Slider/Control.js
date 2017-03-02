'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _noImportant = require('aphrodite/no-important');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var Control = function Control(_ref) {
  var direction = _ref.direction,
      browseSlide = _ref.browseSlide;
  return _react2['default'].createElement(
    'a',
    {
      className: (0, _noImportant.css)(styles.control, styles[direction]),
      role: 'button',
      onClick: function onClick() {
        browseSlide(direction);
      }
    },
    _react2['default'].createElement('span', {
      className: "glyphicon glyphicon-chevron-" + (direction === 'previous' ? 'left' : 'right') + ' ' + (0, _noImportant.css)(styles.button, styles['button' + direction]),
      'aria-hidden': 'true'
    }),
    _react2['default'].createElement(
      'span',
      { className: 'sr-only' },
      direction === 'previous' ? "Previous" : "Next"
    )
  );
};

exports['default'] = Control;


var styles = _noImportant.StyleSheet.create({
  control: {
    zIndex: 2,
    backgroundRepeat: 'repeat-x',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    width: '15%',
    fontSize: '20px',
    color: '#fff',
    textAlign: 'center',
    textShadow: '0 1px 2px rgba(0,0,0,.6)',
    backgroundColor: 'rgba(0,0,0,0)',
    opacity: '.5',
    textDecoration: 'none',
    outline: 0,
    cursor: 'pointer',
    ':hover': {
      color: '#fff',
      textDecoration: 'none',
      opacity: '0.9'
    }
  },
  previous: {
    backgroundImage: 'linear-gradient(to right,rgba(0,0,0,.5) 0,rgba(0,0,0,.0001) 100%)'
  },
  next: {
    right: 0,
    left: 'auto',
    backgroundImage: 'linear-gradient(to right,rgba(0,0,0,.0001) 0,rgba(0,0,0,.5) 100%)'
  },
  button: {
    position: 'absolute',
    top: '50%',
    zIndex: 5,
    display: 'inline-block',
    marginTop: -10,
    '@media screen and (min-width: 768px)': {
      width: 30,
      height: 3,
      marginTop: -10,
      fontSize: '30px'
    }
  },
  buttonnext: {
    right: '50%',
    marginRight: -10,
    '@media screen and (min-width: 768px)': {
      marginRight: -10
    }
  },
  buttonprevious: {
    left: '50%',
    marginLeft: -10,
    '@media screen and (min-width: 768px)': {
      marginLeft: -10
    }
  }
});
//# sourceMappingURL=Control.js.map