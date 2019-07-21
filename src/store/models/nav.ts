import { get, set, observable, values, computed, action } from 'mobx'
import { INavLists, HomeNav, MusicNav } from './../../config/nav'
import { NAV_TYPE } from './../../enum'
import LogUtils from 'd-utils/lib/logUtils'
export default class ColorModel {
  @observable
  lists: INavLists = HomeNav

  @action.bound
  setNavLists (type: number) {
    switch (type) {
      case NAV_TYPE.MUSIC:
        this.lists = MusicNav
        break;
      default:
        this.lists = HomeNav
    }
    LogUtils.logInfo(this.lists)
  }
}
