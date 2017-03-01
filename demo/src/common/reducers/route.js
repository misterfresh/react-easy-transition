'use strict'
import Immutable from 'immutable'
import { LOCATION_CHANGE } from 'react-router-redux'

import {
  INITIALIZE_ROUTE
} from 'constants'

const initialState = Immutable.fromJS(
  {
    locationBeforeTransitions: null
  }
)

export default function route(state = initialState, action) {
  switch (action.type) {
    case LOCATION_CHANGE:
      return state.merge({
        locationBeforeTransitions: action.payload
      })

    case INITIALIZE_ROUTE:
      return state.merge({
        locationBeforeTransitions: {
          "pathname": action.route,
          "action": "PUSH",
          "search": "",
          "hash": "",
          "state": null,
          "query": {},
          "$searchBase": {
            "search": "",
            "searchBase": ""
          }
        }
      })

    default:
      return state
  }
}