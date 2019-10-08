import { randomColor } from 'd-utils/lib/genericUtils'
import { hasClass } from 'd-utils/lib/domUtils'
import store from './../store'
import { DAudioPosition } from './../components/DAudio'

/**
 * 改版页面主题模式
 */
export function changePageMode () {
  const container: any = document.getElementById('dw-react-web-container')
  const body: HTMLElement = document.body
  if (hasClass(container, 'light')) {
    container.className = 'dark'
    body.className = 'dark'
    store.colorStore.changeMode('dark')
    localStorage.setItem('mode', 'dark')
  } else {
    container.className = 'light'
    body.className = 'light'
    store.colorStore.changeMode('light')
    localStorage.setItem('mode', 'light')
  }
}

export function randomPrimaryColor () {
  const color = randomColor()
  const container: any = document.getElementById('dw-react-web-container')
  container.style.setProperty(`--primary-color`, color);
}

/**
 * 初始化页面主题模式
 */
export function initPageMode (): string {
  const storageMode = localStorage.getItem('mode')
  const body: HTMLElement = document.body
  let mode!: string
  if (!storageMode) {
    mode = 'light'
    localStorage.setItem('mode', mode)
  } else {
    mode = storageMode
  }
  store.colorStore.changeMode(mode)
  body.className = mode
  return mode
}

/**
 * 初始化音频配置
 */
export function initDAudiConfig () {
  const position = localStorage.getItem('daudio-positon')
  if (Number(position) === DAudioPosition.BOTTOM_LEFT) {
    localStorage.setItem('daudio-positon', String(DAudioPosition.BOTTOM_LEFT))
  } else {
    localStorage.setItem('daudio-positon', String(DAudioPosition.BOTTOM_RIGHT))
  }
}

/**
 * nav 设置切换类型
 */
export function initNavType (type: number) {
  store.navStore.setNavLists(type)
}

/**
 * 判断是否是开发环境
 */
export function isProduction (): boolean {
  return process.env.NODE_ENV === 'production'
}

export function isTitle (tagName: string): number {
  const titleArr = ['H1', 'H2', 'H3', 'H4', 'H5', 'H6']
  if (titleArr.includes(tagName)) {
    return +tagName.slice(1)
  }
  return 0
}
