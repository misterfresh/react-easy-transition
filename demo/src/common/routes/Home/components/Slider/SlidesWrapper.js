'use strict'

import React, {PropTypes, Component} from 'react'
import {StyleSheet, css} from 'aphrodite/no-important'
import EasyTransition from 'react-easy-transition'

import Env from 'utils/Env'
import Slide from './Slide'

let SlidesWrapper = ({
  activeSlideId,
  slide, slides,
  transition
}) =>
  <div
    className={css(styles.slides)}
  >

    {slides.toIndexedSeq().map((element, index) => <img src={Env().assets + slide.get('image')} style={{display: 'none'}} key={"hidden-image-" + index} />) }

    <EasyTransition
      {...transition}
    >
      <Slide
        image={slide.get('image')}
        caption={slide.get('caption')}
      />
    </EasyTransition>
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
