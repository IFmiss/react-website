export const selfBaseUrl = ''
export const musicBaseUrl = 'http://localhost:3000'
export default {
  MUSIC: {
    /** 歌单列表 */
    SHEET_LISTS_BY_CAT: `${musicBaseUrl}/top/playlist`,

    /** 音频搜索 */
    MUSIC_SEARCH: `${musicBaseUrl}/search`,

    /** 获取视频播放地址 */
    MUSIC_PLAY_URL_BY_ID: `${musicBaseUrl}/video/url`,

    /** 获取排行榜数据 */
    MUSIC_TOP_LIST: `${musicBaseUrl}/top/list`,

    /** 根据id获取音乐详情 */
    MUSIC_DETAIL_BY_ID: `${musicBaseUrl}/song/detail`,
    
    /** 根据id获取音乐Url */
    MUSIC_URL_BY_ID: `${musicBaseUrl}/song/url`,

    /** 校验音频是否可以播放 */
    MUSIC_CHECK: `${musicBaseUrl}/check/music`,

    /** 获取歌单详情 */
    MUSIC_SHEET_DETAIL: `${musicBaseUrl}/playlist/detail`
  }
}