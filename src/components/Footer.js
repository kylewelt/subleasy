import React from 'react'
import { Container, Menu, Segment } from 'semantic-ui-react'

class Footer extends React.Component {

  render () {
    return (
      <Menu inverted fixed='bottom' >
        <Container centered>
          <Segment fluid basic inverted textAlign='center' padded='very'>
            SublEasy · © 2017 · Made In NYC · Created at Flatiron School
          </Segment>
        </Container>
      </Menu>
    )
  }
}

export default Footer
