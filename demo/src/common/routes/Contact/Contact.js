'use strict'

import React, {Component, PropTypes} from 'react'
import Helmet from 'react-helmet'

import Headline from 'components/Text/Headline'
import Description from 'components/Grid/Description'
import Row from 'components/Grid/Row'
import Column from 'components/Grid/Column'
import Container from 'components/Grid/Container'

class Contact extends Component {

  render(){

    return <div>
      <Helmet
        title={'Contact'}
        meta={[ {'name': 'description', 'content': "Contact Page"} ]}
      />

      <Description style={{paddingBottom: 40, minHeight: 750}}>
        <Container style={{display: 'table'}}>
          <Headline title='Contact us'/>

          <Row>
            <Column size='large'>
              There could be a contact form here.
            </Column>
          </Row>
        </Container>
      </Description>

    </div>
  }
}

export default Contact