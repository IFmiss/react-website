import * as React from 'react'
import { Route, Switch, Redirect } from 'react-router'
import { BrowserRouter } from 'react-router-dom'
import { Home, Blog, Music, Setting } from './loadable'
import Nav from './components/Nav'
import { observer } from "mobx-react"
import Constance from './config/constance'
import { IStore } from './store/types'

interface IMainProps {
  store?: IStore;
  prefixClass?: string;
  history?: any;
}

interface IMainState {}

class App extends React.Component<IMainProps, IMainState> {
  public render () {
    const { store } = this.props
    console.log('this.propsthis.propsthis.propsthis.props', this.props)
    return (
      <BrowserRouter>
        <Switch>
          <Nav navStore={store.navStore}/>
          <Switch>
            <Route path="/home" render={(props) => <Home {...props} store={store} prefixClass={Constance.PROJECT_NAME}/>}/>
            <Route path="/music" render={(props) => <Music {...props} store={store} prefixClass={Constance.PROJECT_NAME}/>}/>
            <Route path="/blog" render={(props) => <Blog {...props} store={store} prefixClass={Constance.PROJECT_NAME}/>}/>
            <Route path="/setting" render={(props) => <Setting {...props} store={store} prefixClass={Constance.PROJECT_NAME}/>}/>
            <Redirect to="/home" strict exact/>
          </Switch>
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App
