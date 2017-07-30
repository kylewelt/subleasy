import React from 'react'
import { Grid, Header, Icon, Label } from 'semantic-ui-react'

var dateFormat = require('dateformat')

class SubletInfo extends React.Component {
  state = {
    liked: false,
    heartSize: ['tiny', 'small', 'large', 'big', 'huge', 'massive'],
    clickCount: 0,
    spinThatShit: false
  }

  handleClick = () => {
    this.setState({
      liked: true,
      clickCount: this.state.clickCount > 4 ? 5 : this.state.clickCount + 1,
      spinThatShit: this.state.clickCount === 5 ? true : false
    })
  }

  render () {
    return (
      <div>
        <Label size='large' color='blue' ribbon>Sublet Details</Label>
        <Header as='h1'>{this.props.sublet.name}</Header>
        <Header as='h2'>
          <Icon.Group>
            <Icon name='dollar' />
          </Icon.Group>
          {this.props.sublet.price / 100} / month
        </Header>

        <Header sub>Location</Header>
        <p>{this.props.sublet.location.name}</p>

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
        {!this.state.liked ? <Icon onClick={this.handleClick} size={this.state.heartSize[this.state.clickCount]} name="empty heart" /> : <Icon onClick={this.handleClick} size={this.state.heartSize[this.state.clickCount]} color="red" name="heart" loading={this.state.spinThatShit}/> }
      </div>
    )
  }
}

export default SubletInfo
