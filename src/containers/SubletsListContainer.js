import React from 'react'
import SubletCard from '../components/SubletCard'
import { Card, Loader, Segment } from 'semantic-ui-react'

class SubletsListContainer extends React.Component {
  overFilter = (detail, filter) => {
    if (filter !== '' && filter !== 0) {
      if (detail >= filter) {
        return true
      } else {
        return false
      }
    } else {
      return true
    }
  }

  underFilter = (detail, filter) => {
    if (filter !== '' && filter !== 0) {
      if (detail <= filter) {
        return true
      } else {
        return false
      }
    } else {
      return true
    }
  }

  filterSublets = () => {
    return this.props.sublets.filter((sublet, index) => {
      return (
        this.overFilter(sublet.start_date, this.props.filters.startDateFilter)
        && this.overFilter(sublet.end_date, this.props.filters.endDateFilter)
        && this.overFilter(sublet.price * 1, this.props.filters.minPriceFilter * 100)
        && this.underFilter(sublet.price * 1, this.props.filters.maxPriceFilter * 100)
      )
    })
  }

  renderSublets = () => {
    if (this.props.sublets.length > 0) {
      return this.filterSublets().map((sublet, index) => {
        return (
          <SubletCard key={index} sublet={sublet}/>
        )
      })
    } else {
      return (
        <Loader active>Loading</Loader>
      )
    }
  }

  render() {
    let filteredSublets = this.renderSublets()
    if (filteredSublets.length > 0) {
      return (
        <Card.Group itemsPerRow={3} doubling stackable>
          {filteredSublets}
        </Card.Group>
      )
    } else {
      return (
        <Segment>
          No results were found for the selected filters.
          Please try broadening your search criteria.
        </Segment>
      )
    }
  }
}

export default SubletsListContainer
