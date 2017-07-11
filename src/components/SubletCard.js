import React from 'react'
import { Card, Image } from 'semantic-ui-react'

class SubletCard extends React.Component {
  render () {
    return (
      <Card raised>
        <Image>
          
        </Image>
        <Card.Content>
          <Card.Header>
            ${this.props.sublet.price / 100} / month
          </Card.Header>
          <Card.Meta>
            Listed on {this.props.sublet.created_at}
          </Card.Meta>
        </Card.Content>
      </Card>
    )
  }
}

export default SubletCard
