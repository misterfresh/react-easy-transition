'use strict'

import React, {PropTypes, Component} from 'react'
import {StyleSheet, css} from 'aphrodite/no-important'

import Env from 'utils/Env'

import MainTitle from 'components/Text/MainTitle'
import Paragraph from 'components/Text/Paragraph'

let Slide = ({
  image,
  caption,
  active
}) =>
  <div className={css(styles.slide, active && styles.active)}>
    <img src={Env().assets + image} className={css(styles.image)}/>
    <div className={css(styles.caption)}>
      {caption.get('title') && <MainTitle title={caption.get('title')}/>}
      {caption.get('description') && <Paragraph>
        {caption.get('description')}
      </Paragraph>}
    </div>
  </div>

export default Slide

let styles = StyleSheet.create({
  slide: {
    opacity: 0,
    pointerEvents: 'none',
    overflow: 'hidden',
    width: '100%',
    maxHeight: 550,
    height: 'auto',
    transition: 'opacity .6s ease-in-out',
    backfaceVisibility: 'hidden',
    perspective: '1000px',
    position: 'relative',
    display: 'none',
  },
  active: {
    display: 'block',
    pointerEvents: 'auto',
    opacity: 1,
    left: 0
  },
  image: {
    width: '100%',
    height: 'auto',
    lineHeight: 1,
    display: 'block',
    maxWidth: '100%',
  },
  caption: {
    position: 'absolute',
    right: '15%',
    bottom: 20,
    left: '15%',
    zIndex: 10,
    paddingTop: 20,
    paddingBottom: 20,
    color: '#fff',
    textAlign: 'center',
    textShadow: '0 1px 2px rgba(0,0,0,.6)',
    '@media screen and (min-width: 768px)': {
      right: '20%',
      left: '20%',
      paddingBottom: 30
    }
  }
})