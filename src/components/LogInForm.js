import React from 'react'
import { NavLink } from 'react-router-dom'
import { Form, Button } from 'semantic-ui-react'

class LogInForm extends React.Component {
  state = {
    email: '',
    password: ''
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.logIn(this.state)
  }

  render () {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Input required label='Email' placeholder='my_email@example.com' type='email' name='email' value={this.state.email} onChange={this.handleChange} />
        <Form.Input required label='Password' placeholder='password' type='password' name='password' value={this.state.password} onChange={this.handleChange} />
        <Form.Button content='Log In' />
      </Form>
    )
  }
}

export default LogInForm
