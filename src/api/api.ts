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
  }
}