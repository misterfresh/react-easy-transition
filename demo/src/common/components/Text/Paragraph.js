'use strict'
import React, {PropTypes, Component} from 'react'
import {StyleSheet, css} from 'aphrodite/no-important'

let Paragraph = ({
  style, children,
  classes = []
}) =>
  <p
    className={css(
      styles.paragraph,
      ...classes
    )}
    style={style}
  >
    {children}
  </p>

export default Paragraph

let styles = StyleSheet.create({
  paragraph: {
    textAlign: 'justify',
    lineHeight: '1.3',
    padding: 0,
    margin: '0 0 10px',
    color: '#555'
  }
})