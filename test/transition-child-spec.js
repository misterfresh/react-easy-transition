'use strict'
import React from 'react'
import sinon from 'sinon'
import { mount, shallow } from 'enzyme'
import {expect} from 'chai'

import EasyTransition from './../src/ReactEasyTransition'
import TransitionChild from './../src/TransitionChild'

let transitionOne = {
  path: 'path',
  initialStyle: { opacity: 0 },
  transition: "opacity 0.5s ease-in-out",
  finalStyle: { opacity: 1}
}

describe('<TransitionChild/>', ()=>{
  it('should exist', ()=>{
    expect(TransitionChild).to.not.be.undefined
  })

  it('calls componentFadeIn', () => {
    sinon.spy(TransitionChild.prototype, 'componentFadeIn')
    const wrapper = mount(<EasyTransition
      {...transitionOne}
    >
      <strong>Testing</strong>
    </EasyTransition>)
    expect(TransitionChild.prototype.componentFadeIn).to.have.property('callCount', 1)
    TransitionChild.prototype.componentFadeIn.restore()
  })

})