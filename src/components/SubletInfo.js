import React from 'react'
import { Grid, Header, Icon } from 'semantic-ui-react'

var dateFormat = require('dateformat')

class SubletInfo extends React.Component {

  render () {
    return (
      <div>
        <Header block>Sublet Details</Header>
        <Header as='h1'>{this.props.sublet.name}</Header>
        <Header as='h2'>
          <Icon.Group>
            <Icon name='dollar' />
          </Icon.Group>
          {this.props.sublet.price / 100} / month
        </Header>

        <Header sub>Listed on</Header>
        <p>{dateFormat(this.props.sublet.created_at, 'mediumDate')}</p>

        <Grid columns={2} padded='vertically' divided>
          <Grid.Row>
            <Grid.Column>
              <Header sub>Starts</Header>
              <p>{dateFormat(this.props.sublet.start_date, 'mediumDate')}</p>
            </Grid.Column>
            <Grid.Column>
              <Header sub>Ends</Header>
              <p>{dateFormat(this.props.sublet.end_date, 'mediumDate')}</p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    )
  }
}

export default SubletInfo
