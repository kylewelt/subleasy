import React from 'react'
import { Redirect } from 'react-router-dom'
import { Header, Container } from 'semantic-ui-react'
import NewSubletForm from '../components/NewSubletForm'
import SubletsAdapter from '../adapters/SubletsAdapter'

class NewSubletContainer extends React.Component {
  state = {
    subletId: null
  }

  createSublet = (formData) => {
    SubletsAdapter.createSublet(formData)
      .then(sublet => {
        if (!sublet.errors) {
          this.props.tellAppToFetch()
          this.setState({subletId: sublet.id})
        }
      })
  }

  redirect = () => {
    if (this.state.subletId) {return <Redirect to='/' />}
  }

  render = () => {
    return (
      <Container>
        {this.redirect()}
        <Header as='h1'>Create New Listing </Header>
        <NewSubletForm newSublet={this.createSublet}/>
      </Container>
    )
  }
}

export default NewSubletContainer
