'use strict'

import React, {PropTypes, Component} from 'react'
import {StyleSheet, css} from 'aphrodite/no-important'

let Control = ({
  direction,
  browseSlide
}) =>
  <a
    className={css(styles.control, styles[direction])}
    role="button"
    onClick={()=>{browseSlide(direction)}}
  >
    <span
      className={"glyphicon glyphicon-chevron-" + ((direction === 'previous') ? 'left' : 'right') + ' ' + css(styles.button, styles['button' + direction])}
      aria-hidden="true"
    ></span>
    <span className="sr-only">{direction === 'previous' ? "Previous" : "Next"}</span>
  </a>

export default Control

let styles = StyleSheet.create({
  control: {
    zIndex: 2,
    backgroundRepeat: 'repeat-x',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    width: '15%',
    fontSize: '20px',
    color: '#fff',
    textAlign: 'center',
    textShadow: '0 1px 2px rgba(0,0,0,.6)',
    backgroundColor: 'rgba(0,0,0,0)',
    opacity: '.5',
    textDecoration: 'none',
    outline: 0,
    cursor: 'pointer',
    ':hover': {
      color: '#fff',
      textDecoration: 'none',
      opacity: '0.9'
    }
  },
  previous: {
    backgroundImage: 'linear-gradient(to right,rgba(0,0,0,.5) 0,rgba(0,0,0,.0001) 100%)'
  },
  next: {
    right: 0,
    left: 'auto',
    backgroundImage: 'linear-gradient(to right,rgba(0,0,0,.0001) 0,rgba(0,0,0,.5) 100%)'
  },
  button: {
    position: 'absolute',
    top: '50%',
    zIndex: 5,
    display: 'inline-block',
    marginTop: -10,
    '@media screen and (min-width: 768px)': {
      width: 30,
      height: 3,
      marginTop: -10,
      fontSize: '30px'
    }
  },
  buttonnext: {
    right: '50%',
    marginRight: -10,
    '@media screen and (min-width: 768px)': {
      marginRight: -10
    }
  },
  buttonprevious: {
    left: '50%',
    marginLeft: -10,
    '@media screen and (min-width: 768px)': {
      marginLeft: -10
    }
  }
})