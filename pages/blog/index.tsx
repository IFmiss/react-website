import * as React from 'react'
import fetch from '../../utils/fetch'
import { IStore } from '../../store/types'
import classNames from 'classnames'

interface IBlogProps {
  store?: IStore;
  prefixClass?: string;
}

interface IBlogState {}

export default class Blog extends React.Component<IBlogProps, IBlogState> {
  public render () {
    const { store, prefixClass } = this.props
    console.log('blog', this.props)
    const classes = classNames({
      [`${prefixClass}-blog`]: true,
      [`dw-page-router`]: true
    })
    return (
      <div className={classes}>
        this is Blog 
      </div>
    )
  }
}
