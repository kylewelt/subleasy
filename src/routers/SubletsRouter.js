import React from 'react'
import { Switch, Route } from 'react-router-dom'
import SubletsContainer from '../containers/SubletsContainer'
import NewSubletForm from '../components/NewSubletForm'

class SubletsRouter extends React.Component {
  render() {
    return(
      <Switch>
        <Route exact path='/sublets' render={() => <SubletsContainer {...this.props.state} />} />
        <Route exact path='/sublets/new' render={() => <NewSubletForm {...this.state} />} />
      </Switch>
    )
  }
}

export default SubletsRouter
