import React from 'react'
// import { Route, Switch, Redirect } from 'react-router'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import { Home, Blog, Music, Setting } from './loadable'
import Nav from './components/Nav'

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
          <Redirect to="/home" strict exact/>
        </Switch>
      </BrowserRouter>
    </React.Fragment>
  )
}

export default Main
