'use strict'

import React, {PropTypes, Component} from 'react'
import {StyleSheet, css} from 'aphrodite/no-important'

let Column = ({style, classes = [], size = 'full', children}) =>
  <div
    className={ css(
      styles.column,
      ...classes,
      styles[size]
    ) }
    style={Object.assign({},style)}
  >
    {children}
  </div>

export default Column

let styles = StyleSheet.create({
  column:{
    position: 'relative',
    minHeight: 1,
    paddingRight: 15,
    paddingLeft: 15
  },
  full: {
    '@media (min-width: 992px)': {
      width: '100%'
    }
  },
  large: {
    '@media (min-width: 992px)': {
      width: '75%',
      float: 'left'
    }
  },
  medium: {
    '@media (min-width: 992px)': {
      width: '50%',
      float: 'left'
    }
  },
  mediumNoFloat: {
    '@media (min-width: 992px)': {
      width: '50%'
    }
  },
  small: {
    '@media (min-width: 992px)': {
      width: '25%',
      float: 'left'
    }
  },
  third: {
    '@media (min-width: 992px)': {
      width: '33%',
      float: 'left'
    }
  },
  twoThirds: {
    '@media (min-width: 992px)': {
      width: '66.66666667%',
      float: 'left'
    }
  }
})