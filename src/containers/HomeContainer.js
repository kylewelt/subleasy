import React from 'react'
import { Container, Divider, Loader } from 'semantic-ui-react'
import { Carousel } from 'react-responsive-carousel'
import '../carousel.css'
import GuidedSteps from '../components/GuidedSteps'
import Footer from '../components/Footer'

class HomeContainer extends React.Component {
  renderSublets = () => {
    if (this.props.sublets.length > 0) {
      return this.props.sublets.filter(sublet => !!sublet.images[0]).map((sublet) => {
        return (
          <div key={sublet.id}>
            <img src={sublet.images[0].url} alt={sublet.name} />
            <p className="legend">{sublet.name}</p>
          </div>
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
        <Container>
          <Carousel dynamicHeight infiniteLoop swipeScrollTolerance={1} interval={3000} autoPlay showThumbs={false}>
            {this.renderSublets()}
          </Carousel>
          <Divider />
          <GuidedSteps />
        </Container>
        <Footer />
      </div>
    )
  }
}

export default HomeContainer
