import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import { Dropdown, Container, Icon, Menu } from 'semantic-ui-react'

class NavBarContainer extends React.Component {

  renderSublets = () => {
    if (this.props.auth.isLoggedIn) {
      return (
        <Menu.Item>
          <NavLink exact to='/sublets' activeStyle={{color: 'red'}}>Sublets</NavLink>
        </Menu.Item>
      )
    }
  }

  renderLogIn = () => {
    if (!this.props.auth.isLoggedIn) {
      return (
        <Menu.Item>
          <NavLink exact to='/login' activeStyle={{color: 'red'}}>Log In</NavLink>
        </Menu.Item>
      )
    } else {
      return (
        <Dropdown item text={`Hello, ${this.props.auth.user.first_name}`}>
          <Dropdown.Menu>
            <Dropdown.Item as={NavLink} exact to='/user'>
              Your Profile
            </Dropdown.Item>
            <Dropdown.Item as={NavLink} exact to='/sublets/new'>
              Create a New Sublet
            </Dropdown.Item>
            <Dropdown.Item as={Link} to='/' onClick={this.props.logOut}>
              Log Out
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      )
    }
  }

  render = () => {
    return (
      <Menu>
        <Container>
          <Menu.Item header>
            <Icon bordered inverted color='blue' name='home' />
            SublEasy
          </Menu.Item>
          <Menu.Item>
            <NavLink exact to='/' activeStyle={{color: 'red'}}>Home</NavLink>
          </Menu.Item>
          {this.renderSublets()}
          <Menu.Menu position='right'>
            {this.renderLogIn()}
          </Menu.Menu>
        </Container>
      </Menu>
    )
  }
}

export default NavBarContainer
