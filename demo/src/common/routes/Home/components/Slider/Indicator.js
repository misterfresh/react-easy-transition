'use strict'

import React, {PropTypes, Component} from 'react'
import {StyleSheet, css} from 'aphrodite/no-important'

let Indicator = ({
  active, slideId,
  setActiveSlide
}) =>
  <li
    className={css(styles.indicator, active && styles.active)}
    onClick={setActiveSlide}
    data-slideId={slideId}
  ></li>

export default Indicator

let styles = StyleSheet.create({
  active: {
    width: 17,
    height: 17,
    margin: 0,
    backgroundColor: '#fff',
    marginLeft: 10,
    ':hover':{
      backgroundColor: '#fff'
    }
  },
  indicator: {
    margin: 1,
    textIndent: '-999px',
    cursor: 'pointer',
    backgroundColor: 'rgba(0,0,0,0)',
    border: '1px solid #fff',
    borderRadius: '10px',
    display: 'inline-block',
    width: 15,
    height: 15,
    marginLeft: 10,
    ':hover': {
      backgroundColor: 'rgba(202, 203, 217, 0.4)'
    }
  }
})