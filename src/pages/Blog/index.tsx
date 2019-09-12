import React, { useState, useEffect } from 'react';
import classNames from 'classnames'
import { PROJECT_NAME } from './../../config/constance'
import { Route, Switch, Redirect } from 'react-router-dom'
import { BlogLists, BlogDetail } from './../../loadable';
import store from './../../store'

interface IBlogProps {}

const Blog: React.FC = (props: IBlogProps) => {
  const classString = classNames({
    [`${PROJECT_NAME}-blog`]: true,
    [`dw-page-router`]: true
  })

  store.navStore.setNavLists(1)

  return (
    <div className={classString}>
      {/* this is Blog  */}
      <Switch>
        <Route path="/blog/lists" component={BlogLists}/>
        <Route path="/blog/detail" component={BlogDetail}/>
        <Redirect to="/blog/lists" />
      </Switch>
    </div>
  )
}

export default Blog