import * as React from 'react'
import { Route, Switch, Redirect } from 'react-router'
import { BrowserRouter } from 'react-router-dom'
import { Home } from './loadable'
import { Music } from './loadable'
import Nav from './components/Nav'
import { HomeNav } from './config/nav'
import { observer } from "mobx-react"
import Constance from './config/constance'

@observer
class App extends React.Component<any, any> {
  render () {
    const { store } = this.props
    console.log('this.propsthis.propsthis.propsthis.props', this.props)
    return (
      <BrowserRouter>
        <Nav lists={HomeNav} color={store.colorStore}/>
        <Switch>
          <Route path="/home" render={(props) => <Home {...props} prefixClass={Constance.PROJECT_NAME}/>}/>
          <Route path="/music" render={(props) => <Music {...props} prefixClass={Constance.PROJECT_NAME}/>}/>
          <Redirect to="/home" strict exact/>
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App
