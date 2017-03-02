'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.browseSlide = browseSlide;
exports.setActiveSlide = setActiveSlide;

var _constants = require('../../constants.js');

function browseSlide(direction) {
  return {
    type: _constants.BROWSE_SLIDE,
    direction: direction
  };
}

function setActiveSlide(event) {
  return {
    type: _constants.SET_ACTIVE_SLIDE,
    slideId: event.target.getAttribute('data-slideId')
  };
}
//# sourceMappingURL=actions.js.map