'use strict'

let objectValues = x =>
  Object.keys(x).reduce((y, z) =>
  y.push(x[z]) && y, [])

export default objectValues