'use strict'

import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from 'containers/App'
import Home from './Home/Home'

import About from './About/About'
import Contact from './Contact/Contact'

import NoMatch from 'containers/NoMatch'

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />

    <Route path="about" component={About} />
    <Route path="contact" component={Contact} />

    <Route path="*" component={NoMatch} />
  </Route>
)