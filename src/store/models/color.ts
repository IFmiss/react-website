import { observable, computed, action } from 'mobx'

import { getNewSelfColor } from './../../config/color'
export default class ColorModel {
  @observable selfColorInfo: any = {}

  @action
  initSelfColor () {
    const color = getNewSelfColor()
    console.log('initSelfColor', color)
    this.selfColorInfo = color
  }
}
