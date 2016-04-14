import React from 'react'
import { Route, IndexRoute, Link } from 'react-router'
import EasyTransition from '../../src/easy-transition'

const App = (props) => (
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
      <EasyTransition
          path={props.location.pathname}
          initialStyle={{opacity: 0, transform: 'scaleY(0.5)'}}
          transition="opacity 0.8s ease-in, transform 0.3s ease-in-out 0.3s"
          finalStyle={{opacity: 1, transform: 'scaleY(1.2)'}}
      >
          {props.children}
      </EasyTransition>
  </div>
)

const Home = () => (<div>Home!</div>)
const Foo = () => (<div>Foo!</div>)
const Bar = () => (<div>Bar!</div>)

const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Home}/>
    <Route path="foo" component={Foo}/>
    <Route path="bar" component={Bar}/>
  </Route>
)

export default routes
