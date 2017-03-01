'use strict'
import React, {PropTypes, Component} from 'react'
import {StyleSheet, css} from 'aphrodite/no-important'

import MainLink from './MainLink'

let MainMenu = ({
  mainLinks, path
}) =>
  <ul className={css(styles.mainMenu)}>
    {mainLinks.toIndexedSeq().map( (mainMenuLink, index) => <li
      className={css(styles.mainItem)}
      key={index}
    >
      <MainLink
        link={mainMenuLink}
        active={isLinkActive(mainMenuLink, path)}
      />
    </li>)}

  </ul>

export default MainMenu

let styles = StyleSheet.create({
  mainMenu: {
    position: 'static',
    margin: '7.5px -15px',
    paddingLeft: 0,
    listStyle: 'none',
    float: 'left',
    marginRight: -15,
    marginLeft: 0,
    marginTop: 0,
    marginBottom: 0,
    top: 2
  },
  mainItem: {
    position: 'relative',
    display: 'block',
    color: '#555',
    float: 'left'
  }
})

let isLinkActive = (mainMenuLink, path) => {
  if(mainMenuLink.get('href') === '/'){
    return ((!path) || path === '/')
  } else {
    return (mainMenuLink.get('href') === path) || (`/${mainMenuLink.get('href')}` === path)
  }
}