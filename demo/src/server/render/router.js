'use strict'
import React from 'react'
import ReactDOM from 'react-dom/server'
import { createMemoryHistory, RouterContext, match } from 'react-router'
import { Provider } from 'react-redux'
import { Map, fromJS } from 'immutable'
import { StyleSheetServer } from 'aphrodite/no-important'

import Helmet from 'react-helmet'

import configureStore from 'store/configureStore'
import {syncHistoryWithStore} from 'reducers/route'

import routes from 'routes/Routes'
import html from './html'

function renderComponentWithRoot(Component, componentProps, store) {

  const initialState = store.getState()

  const InitialView = (
    <Provider store={store}>
      <div>
        <Component {...componentProps} />
      </div>
    </Provider>
  )

  const data = StyleSheetServer.renderStatic(
    () => ReactDOM.renderToString(InitialView)
  )
  const head = Helmet.rewind()
  return html(head, data, initialState.toJS())
}

function handleError(res, error) {
  console.error(error)
  res.status(500).send('Internal server error: ' + error.message)
}

function handleRedirect(res, redirectLocation) {
  res.redirect(302, redirectLocation.pathname + redirectLocation.search)
}

function routeIsUnmatched(renderProps) {
  return renderProps.routes[renderProps.routes.length - 1].path === '*'
}

function handleRoute(route, res, renderProps) {
  const store = configureStore(Map())

  store.dispatch({
    type: 'INITIALIZE_ROUTE',
    route
  })

  const status = routeIsUnmatched(renderProps) ? 404 : 200
  const readyOnAllActions = renderProps.components
    .filter((component) => component.readyOnActions)
    .map((component) => component.readyOnActions(store.dispatch, renderProps.params))

  console.log('promise readyonaction: ', readyOnAllActions)
  Promise
    .all(readyOnAllActions)
    .then(() => res.status(status).send(renderComponentWithRoot(RouterContext, renderProps, store)))
}

var router = function (req, res) {
  let route = req.url

  match({ routes, location: route }, (error, redirectLocation, renderProps) => {

    if (error) {
      handleError(res, error)

    } else if (redirectLocation) {
      handleRedirect(res, redirectLocation)

    } else if (renderProps) {
      handleRoute(route, res, renderProps)

    } else {
      // This should actually never happen, as Routes.js has a catch-all '*' path.
      res.status(404).send('Not found')
    }
  })
}

module.exports = router