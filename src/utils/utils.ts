import { GenericUtils } from '@dw/d-utils'
import { hasClass } from '@dw/d-utils/lib/domUtils'

/**
 * 改版页面主题模式
 */
export function changePageMode () {
  // document.documentElement.style.setProperty(`--primary-color`, GenericUtils.randomColor());
  const container = document.getElementById('dw-react-web-container')
  if (hasClass(container, 'light')) {
    container.className = 'dark'
    localStorage.setItem('mode', 'dark')
  } else {
    container.className = 'light'
    localStorage.setItem('mode', 'light')
  }
}

/**
 * 初始化页面主题模式
 */
export function initPageMode (): string {
  const storageMode = localStorage.getItem('mode')
  let mode!: string
  if (!storageMode) {
    mode = 'light'
    localStorage.setItem('mode', mode)
  } else {
    mode = storageMode
  }
  return mode
}
