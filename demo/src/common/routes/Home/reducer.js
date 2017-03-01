'use strict'

import Immutable, {Map, fromJS} from 'immutable'

import {
  SET_ACTIVE_SLIDE,
  BROWSE_SLIDE
} from 'constants'

import slides from './data/slides.json'

const initialState = Immutable.fromJS({
  slides,
  activeSlideId: 0
})

export default function home(state = initialState, action) {

  switch(action.type){

    case SET_ACTIVE_SLIDE:
      return state.set('activeSlideId', parseInt(action.slideId))

    case BROWSE_SLIDE:
      let direction = action.direction
      let currentId = state.get('activeSlideId')
      let slidesCount = state.get('slides').size
      let finalId
      if(direction === 'previous'){
        if(currentId === 0){
          finalId = slidesCount -1
        } else {
          finalId = currentId -1
        }
      } else {
        if(currentId === (slidesCount -1)){
          finalId = 0
        } else {
          finalId = currentId +1
        }
      }
      return state.set('activeSlideId', finalId)

    default:
      return state

  }
}