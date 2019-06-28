import * as React from 'react'
import fetch from './../../utils/fetch'
import { IStore } from './../../store/types'
import classNames from 'classnames'
import { observer } from "mobx-react"

interface IMusicProps {
  store?: IStore;
  prefixClass?: string;
  history?: any;
}

interface IMusicState {}

@observer
export default class Music extends React.Component<IMusicProps, IMusicState> {
  public render () {
    const { store, prefixClass } = this.props
    const classes = classNames({
      [`${prefixClass}-music`]: true,
      [`dw-page-router`]: true
    })
    return (
      <div className={classes}>
      </div>
    )
  }
}
