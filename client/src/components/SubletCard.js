import React from 'react'
import {Link} from 'react-router-dom'
import { Card, Image, Grid, Header } from 'semantic-ui-react'

var dateFormat = require('dateformat')

class SubletCard extends React.Component {

  renderImage = () => {
    if (this.props.sublet.images[0]) {
      return <Image src={this.props.sublet.images[0].url} alt='Sublet View' />
    }
  }

  render () {
    return (
        <Card raised as={Link} to={`/sublets/${this.props.sublet.id}`} >
          {this.renderImage()}
          <Card.Content>
            <Card.Header>
              ${this.props.sublet.price / 100} / month
            </Card.Header>
            <Card.Meta>
              {this.props.sublet.location.name}
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
          </Card.Content>
          <Card.Content extra>
            <Header as='h3'>
              {this.props.sublet.name}
            </Header>
            <Card.Meta>
              Listed on {dateFormat(this.props.sublet.created_at, 'mediumDate')}
            </Card.Meta>
          </Card.Content>
        </Card>
    )
  }
}

export default SubletCard
