'use strict'
import React, {Component, PropTypes} from 'react'
import {Provider} from 'react-redux'
import DevTools from './DevTools'
import Router from 'react-router/lib/Router'

export default class Root extends Component {
  constructor(props) {
    super(props)
    this.state = { isMounted: false }
  }

  componentDidMount() {
    this.setState({ isMounted: true })
  }

  render() {
    const {store, history, routes} = this.props
    return <Provider store={store}>
      <div>
        <Router history={history} routes={routes} key={Math.random()}/>
        {this.state.isMounted && <DevTools />}
      </div>
    </Provider>
  }
}
