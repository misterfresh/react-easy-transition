'use strict'

import React, {PropTypes, Component} from 'react'
import {StyleSheet, css} from 'aphrodite/no-important'

import Slide from './Slide'

let SlidesWrapper = ({
  activeSlideId,
  slides
}) =>
  <div
    className={css(styles.slides)}
    role="listbox"
  >
    {slides.toIndexedSeq().map((slide, index) => <Slide
      key={index}
      image={slide.get('image')}
      caption={slide.get('caption')}
      active={activeSlideId === index}
    />)}

  </div>

export default SlidesWrapper

let styles = StyleSheet.create({
  slides: {
    height: '100%',
    position: 'relative',
    width: '100%',
    overflow: 'hidden'
  }
})