import React from 'react'
import { Segment } from 'semantic-ui-react'

class HomeContainer extends React.Component {
  renderSublets = () => {
    if (this.props.sublets.length > 0) {
      return this.props.sublets.map(sublet => {
        return (
          <Segment raised>
            <p>{sublet.name}</p>
          </Segment>
        )
      })
    } else {
      return <div> 'Loading...' </div>
    }
  }

  render () {
    console.log(this.props.sublets)
    return (
      <div>
        {this.renderSublets()}
      </div>
    )
  }
}

export default HomeContainer
