'use strict'
import Immutable, {fromJS, Map} from 'immutable'

import {
} from 'constants'

import * as Links from './links'

const initialState = fromJS({
  links: Links
})

export default function display(state = initialState, action) {
  switch (action.type) {
    default:
      return state
  }
}
