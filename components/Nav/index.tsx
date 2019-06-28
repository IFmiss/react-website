import * as React from 'react'
import GenericComponent from './../Generic/index'
import { NavLink } from 'react-router-dom'
import { INavLists, INavList } from './../../config/nav'
import classNames from 'classnames'
import { changePageMode } from './../../utils/utils'
import './nav.less'
import { HomeNav, MusicNav } from './../../config/nav'
import { NameSpaceStore } from './../../store/types'

interface INavProps {
  navStore: NameSpaceStore.INavModel
  location? : any
}

interface INavState {}

export default class Nav extends GenericComponent<INavProps, INavState> {
  constructor (props: any) {
    super(props)
  }

  public setNavList = () => {
    const { location, navStore } = this.props
    if (location.pathname.includes('/music')) {
      navStore.setNavLists(MusicNav)
    } else {
      navStore.setNavLists(HomeNav)
    }
  }

  public render () {
    const { navStore, prefixClass } = this.props
    const classes = classNames({
      [`${prefixClass}-nav`]: true
    })
    this.setNavList()
    const { lists } = navStore
    return (
      <div className={classes}>
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
                          key={index}>{item.name}</NavLink>
                )
              })
            }
          </div>
          <div onClick={changePageMode}>点击切换颜色</div>
        </div>
      </div>
    )
  }
}
