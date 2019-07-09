import Http from './../../utils/fetch'
import API from './../../api/api'
// 歌单信息
export const getSheetLists = async (cat: string = '', limit: number = 20) => {
  const data = await Http.get(API.MUSIC.SHEET_LISTS_BY_CAT, {
    cat,
    limit
  })
  return data
}
