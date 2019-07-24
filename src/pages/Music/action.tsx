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

