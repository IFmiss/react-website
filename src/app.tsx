import * as React from 'react'
import { Route, Switch, Redirect } from 'react-router'

export default class App extends React.Component {
  render () {
    return (
      <Switch>
        <Route path="/home"/>
        <Route path="/user"/>
        <Redirect to="/home" exact={true}/>
      </Switch>
    )
  }
}
