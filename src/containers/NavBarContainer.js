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
        <Menu.Menu position='right'>
          <Menu.Item>
            <NavLink exact to='/login' activeStyle={{color: 'red'}}>Log In</NavLink>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    )
  }
}

export default NavBarContainer
