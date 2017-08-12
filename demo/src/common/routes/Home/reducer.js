'use strict'

import Immutable, {Map, fromJS} from 'immutable'

import {
  SET_ACTIVE_SLIDE,
  BROWSE_SLIDE
} from 'constants'

import slides from './data/slides.json'

const initialState = Immutable.fromJS({
  slides,
  activeSlideId: 0,
  updatedAt: Date.now()
})

export default function home(state = initialState, action) {

  switch(action.type){

    case SET_ACTIVE_SLIDE:
      if(action.updatedAt - state.get('updatedAt') < 2000 ){
        return state
      }

      return state.set('activeSlideId', parseInt(action.slideId))
        .set('updatedAt', action.updatedAt)

    case BROWSE_SLIDE:
      if(action.updatedAt - state.get('updatedAt') < 2000 ){
        return state
      }

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
        .set('updatedAt', action.updatedAt)

    default:
      return state

  }
}