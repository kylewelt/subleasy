import React from 'react'
import SubletsListContainer from './SubletsListContainer'
import { Grid } from 'semantic-ui-react'

class SubletsContainer extends React.Component {
  render () {
    return (
      <Grid>
        <Grid.Column width={4}>
          A filter component goes here.
        </Grid.Column>
        <Grid.Column width={12}>
          <SubletsListContainer sublets={this.props.sublets} />
        </Grid.Column>
      </Grid>
    )
  }
}

export default SubletsContainer
