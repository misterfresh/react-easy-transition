'use strict';

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _server = require('react-dom/server');

var _server2 = _interopRequireDefault(_server);

var _reactRouter = require('react-router');

var _reactRedux = require('react-redux');

var _immutable = require('immutable');

var _noImportant = require('aphrodite/no-important');

var _reactHelmet = require('react-helmet');

var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

var _configureStore = require('../../common/store/configureStore');

var _configureStore2 = _interopRequireDefault(_configureStore);

var _route = require('../../common/reducers/route');

var _Routes = require('../../common/routes/Routes');

var _Routes2 = _interopRequireDefault(_Routes);

var _html = require('./html');

var _html2 = _interopRequireDefault(_html);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function renderComponentWithRoot(Component, componentProps, store) {

  var initialState = store.getState();

  var InitialView = _react2['default'].createElement(
    _reactRedux.Provider,
    { store: store },
    _react2['default'].createElement(
      'div',
      null,
      _react2['default'].createElement(Component, componentProps)
    )
  );

  var data = _noImportant.StyleSheetServer.renderStatic(function () {
    return _server2['default'].renderToString(InitialView);
  });
  var head = _reactHelmet2['default'].rewind();
  return (0, _html2['default'])(head, data, initialState.toJS());
}

function handleError(res, error) {
  console.error(error);
  res.status(500).send('Internal server error: ' + error.message);
}

function handleRedirect(res, redirectLocation) {
  res.redirect(302, redirectLocation.pathname + redirectLocation.search);
}

function routeIsUnmatched(renderProps) {
  return renderProps.routes[renderProps.routes.length - 1].path === '*';
}

function handleRoute(route, res, renderProps) {
  var store = (0, _configureStore2['default'])((0, _immutable.Map)());

  store.dispatch({
    type: 'INITIALIZE_ROUTE',
    route: route
  });

  var status = routeIsUnmatched(renderProps) ? 404 : 200;
  var readyOnAllActions = renderProps.components.filter(function (component) {
    return component.readyOnActions;
  }).map(function (component) {
    return component.readyOnActions(store.dispatch, renderProps.params);
  });

  console.log('promise readyonaction: ', readyOnAllActions);
  _promise2['default'].all(readyOnAllActions).then(function () {
    return res.status(status).send(renderComponentWithRoot(_reactRouter.RouterContext, renderProps, store));
  });
}

var router = function router(req, res) {
  var route = req.url;

  (0, _reactRouter.match)({ routes: _Routes2['default'], location: route }, function (error, redirectLocation, renderProps) {

    if (error) {
      handleError(res, error);
    } else if (redirectLocation) {
      handleRedirect(res, redirectLocation);
    } else if (renderProps) {
      handleRoute(route, res, renderProps);
    } else {
      // This should actually never happen, as Routes.js has a catch-all '*' path.
      res.status(404).send('Not found');
    }
  });
};

module.exports = router;
//# sourceMappingURL=router.js.map