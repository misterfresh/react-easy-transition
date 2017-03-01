'use strict'

import React, { Component, PropTypes } from 'react'
import Helmet from 'react-helmet'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Page from 'components/Layout/Page'

class App extends Component {

  static readyOnActions(dispatch) {
    return Promise.all([
    ])
  }

  componentDidMount(){
    let {dispatch} = this.props
    App.readyOnActions(dispatch)
  }

  renderPage(){
    let {
      links, path,
      children
    } = this.props

    return <Page
      links={links}
      path={path}
    >
      {children}
    </Page>
  }

  render(){
    return <div>
      <Helmet
      title={"React Easy Transition"}
      titleTemplate={"%s - " + "React Easy Transition"}
      meta={[
        {'char-set': 'utf-8'},
        {'name': 'description', 'content': 'Create easy transition effects!'}
      ]}
    />
      {this.renderPage()}
    </div>
  }
}

function mapStateToProps(state) {
  return {
    links: state.getIn(['display', 'links']),
    path: state.getIn(['route','locationBeforeTransitions','pathname'])
  }
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
