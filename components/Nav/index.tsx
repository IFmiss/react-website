import * as React from 'react'
import GenericComponent from './../Generic/index'
import Link from 'next/link'
import { withRouter } from 'next/router'
import { INavLists, INavList } from './../../config/nav'
import classNames from 'classnames'
import { changePageMode } from './../../utils/utils'
import './nav.less'
import { HomeNav, MusicNav } from './../../config/nav'
import { NameSpaceStore } from './../../store/types'
import Constance from './../../config/constance'

interface INavProps {
  lists: INavLists
}

interface INavState {
  needActive: boolean
}

class Nav extends GenericComponent<INavProps, INavState> {
  constructor (props: any) {
    super(props)
    this.state = {
      needActive: false
    }
  }

  lists = HomeNav

  public setNavList = () => {
    // const { navStore } = this.props
    // if (location.pathname.includes('/music')) {
    //   navStore.setNavLists(MusicNav)
    // } else {
    //   navStore.setNavLists(HomeNav)
    // }
  }
  public async componentDidMount () {
    setTimeout(() => {
      this.setState({
        needActive: true
      })
    }, 0)
  }

  public render () {
    const { prefixClass, router } = this.props
    const { needActive } = this.state
    this.lists = router.asPath.includes('/music') ? MusicNav : HomeNav
    const classes = classNames({
      [`${prefixClass}-nav`]: true
    })
    const activeLink = (item: INavList) => classNames({
      [`nav-list`]: true,
      [`active`]: item.link === router.asPath && needActive
    })

    // this.setNavList()
    return (
      <div className={classes}>
        <div className="nav-content">
          <div className="nav-logo">
            {/* <img className="nav-img" src="http://www.daiwei.org/index/images/logo/favicon.ico" alt=""/> */}
          </div>
          <div className="nav-lists">
            {
              this.lists.map((item: INavList, index: number) => {
                return (
                  <a className={activeLink(item)}
                      key={index}
                      href={item.link}>
                        {item.name}
                  </a>
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

export default withRouter(Nav)
