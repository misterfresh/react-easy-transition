'use strict'

import React, {Component, PropTypes} from 'react'
import Helmet from 'react-helmet'

import Headline from 'components/Text/Headline'

import Description from 'components/Grid/Description'
import Row from 'components/Grid/Row'
import Column from 'components/Grid/Column'
import Container from 'components/Grid/Container'

class About extends Component {

  render(){

    return <div>
      <Helmet
        title={'About'}
        meta={[ {'name': 'description', 'content': "About React Easy Transition"} ]}
      />

      <Description style={{paddingBottom: 40, minHeight: 750}}>
        <Container style={{display: 'table'}}>
          <Headline title='About us'/>

          <Row>
            <Column>
              <p>React Easy Transition makes it easy to create transition effects between different pages of your application. </p>
              <p></p>
            </Column>
          </Row>
        </Container>
      </Description>

    </div>
  }
}

export default About