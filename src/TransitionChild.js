'use strict'

import React, { Component } from 'react'

export default class TransitionChild extends Component {
  componentWillAppear(callback) {
    this.componentFadeIn(callback)
  }

  componentWillEnter(callback) {
    this.componentFadeIn(callback)
  }

  componentFadeIn(callback) {
    let page = this.page,
      finalStyle = this.props.finalStyle
    Object.assign(this.page.style, this.props.initialStyle)
    Object.keys(this.props.initialStyle).forEach(
      property => window.getComputedStyle(this.page)[property]
    )
    this.page.style.transition = this.props.transition
    setTimeout(() => Object.assign(page.style, finalStyle))
    let transitionsRemaining = this.props.transition.split(',').length
    this.page.addEventListener(
      'transitionend',
      () => {
        transitionsRemaining--
        if (transitionsRemaining) return
        callback()
      },
      false
    )
  }

  componentWillLeave(callback) {
    let leaveStyle = this.props.leaveStyle ? this.props.leaveStyle : this.props.initialStyle
    Object.assign(this.page.style, leaveStyle)
    let transitionsRemaining = this.props.transition.split(',').length
    this.page.addEventListener(
      'transitionend',
      () => {
        transitionsRemaining--
        if (transitionsRemaining) return
        callback()
        this.props.childDidLeave()
      },
      false
    )
  }

  render() {
    return (
      <div ref={ref => (this.page = ref)} style={this.props.initialStyle}>
        {this.props.children}
      </div>
    )
  }
}
