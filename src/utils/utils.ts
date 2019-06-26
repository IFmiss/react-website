import { GenericUtils } from '@dw/d-utils'
import { hasClass } from '@dw/d-utils/lib/domUtils'

/**
 * 改版页面主题模式
 */
export function changePageMode () {
  // document.documentElement.style.setProperty(`--primary-color`, GenericUtils.randomColor());
  const body = document.body
  if (hasClass(body, 'light')) {
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
