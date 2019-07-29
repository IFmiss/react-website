import { observable, computed, action, isComputedProp } from 'mobx'
import { DAudioPosition } from './../../components/DAudio'
export default class MusicModel {
  @observable
  playPosition: DAudioPosition = DAudioPosition.BOTTOM_LEFT

  @action
  changePosition (position: DAudioPosition) {
    this.playPosition = position
  }
}
