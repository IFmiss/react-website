import React from 'react'
// import { Route, Switch, Redirect } from 'react-router'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import { Home, Blog, Music, Setting, InterLink } from './loadable'
import Nav from './components/Nav/index'
import CopyRight from './components/CopyRight'

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
          <Route path="/interlink" component={InterLink}/>
          <Redirect to="/home" strict exact/>
        </Switch>
        <CopyRight></CopyRight>
      </BrowserRouter>
    </React.Fragment>
  )
}

export default Main
