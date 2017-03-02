'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports['default'] = stopEvent;
function stopEvent(event) {
  event.preventDefault();
  event.stopPropagation();
  return false;
}
//# sourceMappingURL=stopEvent.js.map