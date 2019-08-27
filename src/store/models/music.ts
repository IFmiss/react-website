import { observable, computed, action, isComputedProp } from 'mobx'
import { DAudioPosition } from './../../components/DAudio'
import { MusicGroupList, MusicGroupLists } from './../../type'
import { MusicPlayType, MusicLyricType, IMusicLyric } from './../types'
import LogUtils from 'd-utils/lib/logUtils'
export default class MusicModel {
  @observable
  playPosition: DAudioPosition = DAudioPosition.BOTTOM_LEFT

  @action
  changePosition (position: DAudioPosition) {
    this.playPosition = position
  }

  /** 设置当前播放播放列表 */
  @action
  setMusicListQueue (lists: MusicGroupLists) {
    this.musicListQueue = lists
  }

  /** 设置播放类型 */
  @action
  setPlayType (type: MusicPlayType) {
    this.playType = type
  }

  /** 设置音乐播放的索引 */
  @action
  setMusicPlayIndex (index: number) {
    this.musicPlayIndex = index
  }

  /** 设置音乐播放的任务 */
  @action
  setMusicPlayTask (lists: MusicGroupLists, index: number, type: MusicPlayType) {
    // this.setCurrentList(list)
    this.setMusicPlayIndex(index)
    this.setPlayType(type)
    this.setMusicListQueue(lists)
    LogUtils.logInfo('播放队列完成')
  }

  /** 当前播放的音乐信息 */
  @computed get
  currentList (): MusicGroupList {
    return this.musicListQueue[this.musicPlayIndex]
  }

  /** 当前音乐的播放索引 */
  @observable
  musicPlayIndex: number = -1

  /** 当前播放类型 */
  @observable
  playType: MusicPlayType = MusicPlayType.NO_TYPE

  /** 当前播放的列表数据 */
  @observable
  musicListQueue: MusicGroupLists = []

  /** 当前的音乐lyric */
  @observable
  musicLyric: IMusicLyric = { code: 0, objLrc: {}, lrcType: 0 }

  /** 设置音乐lyric */
  @action
  setMusicLyric (lyric: IMusicLyric) {
    this.musicLyric = lyric
    console.log('this.musicLyric', this.musicLyric)
  }
}
