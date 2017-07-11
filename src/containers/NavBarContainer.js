import React from 'react'
import { NavLink } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'

class NavBarContainer extends React.Component {
  render() {
    return(
      <Menu>
        <Menu.Item>
          <NavLink exact to='/' activeStyle={{color: 'red'}}>Home</NavLink>
        </Menu.Item>
        <Menu.Item>
          <NavLink exact to='/sublets' activeStyle={{color: 'red'}}>Sublets</NavLink>
        </Menu.Item>
        <Menu.Item>
          <NavLink exact to='/login' activeStyle={{color: 'red'}}>Login</NavLink>
        </Menu.Item>
        <Menu.Item>
          <NavLink exact to='/signup' activeStyle={{color: 'red'}}>Sign Up</NavLink>
        </Menu.Item>
      </Menu>
    )
  }
}

export default NavBarContainer
