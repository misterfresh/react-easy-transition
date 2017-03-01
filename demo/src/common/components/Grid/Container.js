'use strict'

import React, {PropTypes, Component} from 'react'
import {StyleSheet, css} from 'aphrodite/no-important'

let Container = ({style, classes = [], children}) =>
  <div
    className={
      css(
        styles.container,
        ...classes
      )
    }
    style={Object.assign({},style)}
  >
    {children}
  </div>

export default Container

let styles = StyleSheet.create({
  container:{
    paddingRight: 15,
    paddingLeft: 15,
    marginRight: 'auto',
    marginLeft: 'auto',
    '@media (min-width: 768px)': {
      width: 750
    },
    '@media (min-width: 992px)': {
      width: 970
    },
    '@media (min-width: 1200px)': {
      width: 1170
    },
    ':before': {
      display: 'table',
      content: '" "'
    }
  }
})