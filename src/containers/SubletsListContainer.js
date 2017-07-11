import React from 'react'
import SubletCard from '../components/SubletCard'
import { Loader, Card } from 'semantic-ui-react'

class SubletsListContainer extends React.Component {
  renderSublets = () => {
    if (this.props.sublets.length > 0) {
      return this.props.sublets.map(sublet => {
        return (
          <SubletCard key={sublet.id} sublet={sublet}/>
        )
      })
    } else {
      return (
        <Loader active>Loading</Loader>
      )
    }
  }

  render() {
    return(
      <Card.Group>
        {this.renderSublets()}
      </Card.Group>
    )
  }
}

export default SubletsListContainer
