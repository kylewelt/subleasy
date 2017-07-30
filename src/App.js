import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom'
import AuthAdapter from './adapters/AuthAdapter'
import SubletsAdapter from './adapters/SubletsAdapter'
import NavBarContainer from './containers/NavBarContainer'
import HomeContainer from './containers/HomeContainer'
import SubletsRouter from './routers/SubletsRouter'
import UserFormsContainer from './containers/UserFormsContainer'
import UserContainer from './containers/UserContainer'
import Footer from './components/Footer'

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
          <div style={{'padding-bottom': 75}}>
            <Route path='/' render={() => <NavBarContainer {...this.state} logOut={this.logOut} /> } />
            <Route exact path='/' render={() => <HomeContainer {...this.state} /> } />
            <Route path='/sublets' render={() => {
              return this.state.auth.isLoggedIn ? <SubletsRouter {...this.state} tellAppToFetch={this.getSublets} /> : <Redirect to='/' />
            }} />
            <Route exact path='/login' render={() => {
              return !this.state.auth.isLoggedIn ? <UserFormsContainer logIn={this.logIn}/> : <Redirect to='/' />
            }} />
            <Route exact path='/user' render={() => {
              return this.state.auth.isLoggedIn ? <UserContainer user={this.state.auth.user} /> : <Redirect to='/' />
            }} />
          </div>
          <Footer />
        </div>
      </Router>
    )
  }
}

export default App
