import React, { Component } from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import NavBarContainer from './containers/NavBarContainer'
import HomeContainer from './containers/HomeContainer'
import SubletsContainer from './containers/SubletsContainer'
import UsersContainer from './containers/UsersContainer'


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route path='/' component={NavBarContainer} />
          <Route exact path='/' component={HomeContainer} />
          <Route exact path='/sublets' component={SubletsContainer} />
          <Route exact path='/users' component={UsersContainer} />
          <Route exact path='/signup' />
        </div>
      </Router>
    )
  }
}

export default App;
