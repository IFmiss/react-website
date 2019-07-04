import { observable, computed, action } from 'mobx'

import { getNewSelfColor } from './../../config/color'
export default class ColorModel {
  @observable
  mode: string = 'light'

  @action
  changeMode (mode?: string) {
    if (mode) {
      this.mode = mode
      return
    }
    this.mode = this.mode === 'light' ? 'dark' : 'light'
  }
}
