'use strict'

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ReactTransitionGroup from 'react-addons-transition-group'

import TransitionChild from './TransitionChild'

export default class ReactEasyTransition extends Component {
  state = {
    visible: true
  }
  static propTypes = {
    path: PropTypes.string.isRequired,
    initialStyle: PropTypes.object.isRequired,
    transition: PropTypes.string.isRequired,
    finalStyle: PropTypes.object.isRequired,
    leaveStyle: PropTypes.object,
    className: PropTypes.string,
    component: PropTypes.string
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      visible: this.props.path === nextProps.path || typeof this.props.path === 'undefined'
    })
  }

  childDidLeave() {
    this.setState({
      visible: true
    })
  }

  render() {
    return (
      <ReactTransitionGroup
        transitionName="fade"
        className={this.props.className}
        component={this.props.component || 'div'}
      >
        {this.state.visible &&
          <TransitionChild
            key={this.props.path}
            childDidLeave={this.childDidLeave.bind(this)}
            {...this.props}
          >
            {this.props.children}
          </TransitionChild>}
      </ReactTransitionGroup>
    )
  }
}
