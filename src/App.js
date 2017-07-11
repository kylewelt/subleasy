import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom'
import AuthAdapter from './AuthAdapter'

import NavBarContainer from './containers/NavBarContainer'
import HomeContainer from './containers/HomeContainer'
import SubletsContainer from './containers/SubletsContainer'
import UserFormsContainer from './containers/UserFormsContainer'

class App extends Component {
  state = {
    auth: {
      isLoggedIn: false,
      user: {}
    },
    sublets: []
  }

  componentWillMount = () => {
    this.getSublets()
  }

  logIn = (logInParams) => {
    AuthAdapter.logIn(logInParams)
      .then(user => {
        if (!user.error) {
          localStorage.setItem('jwt', user.jwt)
          this.setState({
            auth: {
              isLoggedIn: true,
              user: {
                user
              }
            }
          })
        }
      })
  }

  logOut = () => {
    localStorage.removeItem('jwt')
    this.setState({
      auth: {
        isLoggedIn: false,
        user: {}
      }
    })
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
          <Route path='/' render={() => <NavBarContainer isLoggedIn={this.state.auth.isLoggedIn} /> } />
          <Route exact path='/' render={() => <HomeContainer {...this.state} /> } />
          <Route exact path='/sublets' render={() => {
            return this.state.auth.isLoggedIn ? <SubletsContainer {...this.state} /> : <Redirect to='/' />
          }} />
          <Route exact path='/login' render={() => {
            return this.state.auth.isLoggedIn ? <Redirect to='/' /> : <UserFormsContainer logIn={this.logIn}/>
          }} />
        </div>
      </Router>
    )
  }
}

export default App
