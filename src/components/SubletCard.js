import React from 'react'
import { Card, Image, Grid, Header } from 'semantic-ui-react'

var dateFormat = require('dateformat')

class SubletCard extends React.Component {
  render () {
    return (
      <Card raised>
        <Image src={this.props.sublet.images[0].url} alt='Sublet View' />
        <Card.Content>
          <Card.Header>
            ${this.props.sublet.price / 100} / month
          </Card.Header>
          <Card.Meta>
            Listed on {dateFormat(this.props.sublet.created_at, 'mediumDate')}
          </Card.Meta>
          <Grid columns={2} padded='vertically' divided>
            <Grid.Row>
              <Grid.Column>
                <Header sub>Starts</Header>
                <Card.Meta>{dateFormat(this.props.sublet.start_date, 'mediumDate')}</Card.Meta>
              </Grid.Column>
              <Grid.Column>
                <Header sub>Ends</Header>
                <Card.Meta>{dateFormat(this.props.sublet.end_date, 'mediumDate')}</Card.Meta>
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
