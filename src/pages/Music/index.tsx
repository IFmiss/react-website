import * as React from 'react'
import fetch from './../../utils/fetch'
import { IStore } from './../../store/types'
import classNames from 'classnames'
import Constance from './../../config/constance'
import { Route, Switch, Redirect } from 'react-router-dom'
import Sheet from './Sheet'

interface IMusicProps {}

const Music = (props: IMusicProps) => {
  const classString = classNames({
    [`${Constance.PROJECT_NAME}-music`]: true,
    [`dw-page-router`]: true
  })
  return (
    <div className={classString}>
      {/* this is Music  */}
      <Switch>
        <Route path="/music/sheet" component={Sheet}/>
        <Redirect to="/music/sheet" exact/>
      </Switch>
    </div>
  )
}

export default Music