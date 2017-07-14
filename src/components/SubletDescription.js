import React from 'react'
import { Header, Label } from 'semantic-ui-react'

class SubletDescription extends React.Component {

  render () {
    console.log(this.props)
    return (
      <div>
        <Label size='large' color='blue' ribbon>Sublet Description</Label>
        <Header></Header>
        <p>{this.props.sublet.description}</p>
      </div>
    )
  }
}

export default SubletDescription
