import * as React from 'react'
// import { Route, Switch, Redirect } from 'react-router'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import { Home, Blog, Music, Setting } from './loadable'
import Nav from './components/Nav'
import { observer } from "mobx-react"
import store from './store'
import Constance from './config/constance'
import { IStore } from './store/types'
import HomeComp from './pages/Home/index'

interface IMainProps {
  prefixClass?: string;
  history?: any;
}

interface IMainState {}

const Main = (props: IMainProps) => {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Switch>
          <Nav/>
        </Switch>
        <Switch>
          <Route path="/home" component={Home}/>
          <Route path="/music" component={Music}/>
          <Route path="/blog" component={Blog}/>
          <Route path="/setting" component={Setting}/>
          <Redirect to="home" strict exact/>
        </Switch>
      </BrowserRouter>
    </React.Fragment>
  )
}

export default Main
