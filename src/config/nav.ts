import { NAV_TYPE } from './../enum'
export interface INavList {
  link: string
  name: string
  type: NAV_TYPE
  key: string
}

export type INavLists = INavList[]

export const HomeNav: INavLists = [
  {
    name: '首页',
    link: '/home',
    type: NAV_TYPE.HOME,
    key: 'home_index',
  },
  {
    name: '博客',
    link: '/blog',
    type: NAV_TYPE.HOME,
    key: 'blog_index',
  }, {
    name: '音乐',
    link: '/music/sheet',
    type: NAV_TYPE.MUSIC,
    key: 'music_sheet',
  }, {
    name: '设置',
    link: '/setting',
    type: NAV_TYPE.HOME,
    key: 'setting_index',
  }
]

export const MusicNav: INavLists = [
  {
    name: '去首页',
    link: '/home',
    type: NAV_TYPE.HOME,
    key: 'home_index',
  }, {
    name: '搜索',
    link: '/music/search',
    type: NAV_TYPE.MUSIC,
    key: 'music_search',
  }, {
    name: '排行榜',
    link: '/music/rank',
    type: NAV_TYPE.MUSIC,
    key: 'music_rank',
  }, {
    name: '专辑列表',
    link: '/music/sheet',
    type: NAV_TYPE.MUSIC,
    key: 'music_sheet',
  }, {
    name: '设置',
    link: '/setting',
    type: NAV_TYPE.MUSIC,
    key: 'setting_index',
  }
]