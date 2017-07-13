import React from 'react'
import { Switch, Route } from 'react-router-dom'
import SubletsContainer from '../containers/SubletsContainer'
import NewSubletContainer from '../containers/NewSubletContainer'
import SubletContainer from '../containers/SubletContainer'

class SubletsRouter extends React.Component {
  render () {
    return (
      <Switch>
        <Route exact path='/sublets' render={() => <SubletsContainer sublets={this.props.sublets} />} />
        <Route exact path='/sublets/new' render={() => <NewSubletContainer tellAppToFetch={this.props.tellAppToFetch} />} />
        <Route exact path='/sublets/:subletId' render={(props) => <SubletContainer sublets={this.props.sublets} {...props} />} />
      </Switch>
    )
  }
}

export default SubletsRouter
