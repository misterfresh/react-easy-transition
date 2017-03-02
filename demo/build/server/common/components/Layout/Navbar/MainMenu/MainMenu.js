'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _noImportant = require('aphrodite/no-important');

var _MainLink = require('./MainLink');

var _MainLink2 = _interopRequireDefault(_MainLink);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var MainMenu = function MainMenu(_ref) {
  var mainLinks = _ref.mainLinks,
      path = _ref.path;
  return _react2['default'].createElement(
    'ul',
    { className: (0, _noImportant.css)(styles.mainMenu) },
    mainLinks.toIndexedSeq().map(function (mainMenuLink, index) {
      return _react2['default'].createElement(
        'li',
        {
          className: (0, _noImportant.css)(styles.mainItem),
          key: index
        },
        _react2['default'].createElement(_MainLink2['default'], {
          link: mainMenuLink,
          active: isLinkActive(mainMenuLink, path)
        })
      );
    })
  );
};

exports['default'] = MainMenu;


var styles = _noImportant.StyleSheet.create({
  mainMenu: {
    position: 'static',
    margin: '7.5px -15px',
    paddingLeft: 0,
    listStyle: 'none',
    float: 'left',
    marginRight: -15,
    marginLeft: 0,
    marginTop: 0,
    marginBottom: 0,
    top: 2
  },
  mainItem: {
    position: 'relative',
    display: 'block',
    color: '#555',
    float: 'left'
  }
});

var isLinkActive = function isLinkActive(mainMenuLink, path) {
  if (mainMenuLink.get('href') === '/') {
    return !path || path === '/';
  } else {
    return mainMenuLink.get('href') === path || '/' + mainMenuLink.get('href') === path;
  }
};
//# sourceMappingURL=MainMenu.js.map