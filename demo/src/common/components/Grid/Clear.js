'use strict'
import React, {PropTypes, Component} from 'react'
import {StyleSheet, css} from 'aphrodite/no-important'

let Clear = () =>
  <div
    className={
      css(styles.clear)
    }
  ></div>

export default Clear

let styles = StyleSheet.create({
  clear:{
    clear: 'both'
  }
})
