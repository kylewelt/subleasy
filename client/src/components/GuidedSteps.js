import React from 'react'
import { Icon, Step } from 'semantic-ui-react'

class GuidedSteps extends React.Component {

  render () {
    return (
      <Step.Group fluid>
        <Step>
          <Icon name='list layout' />
          <Step.Content>
            <Step.Title>Browse</Step.Title>
            <Step.Description>active sublets in your area</Step.Description>
          </Step.Content>
        </Step>
        <Step>
          <Icon name='options' />
          <Step.Content>
            <Step.Title>Filter</Step.Title>
            <Step.Description>based on your criteria</Step.Description>
          </Step.Content>
        </Step>
        <Step>
          <Icon name='hotel' />
          <Step.Content>
            <Step.Title>Lease</Step.Title>
            <Step.Description>your new digs</Step.Description>
          </Step.Content>
        </Step>
      </Step.Group>
    )
  }
}

export default GuidedSteps
