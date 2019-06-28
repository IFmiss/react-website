import * as React from 'react'
import { Route, Switch, Redirect } from 'react-router'
import { BrowserRouter } from 'react-router-dom'
import { Home, Blog, Music, Setting } from './loadable'
import Nav from './components/Nav'
import { observer } from "mobx-react"
import Constance from './config/constance'
import Main from './Main'

@observer
class App extends React.Component<any, any> {
  public render () {
    const { store } = this.props
    console.log('this.propsthis.propsthis.propsthis.props', this.props)
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" render={(props) => <Main {...props} store={store}/>}></Route>
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App
