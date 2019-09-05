import { artists, artist, MusicGroupList } from './../type'
import { useStore } from './../utils/use'
import { checkMusicById, getMusicDetailById, musicLyricById } from './../pages/Music/action'
import { IMusicInfo } from './../components/DAudio'
import store from '../store';
import { IMusicLyric, MusicLyricType } from './../store/types'

export const parseDuraiton = (duration: number): string => {
  const d = ~~(duration / 1000)
  const minT = ~~(d / 60) >= 10 ? ~~(d / 60) : '0' + ~~(d / 60)
  const minS = ~~(d % 60) >= 10 ? ~~(d % 60) : '0' + ~~(d % 60)
  return minT + ':' + minS
}

// rank 排行转换成 sheet的数据列表格式
export const formatMusicLists = (lists: any[]) => {
  return lists.map((item: any) => {
    item.album = item.al
    item.artists = item.ar
    item.duration = item.dt
    return item
  })
}

export const getMusicIndexById = (id: number): any[] => {
  const musicQueue = store.musicStore.musicListQueue.slice()
  if (musicQueue.length === 0) return [-1, null]
  for (let i = 0; i < musicQueue.length; i++) {
    if (musicQueue[i].id === id) {
      return [i, musicQueue[i]]
    }
  }
  return [-1, null]
}

export const formatMusicArtists = (artists: artists) => {
  console.log('artists', artists)
  return artists.map((artist: artist) => artist.name).join(', ')
}

export const clipImage = (src: string, w: number = 120, h?: number): string => {
  return `${src}?param=${w}y${h ? h : w}`
}

export const getUrlById = (id: number) => {
  return `https://music.163.com/song/media/outer/url?id=${id}.mp3`
}

export const getPlayMuiscList = async (list: MusicGroupList): Promise<IMusicInfo> => {
  await checkMusicById(list.id)
  const { songs : musicDetail } = await getMusicDetailById(list.id) as any
  const formatDetail = formatMusicLists(musicDetail)
  console.log('list', list)
  // 获取歌词
  const res: IMusicLyric = await musicLyricById(list.id) as any
  // 歌词类型判断
  if (res.nolyric) {
    res.lrcType = MusicLyricType.ABSOLUTE
  } else if (res.lrc && res.lrc.lyric) {
    const { lyric } = res.lrc
    res.objLrc = parseLrc(lyric)
    res.lrcType = MusicLyricType.HAS_LYRIC
  } else {
    res.lrcType = MusicLyricType.NOT_FOUND
  }

  console.log('res', res)
  // 提交歌词数据
  store.musicStore.setMusicLyric(res)

  return {
    id: list.id,
    url: getUrlById(list.id),
    coverUrl: clipImage(formatDetail[0].album.picUrl),
    name: list.name,
    singer: formatMusicArtists(list.artists)
  }
}

export const getNextMusicList = (id: number) => {
  let [index, queue] = getMusicIndexById(id)
  const length = store.musicStore.musicListQueue.slice().length

  console.log(index, length)
  // 数据存在
  if (index >= 0 && length > 0) {
    // 最后一个会自己跳转到第一个
    if (index >= length - 1) {
      store.musicStore.setMusicPlayIndex(0)
      return
    }
    store.musicStore.setMusicPlayIndex(++index)
    return
  }
  store.musicStore.setMusicPlayIndex(-1)
}

/**
 * 解码音乐歌词
 */
export const parseLrc = (lrc: any): any[] => {
  if (!lrc) return []
  const lyrics = lrc.split('\n')
  let lrcObj = []
  for (let i = 0; i < lyrics.length; i++) {
    // 解码
    const lyric = decodeURIComponent(lyrics[i])
    const timeReg = /\[\d*:\d*((\.|\:)\d*)*\]/g
    const timeRegExpArr = lyric.match(timeReg)
    if (!timeRegExpArr) continue
    const clause = lyric.replace(timeReg, '')
    for (let k = 0, h = timeRegExpArr.length; k < h; k++) {
      const t = timeRegExpArr[k]
      let min = Number(String(t.match(/\[\d*/i)).slice(1))
      let sec = Number(String(t.match(/\:\d*/i)).slice(1))
      const time = min * 60 + sec
      // lrcObj[time] = clause
      if (clause) {
        lrcObj.push({
          t: time,
          lrc: clause
        })
      }
    }
  }
  console.log('lrcObj', lrcObj)
  return lrcObj
}
