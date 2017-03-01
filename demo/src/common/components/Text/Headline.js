'use strict'
import React, {PropTypes, Component} from 'react'
import {StyleSheet, css} from 'aphrodite/no-important'

import Row from 'components/Grid/Row'
import Column from 'components/Grid/Column'

let Headline = ({ title }) =>
  <Row>
    <Column>
      <div className={css(styles.headline)}>
        <h2 className={css(styles.title)}>
          {title}
        </h2>
      </div>
    </Column>
  </Row>

export default Headline

let styles = StyleSheet.create({
  headline: {
    display: 'block',
    margin: '0px 0 15px 0',
    borderBottom: '1px dotted #e4e9f0'
  },
  title: {
    color: '#555',
    borderBottom: '2px solid #3498db',
    fontSize: '18px',
    lineHeight: '24px',
    margin: '0 0 -2px 0',
    paddingBottom: 5,
    display: 'inline-block',
    fontFamily: 'Arial, Helvetica, sans-serif',
    textShadow: 'none',
    fontWeight: 'normal'
  }
})
