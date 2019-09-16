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

  /** 音乐的歌词进度索引 */
  @observable
  musicLyricIndex: number = 0

  /** 设置歌词进度索引 */
  @action
  setMusicLyricIndex (index: number) {
    this.musicLyricIndex = index
  }

  /** 当前歌词内容 */
  @computed get
  currentLyric (): string {
    switch (this.musicLyric.lrcType) {
      case MusicLyricType.LOADING:
        return '歌词加载中，请稍等'
      case MusicLyricType.ABSOLUTE:
        return '纯音乐，请欣赏'
      case MusicLyricType.HAS_LYRIC:
        const lrc = this.musicLyric.objLrc &&
                    this.musicLyric.objLrc[this.musicLyricIndex] &&
                    this.musicLyric.objLrc[this.musicLyricIndex].lrc
        return lrc || '...'
      default:
        return '暂无歌词'
    }
  }

  /** 当前的音乐lyric */
  @observable
  musicLyric: IMusicLyric = { code: 0, objLrc: [], lrcType: MusicLyricType.LOADING }

  /** 设置音乐lyric */
  @action
  setMusicLyric (lyric: IMusicLyric) {
    this.musicLyric = lyric
  }

  @observable
  lyricIsShow: boolean = false
}
