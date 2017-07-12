import React from 'react'
import SubletsListContainer from './SubletsListContainer'
import SubletFilters from '../components/SubletFilters'
import { Grid, Container } from 'semantic-ui-react'

class SubletsContainer extends React.Component {
  render () {
    return (
      <Container>
        <Grid>
          <Grid.Column width={4}>
            <SubletFilters />
          </Grid.Column>
          <Grid.Column width={12}>
            <SubletsListContainer sublets={this.props.sublets} />
          </Grid.Column>
        </Grid>
      </Container>
    )
  }
}

export default SubletsContainer
