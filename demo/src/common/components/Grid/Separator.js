'use strict'
import React, {PropTypes, Component} from 'react'
import {StyleSheet, css} from 'aphrodite/no-important'

let Separator = ({
  style, full = false
}) =>
  <hr
    className={
      css(
        styles.separator,
        full && styles.full
      )
    }
    style={Object.assign({}, style)}
  />

export default Separator

let styles = StyleSheet.create({
  separator:{
    margin: '10px 0',
    border: '0',
    borderTop: '1px solid #eee',
    boxSizing: 'content-box'
  },
  full: {
    margin: 0,
    height: 20,
    background: '#f2f2f2',
    width: '100%'
  }
})
