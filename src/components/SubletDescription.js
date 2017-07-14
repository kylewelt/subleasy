import React from 'react'
import { Header } from 'semantic-ui-react'

class SubletDescription extends React.Component {

  render () {
    console.log(this.props)
    return (
      <div>
        <Header block>Sublet Description</Header>
        <p>{this.props.sublet.description}</p>
      </div>
    )
  }
}

export default SubletDescription
