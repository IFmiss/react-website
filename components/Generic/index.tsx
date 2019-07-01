import * as React from 'react'
import './generic.less'
import { IColorInfo } from './../../config/color'
import { NameSpaceStore } from './../../store/types'
import { IStore } from './../../store/types'
import Constance from './../../config/constance'

export interface GenericProps {
  className?: string;
  // store?: IStore;
  // color?: NameSpaceStore.IColorModel;
  prefixClass?: string;
  router?: any;
}

export interface GenericState {}

export default class GenericComponent<P, S> extends React.PureComponent<P, S> {
  props: P & GenericProps;
  state: S & GenericState;

  componentDidMount () {
    console.log('this.props GenericComponent', this.props)
    console.log('this.props1111111111111', this.props)
  }

  static defaultProps = {
    prefixClass: Constance.PROJECT_NAME,
    className: `generic-component ${Constance.PROJECT_NAME}`,
  }
}
