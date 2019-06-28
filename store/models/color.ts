import { observable, computed, action } from 'mobx'

import { getNewSelfColor } from './../../config/color'
export default class ColorModel {
  @observable
  primaryColor: string = 'blue'

  @action
  initSelfColor () {
    const color = getNewSelfColor()
    console.log('initSelfColor', color)
    this.primaryColor = color.primaryColor
  }
}
