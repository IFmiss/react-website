import * as React from 'react'

interface ILoadingProps {
  text: string
}

interface ILoadingState {}

export default class Loading extends React.Component<ILoadingProps, ILoadingState> {
  render () {
    return (
      <div>
        loading ...
      </div>
    )
  }
}
