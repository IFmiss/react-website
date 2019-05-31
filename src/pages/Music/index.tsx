import * as React from 'react'
import fetch from './../../utils/fetch'
import { IStore } from './../../store/types'
import classNames from 'classnames'

interface IMusicProps {
  store?: IStore;
  prefixClass?: string;
}

interface IMusicState {}

export default class Music extends React.Component<IMusicProps, IMusicState> {
  public render () {
    const { store, prefixClass } = this.props
    console.log('Music', this.props)
    const classes = classNames({
      [`${prefixClass}-music`]: true,
      [`dw-page-router`]: true
    })
    return (
      <div className={classes}>
        11111
      </div>
    )
  }
}
