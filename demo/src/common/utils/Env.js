'use strict'

import {
  AWS_S3_BASE, S3_DEV
} from 'constants'

export default function Env(){
  return (process.env.NODE_ENV === 'development') ? {
      front: 'http://localhost:5000/',
      api: 'http://localhost:8000/',
      assets: 'http://localhost:5000/'
    } : {
      front: 'https://tellnspread-front.herokuapp.com/',
      api: 'https://tellnspread-api.herokuapp.com/',
      assets: AWS_S3_BASE + S3_DEV
    }
}