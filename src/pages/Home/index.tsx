import * as React from 'react'
import fetch from './../../utils/fetch'
import Nav from './../../components/Nav'
import { HomeNav } from './../../config/nav'

interface IHomeProps {
  store?: any
}

interface IHomeState {}

export default class Home extends React.Component<IHomeProps, IHomeState> {
  componentDidMount () {
    console.log(this.props.store.colorStore)
  }
  
  public render () {
    return (
      <div className="home">
        <Nav lists={HomeNav}/>
      </div>
    )
  }
}
