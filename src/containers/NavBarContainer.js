import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import { Container, Menu } from 'semantic-ui-react'

class NavBarContainer extends React.Component {

  renderSublets = () => {
    if (this.props.isLoggedIn) {
      return (
        <Menu.Item>
          <NavLink exact to='/sublets' activeStyle={{color: 'red'}}>Sublets</NavLink>
        </Menu.Item>
      )
    }
  }

  renderLogIn = () => {
    if (!this.props.isLoggedIn) {
      return <NavLink exact to='/login' activeStyle={{color: 'red'}}>Log In</NavLink>
    } else {
      return <Link to='/' onClick={this.props.logOut}>Log Out</Link>
    }
  }

  render = () => {
    return (
      <Menu>
        <Container>
          <Menu.Item header>SublEasy</Menu.Item>
          <Menu.Item>
            <NavLink exact to='/' activeStyle={{color: 'red'}}>Home</NavLink>
          </Menu.Item>
          {this.renderSublets()}
          <Menu.Menu position='right'>
            <Menu.Item>
              {this.renderLogIn()}
            </Menu.Item>
          </Menu.Menu>
        </Container>
      </Menu>
    )
  }
}

export default NavBarContainer
