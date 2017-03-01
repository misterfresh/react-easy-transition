'use strict'
import React, {PropTypes, Component} from 'react'
import {StyleSheet, css} from 'aphrodite/no-important'

let MainTitle = ({
  title,
  classes = []
}) =>
  <h1
    className={css(
      styles.mainTitle,
      ...classes
    )}
  >
    {title}
  </h1>

export default MainTitle

let styles = StyleSheet.create({
  mainTitle: {
    textAlign: 'left',
    textTransform: 'none',
    fontSize: '28px',
    lineHeight: '35px',
    marginTop: 5,
    marginBottom: 10,
    fontFamily: 'Arial, Helvetica, sans-serif',
    color: '#555',
    textShadow: 'none',
    fontWeight: 'normal'
  }
})
