'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _App = require('../containers/App');

var _App2 = _interopRequireDefault(_App);

var _Home = require('./Home/Home');

var _Home2 = _interopRequireDefault(_Home);

var _About = require('./About/About');

var _About2 = _interopRequireDefault(_About);

var _Contact = require('./Contact/Contact');

var _Contact2 = _interopRequireDefault(_Contact);

var _NoMatch = require('../containers/NoMatch');

var _NoMatch2 = _interopRequireDefault(_NoMatch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

exports['default'] = _react2['default'].createElement(
  _reactRouter.Route,
  { path: '/', component: _App2['default'] },
  _react2['default'].createElement(_reactRouter.IndexRoute, { component: _Home2['default'] }),
  _react2['default'].createElement(_reactRouter.Route, { path: 'about', component: _About2['default'] }),
  _react2['default'].createElement(_reactRouter.Route, { path: 'contact', component: _Contact2['default'] }),
  _react2['default'].createElement(_reactRouter.Route, { path: '*', component: _NoMatch2['default'] })
);
//# sourceMappingURL=Routes.js.map