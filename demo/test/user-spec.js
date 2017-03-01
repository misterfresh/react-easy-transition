'use strict'
import {expect} from 'chai'

import {isEmailValid, isPasswordValid} from 'reducers/user'

import {updateEmailPasswordRegisterForm} from 'routes/Register/actions'

describe('updateRegisterForm', ()=>{
  it('should exist', ()=>{
    expect(updateEmailPasswordRegisterForm).to.not.be.undefined
  })


})

describe('isEmailValid', ()=>{
  it('should exist', ()=>{
    expect(isEmailValid).to.not.be.undefined
  })

  it('should reject undefined emails', ()=>{
    let input = undefined
    let expected = false
    let actual = isEmailValid(input)
    expect(actual).to.eql(expected)
  })

  it('should reject emails without the @ character', ()=>{
    let input = "aaaaaa.aaa2E.com"
    let expected = false
    let actual = isEmailValid(input)
    expect(actual).to.eql(expected)
  })

  it('should invalidate emails without the . character', ()=>{
    let input = "aaaaaa@aucom"
    let expected = false
    let actual = isEmailValid(input)
    expect(actual).to.eql(expected)
  })

  it('should invalidate emails shorter than 7 characters', ()=>{
    let input = "b@b.fr"
    let expected = false
    let actual = isEmailValid(input)
    expect(actual).to.eql(expected)
  })

  it('should accept valid emails', ()=>{
    let input = "bob@bob.fr"
    let expected = true
    let actual = isEmailValid(input)
    expect(actual).to.eql(expected)
  })

})

describe('isPasswordValid', ()=>{
  it('should exist', ()=>{
    expect(isPasswordValid).to.not.be.undefined
  })

  it('should reject undefined passwords', ()=>{
    let input = undefined
    let expected = false
    let actual = isPasswordValid(input)
    expect(actual).to.eql(expected)
  })

  it('should invalidate passwords shorter than 7 characters', ()=>{
    let input = "123456"
    let expected = false
    let actual = isPasswordValid(input)
    expect(actual).to.eql(expected)
  })

  it('should accept valid passwords', ()=>{
    let input = "12345678"
    let expected = true
    let actual = isPasswordValid(input)
    expect(actual).to.eql(expected)
  })

})