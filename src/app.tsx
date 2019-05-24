import * as React from 'react'
import { Route, Switch, Redirect } from 'react-router'
import { BrowserRouter } from 'react-router-dom'
import { Home } from './loadable'
import { observer } from "mobx-react"
import { observable, action } from "mobx"

@observer
export default class App extends React.Component<any, any> {
  render () {
    const { store } = this.props
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/home" render={() => <Home store={store}/>}/>
          <Redirect to="/home" strict exact/>
        </Switch>
      </BrowserRouter>
    )
  }
}
