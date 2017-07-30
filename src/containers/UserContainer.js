import React from 'react'
import UsersAdapter from '../adapters/UsersAdapter'
import SubletCard from '../components/SubletCard'
import { Container, Header, Card, Image, Icon } from 'semantic-ui-react'

class UserContainer extends React.Component {
  state = {
    user: {}
  }

  getUserInfo = () => {
    UsersAdapter.getUser(this.props.user.id)
    .then(data => this.setState({
      user: data
      }))
  }

  componentWillMount = () => {
    this.getUserInfo()
  }

  renderListings = () => {
    if (this.state.user.listings) {
      return this.state.user.listings.map(listing => {
      return <SubletCard sublet={listing} />
    })
  }
  }
  render() {
    return(
      <Container>
        <Card.Group itemsPerRow={3} doubling stackable>
          <Card>
            {this.state.user.profile_image ? <Image src={this.state.user.profile_image.url} />
              : <Image src='http://www.imran.com/xyper_images/icon-user-default.png' />
            }
            <Card.Content>
              <Card.Header>
                {this.state.user.first_name} {this.state.user.last_name}
              </Card.Header>
              <Card.Meta>
                <span className='email'>
                  {this.state.user.email}
                </span>
              </Card.Meta>
              {this.state.user.listings ? <Card.Description>
                Number of listings: {this.state.user.listings.length}
              </Card.Description>
              : <Card.Description>
                You have 0 listings!
              </Card.Description>
            }
            </Card.Content>
            <Card.Content extra>
              <a>
                <Icon name='home' />
                {this.state.user.sublets ? this.state.user.sublets.length : '0'} Bookmarks
              </a>
            </Card.Content>
          </Card>
          {this.renderListings()}
        </Card.Group>
      </Container>
    )
  }
}

export default UserContainer
