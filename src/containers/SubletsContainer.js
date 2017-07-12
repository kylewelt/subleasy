import React from 'react'
import SubletsListContainer from './SubletsListContainer'
import SubletFilters from '../components/SubletFilters'
import { Grid, Container } from 'semantic-ui-react'

class SubletsContainer extends React.Component {
  state= ({
    filters: {}
  })

  onFilter = (filterData) => {
    this.setState({
      filters: filterData
    })
  }

  render () {
    return (
      <Container>
        <Grid>
          <Grid.Column width={4}>
            <SubletFilters onFilter={this.onFilter}/>
          </Grid.Column>
          <Grid.Column width={12}>
            <SubletsListContainer sublets={this.props.sublets} filters={this.state.filters} />
          </Grid.Column>
        </Grid>
      </Container>
    )
  }
}

export default SubletsContainer
