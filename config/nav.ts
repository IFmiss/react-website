export interface INavList {
  link: string
  name: string
}

export type INavLists = INavList[]

export const HomeNav: INavLists = [
  {
    name: '首页',
    link: '/home'
  }, {
    name: '博客',
    link: '/blog'
  }, {
    name: '音乐',
    link: '/music/sheet'
  }, {
    name: '设置',
    link: '/setting'
  }
]

export const MusicNav: INavLists = [
  {
    name: '去首页',
    link: '/home'
  }, {
    name: '搜索',
    link: '/music/search'
  }, {
    name: '排行榜',
    link: '/music/rank'
  }, {
    name: '专辑列表',
    link: '/music/sheet'
  }
]