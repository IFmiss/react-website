import Http from './../../utils/fetch'
import API from './../../api/api'
import {
  MUSIC_SHEET_DEFAULT_LIMIT,
  MUSIC_SEARCH_DEFAULT_LISMIT,
} from '../../config/constance'
// 歌单信息
export const getSheetLists = async (cat: string = '', offset: number = 0, limit: number = MUSIC_SHEET_DEFAULT_LIMIT) => {
  const data = await Http.get(API.MUSIC.SHEET_LISTS_BY_CAT, {
    cat,
    offset,
    limit,
  })
  return data
}

// 歌曲搜索
export const getSearchLists = async (keywords: string, offset: number = 0, limit: number = MUSIC_SEARCH_DEFAULT_LISMIT) => {
  const data = await Http.get(API.MUSIC.MUSIC_SEARCH, {
    keywords,
    offset,
    limit,
  })
  return data
}

// 歌曲排行列表
export const getRankLists = async (idx: string = '1', offset: number = 0, limit: number = MUSIC_SEARCH_DEFAULT_LISMIT) => {
  const data = await Http.get(API.MUSIC.MUSIC_TOP_LIST, {
    idx,
    offset,
    limit,
  })
  return data
}

// 获取歌曲的详细信息
export const getMusicDetailById = async (id: number) => {
  const data = await Http.get(API.MUSIC.MUSIC_DETAIL_BY_ID, {
    ids: id
  })
  return data
}

// 获取歌曲的URL
export const getMusicUrlById = async (id: number) => {
  const data = await Http.get(API.MUSIC.MUSIC_PLAY_URL_BY_ID, {
    id
  })
  return data
}

// 校验音乐是否可以播放
export const checkMusicById = async (id: number) => {
  const data = await Http.get(API.MUSIC.MUSIC_CHECK, {
    id
  })
  return data
}

// 根据id获取音乐歌词
export const musicLyricById = async (id: number) => {
  const data = await Http.get(API.MUSIC.LYRIC, {
    id
  })
  return data
}

// 根据id获取歌单详情
export const sheetDetailById = async (id: number) => {
  const data = await Http.get(API.MUSIC.MUSIC_SHEET_DETAIL, {
    id
  })
  return data
}
