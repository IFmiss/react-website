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
  console.log(DAudioPosition)
  const position = localStorage.getItem('daudio-positon')
  if (Number(position) === DAudioPosition.BOTTOM_LEFT) {
    localStorage.setItem('daudio-positon', String(DAudioPosition.BOTTOM_LEFT))
  } else {
    localStorage.setItem('daudio-positon', String(DAudioPosition.BOTTOM_RIGHT))
  }
}
