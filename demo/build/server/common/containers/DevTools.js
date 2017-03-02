'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reduxDevtools = require('redux-devtools');

var _reduxDevtoolsLogMonitor = require('redux-devtools-log-monitor');

var _reduxDevtoolsLogMonitor2 = _interopRequireDefault(_reduxDevtoolsLogMonitor);

var _reduxDevtoolsDockMonitor = require('redux-devtools-dock-monitor');

var _reduxDevtoolsDockMonitor2 = _interopRequireDefault(_reduxDevtoolsDockMonitor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

exports['default'] = (0, _reduxDevtools.createDevTools)(_react2['default'].createElement(
  _reduxDevtoolsDockMonitor2['default'],
  {
    toggleVisibilityKey: 'ctrl-k',
    changePositionKey: 'ctrl-w',
    defaultIsVisible: false,
    fluid: false,
    defaultPosition: 'right',
    defaultSize: 250
  },
  _react2['default'].createElement(_reduxDevtoolsLogMonitor2['default'], {
    theme: 'tomorrow',
    preserveScrollTop: false,
    select: function select(state) {
      return state;
    },
    expandActionRoot: true,
    expandStateRoot: true
  })
));
//# sourceMappingURL=DevTools.js.map