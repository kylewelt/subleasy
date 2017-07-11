import React from 'react'
import { NavLink } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'

class NavBar extends React.Component {
  render() {
    return(
      <Menu>
        <Menu.Item>
          <NavLink exact to='/' activeStyle={{color: 'red'}}>Home</NavLink>
        </Menu.Item>
        <Menu.Item>
          <NavLink exact to='/sublets' activeStyle={{color: 'red'}}>Sublets</NavLink>
        </Menu.Item>
      </Menu>
    )
  }
}

export default NavBar
