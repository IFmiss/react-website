import * as React from 'react'
import './generic.less'
import { IColorInfo } from './../../config/color'

export interface GenericProps {
  className?: string
}

export interface GenericState {}

export default class GenericComponent<P, S> extends React.Component<P, S> {
  props: P & GenericProps & { children?: any };
  state: S & GenericState;
  
  componentDidMount () {
    console.log('this.props', this.props)
  }

  static defaultProps = {
    className: 'generic-component'
  }
}
