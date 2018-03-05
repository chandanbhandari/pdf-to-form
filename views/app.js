'use strict'
import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, browserHistory } from 'react-router'

import Main from './components/main'

class App extends React.Component {
  render() {
    return (
      <div>
          <Main/>
      </div>
    )
  }
}

const router = (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
    </Route>
  </Router>
)

ReactDOM.render(router, document.querySelector('#root'))
