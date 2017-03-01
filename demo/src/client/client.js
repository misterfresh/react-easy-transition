'use strict'

import React from 'react'
import ReactDOM from 'react-dom'

import browserHistory from 'react-router/lib/browserHistory'
import { StyleSheet } from 'aphrodite'
import { fromJS } from 'immutable'

import routes from 'routes/Routes'
import Root from 'containers/Root'
import configureStore from 'store/configureStore'
import { syncHistoryWithStore } from 'react-router-redux';

let initialState = window._INITIAL_STATE_ || {}

const store = configureStore(fromJS(initialState))

const history = syncHistoryWithStore(browserHistory, store, {
    selectLocationState (state) {
        return state.get('route').toJS();
    }
})

StyleSheet.rehydrate(window.renderedClassNames)

ReactDOM.render(
    <Root store={store} history={history} routes={routes} />,
    document.getElementById('root')
);

delete window._INITIAL_STATE_
delete window.renderedClassNames