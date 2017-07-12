import React from 'react'
import { Container, Segment, Header } from 'semantic-ui-react'
import LogInForm from '../components/LogInForm'
import SignUpForm from '../components/SignUpForm'
import UsersAdapter from '../adapters/UsersAdapter'

class UserFormsContainer extends React.Component {
  logIn = (formData) => {
    this.props.logIn(formData)
  }

  signUp = (formData) => {
    UsersAdapter.createUser(formData)
      .then(user => {
        if (!user.errors) {this.props.logIn(formData)}
      })
  }

  render = () => {
    return (
      <Container>
        <Segment raised>
          <Header as='h1'>Log In</Header>
          <LogInForm logIn={this.logIn} />
        </Segment>
        <Segment raised>
          <Header as='h1'>Sign Up</Header>
          <SignUpForm signUp={this.signUp} />
        </Segment>
      </Container>
    )
  }
}

export default UserFormsContainer
