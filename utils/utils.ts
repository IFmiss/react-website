import Dutils from '@dw/d-utils'

export function isBrowser() {
  const p: any = process
  return p && p.browser
}

/**
 * 改版页面主题模式
 */
export function changePageMode () {
  // document.documentElement.style.setProperty(`--primary-color`, GenericUtils.randomColor());
  const body = document.body
  if (Dutils.DomUtils.hasClass(body, 'light')) {
    document.body.className = 'dark'
    localStorage.setItem('mode', 'dark')
  } else {
    document.body.className = 'light'
    localStorage.setItem('mode', 'light')
  }
}

/**
 * 初始化页面主题模式
 */
export function initPageMode () {
  const storageMode = localStorage.getItem('mode')
  let mode!: string
  if (!storageMode) {
    mode = 'light'
    localStorage.setItem('mode', mode)
  } else {
    mode = storageMode
  }
  document.body.className = mode
}
