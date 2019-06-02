import * as React from 'react'
import GenericComponent from './../../components/Generic/index'
import { IColorInfo } from './../../config/color'
import './loading.less';

interface ILoadingProps {
  tip?: string
  isLoading: boolean
  pastDelay: boolean
  timedOut: boolean
  error: any
  retry: () => void
}

interface ILoadingState {}

export default class Loading extends React.Component<ILoadingProps, ILoadingState> {
  static defualtProps = {
    tip: 'loading ...'
  }

  render () {
    const {tip} = this.props
    return (
      <div className="loadable-loading">
        {tip}
      </div>
    )
  }
}
