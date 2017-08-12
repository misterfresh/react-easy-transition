'use strict'

import React, {Component, PropTypes} from 'react'
import Helmet from 'react-helmet'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

import globalData from 'utils/globalData'

import Slider from './components/Slider/Slider'

import * as HomeActions from './actions'

class Home extends Component {

  static readyOnActions(dispatch) {
    return Promise.all([
    ]);
  }

  constructor(props){
    super(props)
  }

  componentDidMount() {
    let { dispatch, homeActions} = this.props
    Home.readyOnActions(dispatch)
    if(('development' !== process.env.NODE_ENV) && !globalData.get('slideshowBrowsing')){
      globalData.set('slideshowBrowsing', window.setInterval(()=>{
        homeActions.browseSlide('next')
      }, 7000))
    }
  }

  render(){
    let {
      slides,
      activeSlideId,
      homeActions
    } = this.props

    return <div>
      <Helmet
        title={'Home'}
        meta={[ {'name': 'description', 'content': "React Easy Transition Demo"} ]}
      />

      <Slider
        slides={slides}
        browseSlide={homeActions.browseSlide}
        setActiveSlide={homeActions.setActiveSlide}
        activeSlideId={activeSlideId}
        transition={{
          path: ('slide-' + activeSlideId),
          initialStyle: { opacity: 0 },
          transition: "opacity 0.5s ease-in-out",
          finalStyle: { opacity: 1}
        }}
      />
    </div>
  }
}

function mapStateToProps(state) {
  return {
    activeSlideId: state.getIn(['home', 'activeSlideId']),
    slides: state.getIn(['home', 'slides'])
  }
}

function mapDispatchToProps(dispatch){
  return {
    homeActions: bindActionCreators(HomeActions, dispatch),
    dispatch
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)