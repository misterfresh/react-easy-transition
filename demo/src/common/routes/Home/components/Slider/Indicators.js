'use strict'

import React, {PropTypes, Component} from 'react'
import {StyleSheet, css} from 'aphrodite/no-important'

import Indicator from './Indicator'

let Indicators = ({
  slides, activeSlideId,
  setActiveSlide
}) =>
  <ol className={css(styles.indicators)}>
    {slides.toIndexedSeq().map((slide, index) =>
      <Indicator
        key={index}
        active={activeSlideId === index}
        setActiveSlide={setActiveSlide}
        slideId={index}
      />
    )}
  </ol>

export default Indicators

let styles = StyleSheet.create({
  indicators: {
    position: 'absolute',
    bottom: 10,
    left: '50%',
    zIndex: 15,
    width: '60%',
    paddingLeft: 0,
    marginLeft: '-30%',
    textAlign: 'center',
    listStyle: 'none'
  }
})