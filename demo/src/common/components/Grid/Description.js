'use strict'

import React, {PropTypes, Component} from 'react'
import {StyleSheet, css} from 'aphrodite/no-important'

let Description = ({style, classes, children}) =>
  <div
    className={css(
      styles.description,
      classes
    )}
    style={Object.assign({},style)}
  >
    {children}
  </div>

export default Description

let styles = StyleSheet.create({
  description:{
    padding: '40px 0 30px',
    position: 'relative',
    background: '#f2f2f2',
    borderTop: '1px solid #eee'
  }
})