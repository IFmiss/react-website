import { artists, artist, MusicGroupList } from './../../type'
import { useStore } from './../utils/use'
import { checkMusicById, getMusicDetailById } from './../pages/Music/action'
import { IMusicInfo } from './../components/DAudio'
import store from '../store';

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

export const getMusicIndexById = (id: number): number | MusicGroupList => {
  const musicQueue = store.musicStore.musicListQueue.slice()
  if (musicQueue.length === 0) return -1
  for (let i = 0; i < musicQueue.length; i++) {
    if (musicQueue[i].id === id) {
      return [i, musicQueue[i]]
    }
  }
  return [-1, null]
}

export const formatMusicArtists = (artists: artists) => {
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