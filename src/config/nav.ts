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
  }
]
