'use strict'

import {
  SET_ACTIVE_SLIDE,
  BROWSE_SLIDE
} from 'constants'

export function browseSlide(direction){
  return {
    type: BROWSE_SLIDE,
    direction
  }
}

export function setActiveSlide(event){
  return {
    type: SET_ACTIVE_SLIDE,
    slideId: event.target.getAttribute('data-slideId')
  }
}