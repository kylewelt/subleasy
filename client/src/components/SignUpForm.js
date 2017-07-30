import React from 'react'
import { Form } from 'semantic-ui-react'

class SignUpForm extends React.Component {
  state = {
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    confirmPassword: ''
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.signUp(this.state)
  }

  render () {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Input required label='First Name' placeholder='first name' name='first_name' value={this.state.firstName} onChange={this.handleChange} />
        <Form.Input required label='Last Name' placeholder='last name' name='last_name' value={this.state.lastName} onChange={this.handleChange} />
        <Form.Input required label='Email' placeholder='my_email@example.com' type='email' name='email' value={this.state.email} onChange={this.handleChange} />
        <Form.Input required label='Password' placeholder='password' type='password' name='password' value={this.state.password} onChange={this.handleChange} />
        <Form.Input required label='Confirm Password' placeholder='confirm password' type='password' name='confirmPassword' value={this.state.confirmPassword} onChange={this.handleChange} />
        <Form.Button content='Sign Up' color='blue' />
      </Form>
    )
  }
}

export default SignUpForm
