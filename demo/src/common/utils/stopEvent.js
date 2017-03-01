'use strict'

export default function stopEvent( event ){
  event.preventDefault()
  event.stopPropagation()
  return false
}