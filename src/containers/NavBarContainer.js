import React from 'react'
import { NavLink } from 'react-router-dom'
import { Container, Menu } from 'semantic-ui-react'

class NavBarContainer extends React.Component {
  render () {
    return (
      <Menu>
        <Container>
          <Menu.Item header>SublEasy</Menu.Item>
          <Menu.Item>
            <NavLink exact to='/' activeStyle={{color: 'red'}}>Home</NavLink>
          </Menu.Item>
          <Menu.Item>
            <NavLink exact to='/sublets' activeStyle={{color: 'red'}}>Sublets</NavLink>
          </Menu.Item>
          <Menu.Menu position='right'>
            <Menu.Item>
              {!this.props.isLoggedIn ? <NavLink exact to='/login' activeStyle={{color: 'red'}}>Log In</NavLink> : <a >Log Out</a>}
            </Menu.Item>
          </Menu.Menu>
        </Container>
      </Menu>
    )
  }
}

export default NavBarContainer
