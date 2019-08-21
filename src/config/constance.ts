import { ITypeWriterList } from './../utils/typewriter'
import store from './../store'
import DAudio from './../components/DAudio'
import { getMusicIndexById, getPlayMuiscList, getNextMusicList} from './../utils/music'

export const PROJECT_NAME = 'dw-react-web'
export const TITLE = '未曾遗忘的青春，戴伟的个人博客'
export const TITLE_ENTRY = '哈哈 你又来了'
export const TITLE_OUT = '你走了啊啊'
export const SELF_SHEET_LIST = 2179377798
export const TYPE_WRITER: ITypeWriterList[] = [
  {
    text: 'Hello!!!',
    tagName: 'h1',
    config: {},
    domAttr: {},
    reactAttr: {}
  }, {
    text: '欢迎来到我的个人网站，这也是我个人的第三版网站',
    tagName: 'h2',
    config: {},
    domAttr: {},
    reactAttr: {}
  }, {
    text: '自我介绍一下',
    tagName: 'h2',
    config: {},
    domAttr: {},
    reactAttr: {}
  }, {
    text: '90后，来自安徽芜湖，现在在上海工作，从事前端开发，个人比较活泼开朗吧，没事学学技术，打打游戏听听歌',
    tagName: 'h4',
    config: {},
    domAttr: {},
    reactAttr: {}
  }, {
    text: '说到听歌，给大家推荐一个个人收藏的歌单',
    tagName: 'span',
    config: {},
    domAttr: {},
    reactAttr: {}
  }, {
    text: '《程序员必备，带上耳机代码就是全世界》',
    tagName: 'span',
    config: {},
    domAttr: {
      class: 'underline',
      onclick: async () => {
        const list = await getPlayMuiscList(store.musicStore.currentList)
        DAudio.start(list)
      }
    },
    reactAttr: {
      className: 'underline',
      onClick: async () => {
        const list = await getPlayMuiscList(store.musicStore.currentList)
        DAudio.start(list)
      }
    }
  }
]


export const MUSIC_SHEET_DEFAULT_LIMIT = 30
export const MUSIC_SHEET_TRANSITION_DURATION = MUSIC_SHEET_DEFAULT_LIMIT * 200 / 2

export const MUSIC_SEARCH_DEFAULT_LISMIT = 20

// 排行榜信息
export const MUSIC_RANK_TYPE: any = {
  '0': '云音新歌榜',
  '1': '云音热歌榜',
  '2': '网易原创歌曲榜',
  '3': '云音乐飙升榜',
  '4': '云音乐电音榜',
  '5': 'UK排行榜周榜',
  '6': '美国Billboard周榜',
  '7': 'KTV嗨榜',
  '8': 'iTunes榜',
  '10': '日本Oricon周榜',
  '12': '韩国Mnet排行榜周榜',
  '17': '华语金曲榜',
  '22': '云音乐ACG音乐榜'
}