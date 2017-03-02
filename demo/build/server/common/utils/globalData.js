'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var globalData = {
  set: function set(key, value) {
    if (typeof window !== 'undefined') {
      if (typeof window.globalAppData === 'undefined') {
        window.globalAppData = {};
      }
      window['globalAppData'][key] = value;
    } else {
      if (typeof global.globalAppData === 'undefined') {
        global.globalAppData = {};
      }
      global['globalAppData'][key] = value;
    }
  },
  get: function get(key) {
    if (typeof window !== 'undefined') {
      if (typeof window.globalAppData !== 'undefined' && typeof window['globalAppData'][key] !== 'undefined') {
        return window['globalAppData'][key];
      }
    } else {
      if (typeof global.globalAppData !== 'undefined' && typeof global['globalAppData'][key] !== 'undefined') {
        return global['globalAppData'][key];
      }
    }
    return false;
  }
};

exports['default'] = globalData;
//# sourceMappingURL=globalData.js.map