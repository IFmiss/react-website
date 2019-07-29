import { artists, artist } from './../../type'

export const parseDuraiton = (duration: number): string => {
  const d = Math.floor(duration / 1000)
  const minT = Math.floor(d / 60) >= 10 ? Math.floor(d / 60) : '0' + Math.floor(d / 60)
  const minS = Math.floor(d % 60) >= 10 ? Math.floor(d % 60) : '0' + Math.floor(d % 60)
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

export const formatMusicArtists = (artists: artists) => {
  return artists.map((artist: artist) => artist.name).join(', ')
}
