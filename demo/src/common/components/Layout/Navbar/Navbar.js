'use strict'
import React, {PropTypes, Component} from 'react'
import {StyleSheet, css} from 'aphrodite/no-important'

import Container from 'components/Grid/Container'
import MainMenu from './MainMenu/MainMenu'

let Navbar = ({
  mainLinks, path
}) =>
  <div className={css(styles.header)}>
    <nav
      className={css(styles.navbar)}
      role="navigation"
    >

      <Container classes={[styles.container]}>
          <MainMenu
            mainLinks={mainLinks}
            path={path}
          />
      </Container>

    </nav>
  </div>


export default Navbar

let styles = StyleSheet.create({
  header: {
    boxShadow: 'none',
    borderBottom: 'none',
    top: 0,
    left: 0,
    width: '100%',
    height: 'auto',
    zIndex: 999,
    position: 'fixed'
  },
  navbar: {
    display: 'block',
    right: 0,
    left: 0,
    zIndex: 1030,
    position: 'relative',
    top: 0,

    border: 'none',
    marginBottom: 0,
    background: '#212121',
    minHeight: 60,
    borderRadius: 0
  },
  container: {
    position: 'relative'
  }
})