import React, { Component } from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import NavBarContainer from './containers/NavBarContainer'
import HomeContainer from './containers/HomeContainer'
import SubletsContainer from './containers/SubletsContainer'
import UsersContainer from './containers/UsersContainer'
import UserFormsContainer from './containers/UserFormsContainer'

class App extends Component {
  state = {
    sublets: []
  }

  componentWillMount = () => {
    this.getSublets()
  }

  setSublets = (data) => {
    this.setState({
      sublets: data
    })
  }

  getSublets = () => {
    fetch('http://localhost:3000/api/v1/sublets')
      .then(resp => resp.json())
      .then(json => this.setSublets(json))
  }

  render () {
    return (
      <Router>
        <div>
          <Route path='/' component={NavBarContainer} />
          <Route exact path='/' render={() => <HomeContainer {...this.state} />} />
          <Route exact path='/sublets' component={SubletsContainer} />
          <Route exact path='/users' component={UsersContainer} />
          <Route exact path='/login' component={UserFormsContainer} />
        </div>
      </Router>
    )
  }
}

export default App
