'use strict'

import React, {PropTypes, Component} from 'react'
import {StyleSheet, css} from 'aphrodite/no-important'

let Row = ({classes = [], style, children}) =>
  <div
    className={
      css(styles.row,
      ...classes
      )}
    style={Object.assign({},style)}
  >
    {children}
  </div>

export default Row

let styles = StyleSheet.create({
  row:{
    marginRight: -15,
    marginLeft: -15
  }
})