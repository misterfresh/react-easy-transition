'use strict'
import 'jsdom-global/register'
import chai from 'chai'
import chaiImmutable from 'chai-immutable'
import chaiEnzyme from 'chai-enzyme'

chai.use(chaiImmutable)
chai.use(chaiEnzyme())