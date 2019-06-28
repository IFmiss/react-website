import * as React from 'react'
import fetch from './../../utils/fetch'
import { IStore } from './../../store/types'
import classNames from 'classnames'

interface ISettingProps {
  store?: IStore;
  prefixClass?: string;
}

interface ISettingState {}

export default class Setting extends React.Component<ISettingProps, ISettingState> {
  public render () {
    const { store, prefixClass } = this.props
    const classes = classNames({
      [`${prefixClass}-setting`]: true,
      [`dw-page-router`]: true
    })
    return (
      <div className={classes}>
        this is Setting 
      </div>
    )
  }
}
