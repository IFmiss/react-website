import { observable, computed, action } from 'mobx'
import { INavLists, HomeNav } from './../../config/nav'
export default class ColorModel {
  @observable
  lists: INavLists = HomeNav

  @action
  setNavLists (navList: INavLists) {
    this.lists.clear()
    this.lists.replace()
  }
}
