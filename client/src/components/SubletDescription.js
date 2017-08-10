import React from 'react'
import { Label } from 'semantic-ui-react'

class SubletDescription extends React.Component {

  render () {
    return (
      <div>
        <Label size='large' color='blue' ribbon>Sublet Description</Label>
        <p>{this.props.sublet.description}</p>
      </div>
    )
  }
}

export default SubletDescription
