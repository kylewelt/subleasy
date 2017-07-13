import React from 'react'
import { Grid, Container } from 'semantic-ui-react'
import GoogleMap from '../components/GoogleMap'
import SubletInfo from '../components/SubletInfo'
import SubletDescription from '../components/SubletDescription'
import { Carousel } from 'react-responsive-carousel'
import '../carousel.css'

class SubletContainer extends React.Component {

  findSublet = () => {
    return this.props.sublets.filter(sublet => {
      return sublet.id.toString() === this.props.match.params.subletId
    })[0]
  }

  renderImages = () => {
    return (
      this.findSublet().images.map(image => {
        return (
          <div key={image.id}>
            <img src={image.url} alt={image.url} />
            <p className="legend">{image.caption}</p>
          </div>
        )
      })
    )
  }

  render () {
    return (
      <Container>
        <Grid celled>
          <Grid.Row>
            <Grid.Column width={6}>
              <SubletInfo sublet={this.findSublet()} />
            </Grid.Column>
            <Grid.Column width={10}>
              <Carousel dynamicHeight infiniteLoop swipeScrollTolerance={1} interval={3000} autoPlay>
                {this.renderImages()}
              </Carousel>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={8}>
              <SubletDescription sublet={this.findSublet()} />
            </Grid.Column>
            <Grid.Column width={8}>
              <GoogleMap location={this.findSublet().location}/>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    )
  }
}

export default SubletContainer
