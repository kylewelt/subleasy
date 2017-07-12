import React from 'react'
import { Segment, Loader } from 'semantic-ui-react'
import ImageCarousel from '../components/Carousel'

class HomeContainer extends React.Component {
  renderSublets = () => {
    if (this.props.sublets.length > 0) {
      return this.props.sublets.map((sublet, index) => {
        return (
          <Segment key={index} raised>
            <p>{sublet.name}</p>
          </Segment>
        )
      })
    } else {
      return (
        <Loader active>Loading</Loader>
      )
    }
  }

  render () {
    return (
      <div>
        <ImageCarousel />
        {this.renderSublets()}
      </div>
    )
  }
}

export default HomeContainer
