'use strict'
import React, {PropTypes, Component} from 'react'
import {StyleSheet, css} from 'aphrodite/no-important'
import Helmet from 'react-helmet'

import EasyTransition from 'react-easy-transition'

import Navbar from './Navbar/Navbar'
import Clear from 'components/Grid/Clear'

let Page = ({
  links, path,
  children }) =>
  <div className={css(styles.page)}>
    <Helmet title={"React Easy Transition"} titleTemplate={'%s - ' + "React"}/>
    <div
      className={css(styles.wrapper)}
    >
      <Navbar
        mainLinks={links.get('mainLinks')}
        path={path}
      />

      <div style={{marginTop: 60}}>
        <EasyTransition
          path={path}
          initialStyle={{ opacity: 0 }}
          transition="opacity 0.5s ease-in-out"
          finalStyle={{ opacity: 1}}
        >
          {children}
        </EasyTransition>
      </div>

    </div>
    <Clear/>

  </div>

export default Page

let styles = StyleSheet.create({
  page: {
    color: '#555',
    fontSize: '13px',
    lineHeight: '1.6',
    display: 'block',
    boxSizing: 'border-box',
    borderRadius: '0',
    fontFamily: 'Arial, Helvetica, sans-serif',
    background: '#fff'
  },
  wrapper: {
    width: 'auto',
    overflow: 'hidden',
    paddingTop: 0,
    paddingBottom: 0,
    paddingRight: 0,
    paddingLeft: 0
  }
})