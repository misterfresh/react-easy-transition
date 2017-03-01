'use strict'

import React, {PropTypes, Component} from 'react'
import {StyleSheet, css} from 'aphrodite/no-important'
import {Link} from 'react-router'

let MainLink = ({
  link, active
}) =>
  <Link
    to={link.get('href')}
    className={css(
      styles.mainlink,
      active ? styles.active : styles.base
    )}
    style={{
      textDecoration: 'none',
      textTransform: 'none'
    }}
  >
    {link.get('title')}
  </Link>

export default MainLink

let styles = StyleSheet.create({
  mainlink: {
    letterSpacing: '1px',
    paddingTop: 10,
    paddingBottom: 10,
    position: 'relative',
    display: 'inline-block',
    outline: '0',
    background: 'none',
    padding: '12px 12px',
    lineHeight: '30px',
    fontSize: '1.1em',
    fontWeight: '400'
  },
  base: {
    color: '#fff',
    ':visited': {
      color: '#fff'
    },
    ':active': {
      color: '#fff'
    },
    ':hover': {
      color: '#3498db'
    }
  },
  active: {
    color: '#3498db',
    ':visited': {
      color: '#3498db'
    },
    ':active': {
      color: '#3498db'
    },
    ':hover': {
      color: '#5fa8d8'
    }
  }
})