import * as React from 'react'

interface IHomeProps {
  text: string
}

interface IHomeState {}

export default class Home extends React.Component<IHomeProps, IHomeState> {
  render () {
    return (
      <div>
        Home ...
      </div>
    )
  }
}
