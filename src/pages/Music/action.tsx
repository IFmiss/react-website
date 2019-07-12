import Http from './../../utils/fetch'
import API from './../../api/api'
import { MUSIC_SHEET_DEFAULT_LIMIT } from '../../config/constance'
// 歌单信息
export const getSheetLists = async (cat: string = '', offset: number = 0, limit: number = MUSIC_SHEET_DEFAULT_LIMIT) => {
  const data = await Http.get(API.MUSIC.SHEET_LISTS_BY_CAT, {
    cat,
    offset,
    limit,
  })
  return data
}
