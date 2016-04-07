'use strict'
import React, { Component, PropTypes } from 'react'
import ReactTransitionGroup from 'react-addons-transition-group'

export default class EasyTransition extends Component {
    state = {
        visible: true
    };
    static propTypes = {
        path: React.PropTypes.string.isRequired,
        initialStyle: React.PropTypes.object.isRequired,
        transition: React.PropTypes.string.isRequired,
        finalStyle: React.PropTypes.object.isRequired,
        leaveStyle: React.PropTypes.object.isRequired
    };
    componentWillReceiveProps(nextProps) {
        this.setState({
            visible: (this.props.path === nextProps.path || (typeof this.props.path === 'undefined'))
        })
    }
    childDidLeave() {
        this.setState({
            visible: true
        })
    }
    render() {
        return (
            <ReactTransitionGroup transitionName="fade">
                {this.state.visible &&
                <TransitionChild key={this.props.path} childDidLeave={this.childDidLeave.bind(this)} {...this.props}>
                    {this.props.children}
                </TransitionChild>}
            </ReactTransitionGroup>
        )
    }
}

class TransitionChild extends Component {
    componentWillAppear(callback) {
        console.log('componentWillAppear');
        this.componentFadeIn(callback)
    }
    componentDidAppear(){
        console.log('componentDidAppear');
    }
    componentWillEnter(callback) {
        console.log('componentWillEnter');
        this.componentFadeIn(callback)
    }
    componentDidEnter() {
        console.log('componentDidEnter');
    }
    componentFadeIn(callback) {
        Object.assign(this.page.style, this.props.initialStyle)
        Object.keys(this.props.initialStyle).forEach(property => window.getComputedStyle(this.page)[property])
        this.page.style.transition = this.props.transition
        Object.assign(this.page.style, this.props.finalStyle)
        let transitionsRemaining = this.props.transition.split(',').length
        this.page.addEventListener("transitionend", (event) => {
            transitionsRemaining--
            if (transitionsRemaining) return
            callback()
        }, false)
    }
    componentWillLeave(callback) {
        console.log('componentWillLeave');
        Object.assign(this.page.style, this.props.leaveStyle)
        let transitionsRemaining = this.props.transition.split(',').length
        this.page.addEventListener("transitionend", (event) => {
            transitionsRemaining--
            if (transitionsRemaining) return
            callback()
            this.props.childDidLeave()
        }, false)
    }
    componentDidLeave() {
        console.log('componentDidLeave');
    }
    render() {
        return <div ref={(ref) => this.page = ref}>
            {this.props.children}
        </div>
    }
}