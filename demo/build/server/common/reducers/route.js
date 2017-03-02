'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports['default'] = route;

var _immutable = require('immutable');

var _immutable2 = _interopRequireDefault(_immutable);

var _reactRouterRedux = require('react-router-redux');

var _constants = require('../constants.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var initialState = _immutable2['default'].fromJS({
  locationBeforeTransitions: null
});

function route() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case _reactRouterRedux.LOCATION_CHANGE:
      return state.merge({
        locationBeforeTransitions: action.payload
      });

    case _constants.INITIALIZE_ROUTE:
      return state.merge({
        locationBeforeTransitions: {
          "pathname": action.route,
          "action": "PUSH",
          "search": "",
          "hash": "",
          "state": null,
          "query": {},
          "$searchBase": {
            "search": "",
            "searchBase": ""
          }
        }
      });

    default:
      return state;
  }
}
//# sourceMappingURL=route.js.map