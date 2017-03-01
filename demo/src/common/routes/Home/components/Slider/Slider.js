'use strict'
import React, {PropTypes, Component} from 'react'
import {StyleSheet, css} from 'aphrodite/no-important'

import Indicators from './Indicators'
import Control from './Control'
import SlidesWrapper from './SlidesWrapper'

let Slider = ({
  slides, activeSlideId,
  browseSlide, setActiveSlide
}) =>
  <section id="intro" style={{display: 'block'}} className={css(styles.carousel)}>
    <Indicators
      slides={slides}
      activeSlideId={activeSlideId}
      setActiveSlide={setActiveSlide}
    />

    <SlidesWrapper
      slides={slides}
      activeSlideId={activeSlideId}
    />

    <Control
      key="previous"
      direction="previous"
      browseSlide={browseSlide}
    />
    <Control
      key="next"
      direction="next"
      browseSlide={browseSlide}
    />

  </section>

export default Slider

let styles = StyleSheet.create({
  carousel: {
    height: '100%',
    position: 'relative'
  }
})