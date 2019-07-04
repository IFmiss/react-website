import { NavLink } from 'react-router-dom'
import { INavLists, INavList } from './../../config/nav'
import classNames from 'classnames'
import { changePageMode } from './../../utils/utils'
import './nav.less'
import store from './../../store'
import Constance from './../../config/constance'
import React, { useState, useEffect } from 'react'
import { observer, useObservable, useObserver, useLocalStore, useStaticRendering, useComputed } from "mobx-react-lite"
import { useStore } from './../../utils/use'

interface INavProps {
  location?: any
}

const Nav = observer((props: INavProps) => {
  const nav = useStore().navStore
  const lists = nav.lists

  const classString = classNames({
    [`${Constance.PROJECT_NAME}-nav`]: true
  })

  return (
    <div className={ classString }>
      <div className="nav-content">
        <div className="nav-logo">
          {/* <img className="nav-img" src="http://www.daiwei.org/index/images/logo/favicon.ico" alt=""/> */}
          <h2 className="nav-title">Dw</h2>
        </div>
        <div className="nav-lists">
          {
            lists.slice().map((item: INavList, index: number) => {
              return (
                <NavLink className="nav-list"
                        to={item.link}
                        key={item.key}
                        onClick={() => nav.setNavLists(item.type)}>
                  {item.name}
                </NavLink>
              )
            })
          }
          <span>{lists.length}</span>
        </div>
        <div onClick={changePageMode}>点击切换颜色</div>
      </div>
    </div>
  )
})

export default Nav
