'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

var _globalData = require('../../common/utils/globalData');

var _globalData2 = _interopRequireDefault(_globalData);

var _Env = require('../../common/utils/Env');

var _Env2 = _interopRequireDefault(_Env);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var html = function html(head, data, initialState) {
  var __PROD__ = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

  return '\n<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charSet="utf-8">\n    <meta httpEquiv="X-UA-Compatible" content="IE=edge">\n    ' + head.title.toString() + '\n    <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no">\n    <link rel="icon" type="image/vnd.microsoft.icon" href="' + (0, _Env2['default'])().assets + 'assets/icons/favicon.ico" />\n    <link rel="shortcut icon" type="image/x-icon" href="' + (0, _Env2['default'])().assets + 'assets/icons/favicon.ico" />\n    ' + head.meta.toString() + '\n    ' + head.link.toString() + ' \n    \n    <link href=\'' + (0, _Env2['default'])().assets + 'assets/css/bootstrap.min.css\' rel=\'stylesheet\' />\n    <link href=\'' + (0, _Env2['default'])().assets + 'assets/css/font-awesome.min.css\' rel=\'stylesheet\' />\n    <style data-aphrodite>' + data.css.content + '</style>\n  </head>\n  <body style="margin: 0; padding: 0; height: 100%;">\n    <div id="root" style="position: relative; top: 0; bottom: 0; width: 100%;">' + data.html + '</div>\n    <script src="' + (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'test' ? (0, _Env2['default'])().assets + 'assets/js/vendors.min.js' : 'http://localhost:5000/assets/js/dll.vendor.js') + '"></script>\n    <script type="text/javascript" charset="utf-8">\n      window.globalAppData = {}; \n      window.globalAppData.language = \'' + _globalData2['default'].get('language') + '\';\n      window.renderedClassNames = ' + (0, _stringify2['default'])(data.css.renderedClassNames) + ';\n      window._INITIAL_STATE_ = ' + (0, _stringify2['default'])(initialState) + ';\n      window._ENV_= "' + process.env.NODE_ENV + '";\n    </script>\n    <script src="' + (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'test' ? (0, _Env2['default'])().assets + 'assets/js/app.min.js' : 'http://localhost:5000/app.js') + '" ></script>\n  </body>\n</html>\n        ';
};
exports['default'] = html;
//# sourceMappingURL=html.js.map