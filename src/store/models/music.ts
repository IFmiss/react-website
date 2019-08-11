import { observable, computed, action, isComputedProp } from 'mobx'
import { DAudioPosition } from './../../components/DAudio'
import { MusicGroupList, MusicGroupLists } from './../../type'
import { MusicPlayType } from './../types'
export default class MusicModel {
  @observable
  playPosition: DAudioPosition = DAudioPosition.BOTTOM_LEFT

  @action
  changePosition (position: DAudioPosition) {
    this.playPosition = position
  }

  @observable
  currentList!: MusicGroupList

  @observable
  playLists!: MusicGroupLists

  @observable
  playType!: MusicPlayType
}
