'use strict'

import { combineReducers } from 'redux-immutable'

import route from './route'
import display from './display'
import home from 'routes/Home/reducer'

const rootReducer = combineReducers({
  display,
  home,
  route
})

export default rootReducer