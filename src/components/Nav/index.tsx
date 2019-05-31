import * as React from 'react'
import GenericComponent from './../Generic/index'
import { Link } from 'react-router-dom'
import { INavLists, INavList } from './../../config/nav'
import './nav.less'

interface INavProps {
  lists: INavLists
}

interface INavState {}

export default class Nav extends GenericComponent<INavProps, INavState> {
  public linkClass = (url: string) => {
    return location.pathname.includes(url) ? 'nav-link active-router-link' : 'nav-link'
  }

  componentDidMount () {
    console.log(this.props)
  }

  render () {
    const { lists, className, prefixClass } = this.props
    const classNames = ({
      [`${prefixClass}-nav`]: true
    })
    return (
      <div className={`${className} react-web-nav`}>
        <div className="nav-content">
          <div className="nav-logo">
            <img className="nav-img" src="" alt=""/>
          </div>
          {
            lists.map((item: INavList, index: number) => {
              return (
                <Link className={this.linkClass(item.link)} to={item.link} key={index}>{item.name}</Link>
              )
            })
          }
        </div>
      </div>
    )
  }
}
