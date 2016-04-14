import React from 'react'
import { Link, browserHistory } from 'react-router'
import EasyTransition from 'react-easy-transition'

export default function App(props) {
  return (
    <div>
      <header>
        Links:
        {' '}
        <Link to="/">Home</Link>
        {' '}
        <Link to="/foo">Foo</Link>
        {' '}
        <Link to="/bar">Bar</Link>
      </header>
      <div>
        <button onClick={() => browserHistory.push('/foo')}>Go to /foo</button>
      </div>
      <div style={{ marginTop: '1.5em' }}>
          <EasyTransition
              path={props.location.pathname}
              initialStyle={{ opacity: 0, transform: 'scaleY(0.5)' }}
              transition="opacity 0.8s ease-in, transform 0.3s ease-in-out 0.3s"
              finalStyle={{ opacity: 1, transform: 'scaleY(1.2)' }}
          >
          {props.children}
          </EasyTransition>
      </div>
    </div>
  )
}
