import React from 'react'
import { Grid, Container } from 'semantic-ui-react'
import SubletInfo from '../components/SubletInfo'
import SubletDescription from '../components/SubletDescription'
import { Carousel } from 'react-responsive-carousel'
import '../carousel.css'

class SubletContainer extends React.Component {
  state = ({
    sublet: {}
  })

  componentWillReceiveProps = (nextProps) => {
    this.setSublet(nextProps)
  }

  shouldComponentUpdate = (nextProps, nextState) => {
    return this.state.sublet !== nextState.sublet
  }

  findSublet = (props) => {
    return props.sublets.filter(sublet => {
      return sublet.id.toString() === props.match.params.subletId
    })
  }

  setSublet = (props) => {
    this.setState({
      sublet: this.findSublet(props)[0]
    })
  }

  render () {
    return (
      <Container>
        <Grid celled>
          <Grid.Row>
            <Grid.Column width={6}>
              <SubletInfo sublet={this.state.sublet} />
            </Grid.Column>
            <Grid.Column width={10}>
              {/* <Carousel images={this.state.sublet.images} /> */}
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={8}>
              <SubletDescription sublet={this.state.sublet} />
            </Grid.Column>
            <Grid.Column width={8}>
              COOL MAP
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    )
  }
}

export default SubletContainer
