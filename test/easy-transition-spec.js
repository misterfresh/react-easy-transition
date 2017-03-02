'use strict'
import React from 'react'
import sinon from 'sinon'
import { mount, shallow } from 'enzyme'
import {expect} from 'chai'

import EasyTransition from './../src/ReactEasyTransition'

let transitionOne = {
  path: 'path',
  initialStyle: { opacity: 0 },
  transition: "opacity 0.5s ease-in-out",
  finalStyle: { opacity: 1}
}

describe('<EasyTransition/>', ()=>{
  it('should exist', ()=>{
    expect(EasyTransition).to.not.be.undefined
  })

  it('renders children when passed in', () => {
    const wrapper = shallow(<EasyTransition
      {...transitionOne}
    >
      <strong>Testing</strong>
    </EasyTransition>)
    expect(wrapper.contains(<strong>Testing</strong>)).to.equal(true)
  })

})