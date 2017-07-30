import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import { Dropdown, Container, Icon, Menu } from 'semantic-ui-react'

class NavBarContainer extends React.Component {

  renderSublets = () => {
    if (this.props.auth.isLoggedIn) {
      return (
        <Menu.Item as={NavLink} exact to='/sublets' >
          Sublets
        </Menu.Item>
      )
    }
  }

  renderLogIn = () => {
    if (!this.props.auth.isLoggedIn) {
      return (
        <Menu.Item as={NavLink} exact to='/login'>
          Log In
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
              Create New Listing
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
          <Menu.Item header as={NavLink} exact to='/' >
            <Icon bordered inverted color='blue' name='home' />
            SublEasy
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
