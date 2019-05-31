import * as React from 'react'
import GenericComponent from './../Generic/index'
import { NavLink } from 'react-router-dom'
import { INavLists, INavList } from './../../config/nav'
import classNames from 'classnames'
import { GenericUtils } from '@dw/d-utils'
import './nav.less'

interface INavProps {
  lists: INavLists
}

interface INavState {}

export default class Nav extends GenericComponent<INavProps, INavState> {
  public NavStyle = {
    color: '#333'
  }

  public addHover = () => {

  }

  public removeHover = () => {
    
  }

  public changeColor = () => {
    document.documentElement.style.setProperty(`--color`, GenericUtils.randomColor());
  }

  render () {
    const { lists, prefixClass } = this.props
    const classes = classNames({
      [`${prefixClass}-nav`]: true
    })
    return (
      <div className={classes}>
        <div className="nav-content">
          <div className="nav-logo">
            <img className="nav-img" src="" alt=""/>
          </div>
          <div className="nav-lists">
            {
              lists.map((item: INavList, index: number) => {
                return (
                  <NavLink className="nav-list"
                          to={item.link}
                          key={index}
                          // style={this.NavStyle}
                          onMouseEnter={this.addHover}>{item.name}</NavLink>
                )
              })
            }
          </div>
          <div onClick={this.changeColor}>点击切换颜色</div>
        </div>
      </div>
    )
  }
}
