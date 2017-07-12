import React from 'react'
import { Card, Image, Grid, Segment } from 'semantic-ui-react'

var dateFormat = require('dateformat')

class SubletCard extends React.Component {
  render () {
    console.log(this.props.sublet)
    return (
      <Card raised>
        <Image>
          <img src='https://images.unsplash.com/photo-1466098672325-c9ddda4b7975' />
        </Image>
        <Card.Content>
          <Card.Header>
            ${this.props.sublet.price / 100} / month
          </Card.Header>
          <Card.Meta>
            Listed on {dateFormat(this.props.sublet.created_at, 'mediumDate')}
          </Card.Meta>
          <Grid columns={3} padded='vertically' divided>
            <Grid.Row>
              <Grid.Column>
                <Card.Meta>x beds</Card.Meta>
              </Grid.Column>
              <Grid.Column>
                <Card.Meta>y baths</Card.Meta>
              </Grid.Column>
              <Grid.Column>
                <Card.Meta>z ft²</Card.Meta>
              </Grid.Column>
            </Grid.Row>
          </Grid>
          <Card.Description>
            A short description of the sublet.
          </Card.Description>
        </Card.Content>
      </Card>
    )
  }
}

export default SubletCard
