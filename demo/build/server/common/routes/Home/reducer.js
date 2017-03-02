'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports['default'] = home;

var _immutable = require('immutable');

var _immutable2 = _interopRequireDefault(_immutable);

var _constants = require('../../constants.js');

var _slides = require('./data/slides.json');

var _slides2 = _interopRequireDefault(_slides);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var initialState = _immutable2['default'].fromJS({
  slides: _slides2['default'],
  activeSlideId: 0
});

function home() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];


  switch (action.type) {

    case _constants.SET_ACTIVE_SLIDE:
      return state.set('activeSlideId', parseInt(action.slideId));

    case _constants.BROWSE_SLIDE:
      var direction = action.direction;
      var currentId = state.get('activeSlideId');
      var slidesCount = state.get('slides').size;
      var finalId = void 0;
      if (direction === 'previous') {
        if (currentId === 0) {
          finalId = slidesCount - 1;
        } else {
          finalId = currentId - 1;
        }
      } else {
        if (currentId === slidesCount - 1) {
          finalId = 0;
        } else {
          finalId = currentId + 1;
        }
      }
      return state.set('activeSlideId', finalId);

    default:
      return state;

  }
}
//# sourceMappingURL=reducer.js.map