import * as React from 'react'
import GenericComponent from './../Generic/index'
import { NavLink } from 'react-router-dom'
import { INavLists, INavList } from './../../config/nav'
import classNames from 'classnames'
import { changePageMode } from './../../utils/utils'
import './nav.less'
import store from './../../store'
import Constance from './../../config/constance'
import { HomeNav, MusicNav } from './../../config/nav'
import { NameSpaceStore } from './../../store/types'
import { useState, useEffect } from 'react'
import { observer, useObservable, useObserver, useLocalStore, useStaticRendering, useComputed } from "mobx-react-lite"
import { useStore } from './../../utils/use'

interface INavProps {
  location?: any
}

const Nav = (props: INavProps) => {
  const nav = useStore().navStore
  const lists = nav.lists

  // useEffect(() => {
  //   if (location.pathname.includes('/music')) {
  //     nav.setNavLists(2)
  //   }
  // })

  const classString = classNames({
    [`${Constance.PROJECT_NAME}-nav`]: true
  })

  return (
    <div className={ classString }>
      <div className="nav-content">
        <div className="nav-logo">
          {/* <img className="nav-img" src="http://www.daiwei.org/index/images/logo/favicon.ico" alt=""/> */}
        </div>
        <div className="nav-lists">
          {
            lists.slice().map((item: INavList, index: number) => {
              return (
                <NavLink className="nav-list"
                        to={item.link}
                        key={index}
                        onClick={() => nav.setNavLists(item.type)}>
                  {item.name}
                </NavLink>
              )
            })
          }
        </div>
        <div onClick={changePageMode}>点击切换颜色</div>
      </div>
    </div>
  )
}

export default Nav
