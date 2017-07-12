import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom'

import AuthAdapter from './adapters/AuthAdapter'
import SubletsAdapter from './adapters/SubletsAdapter'

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
    this.checkAuth()
    this.getSublets()
  }

  componentWillUpdate = (nextProps, nextState) => {
    this.checkAuth()
  }

  checkAuth = () => {
    if (localStorage.getItem('jwt')) {
      AuthAdapter.currentUser()
        .then(user => !user.error ? this.setUser(user) : this.logOut())
    } else {
      this.logOut()
    }
  }

  logIn = (params) => {
    AuthAdapter.logIn(params)
      .then(user => {
        if (!user.error) {
          localStorage.setItem('jwt', user.jwt)
          this.setUser(user)
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

  setUser = (user) => {
    this.setState({
      auth: {
        isLoggedIn: true,
        user: user
      }
    })
  }

  getSublets = () => {
    SubletsAdapter.getSublets()
      .then(json => this.setSublets(json))
  }

  setSublets = (data) => {
    this.setState({
      sublets: data
    })
  }

  render = () => {
    return (
      <Router>
        <div>
          <Route path='/' render={() => <NavBarContainer isLoggedIn={this.state.auth.isLoggedIn} /> } />
          <Route exact path='/' render={() => <HomeContainer {...this.state} /> } />
          <Route exact path='/sublets' render={() => {
            return this.state.auth.isLoggedIn ? <SubletsContainer {...this.state} /> : <Redirect to='/' />
          }} />
          <Route exact path='/login' render={() => {
            return !this.state.auth.isLoggedIn ? <UserFormsContainer logIn={this.logIn}/> : <Redirect to='/' />
          }} />
        </div>
      </Router>
    )
  }
}

export default App
