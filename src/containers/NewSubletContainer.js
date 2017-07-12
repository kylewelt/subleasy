import React from 'react'
import { Redirect } from 'react-router-dom'
import { Container } from 'semantic-ui-react'
import NewSubletForm from '../components/NewSubletForm'
import SubletsAdapter from '../adapters/SubletsAdapter'

class NewSubletContainer extends React.Component {
  state = {
    subletId: null
  }

  createSublet = (formData) => {
    debugger
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
    // if (this.state.subletId) {return <Redirect to={`/sublets/${this.state.sublet_id}`} />}
  }

  render = () => {
    return (
      <Container>
        {this.redirect()}
        <NewSubletForm newSublet={this.createSublet}/>
      </Container>
    )
  }
}

export default NewSubletContainer
