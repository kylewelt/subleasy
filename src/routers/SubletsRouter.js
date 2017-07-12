import React from 'react'
import { Switch, Route } from 'react-router-dom'
import SubletsContainer from '../containers/SubletsContainer'
import NewSubletContainer from '../containers/NewSubletContainer'

class SubletsRouter extends React.Component {
  render() {
    return(
      <Switch>
        <Route exact path='/sublets' render={() => <SubletsContainer {...this.props.state} />} />
        <Route exact path='/sublets/new' render={() => <NewSubletContainer tellAppToFetch={this.props.tellAppToFetch}/>} />
      </Switch>
    )
  }
}

export default SubletsRouter
