import * as React from 'react'
import fetch from './../../utils/fetch'
import { IStore } from './../../store/types'
import classNames from 'classnames'

interface IHomeProps {
  store?: IStore;
  prefixClass?: string;
}

interface IHomeState {}

export default class Home extends React.Component<IHomeProps, IHomeState> {
  public render () {
    const { store, prefixClass } = this.props
    console.log('Home', this.props)
    const classes = classNames({
      [`${prefixClass}-home`]: true,
      [`dw-page-router`]: true
    })
    return (
      <div className={classes}>
        this is home 
      </div>
    )
  }
}
