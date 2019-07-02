const Dutils = isBrowser() ? require('./d-utils.js') : undefined

export function isBrowser() {
  const p: any = process
  return p && p.browser
}

/**
 * 改版页面主题模式
 */
export function changePageMode () {
  // document.documentElement.style.setProperty(`--primary-color`, GenericUtils.randomColor());
  const container = document.getElementById('dw-theme-container')
  if (Dutils && Dutils.DomUtils.hasClass(container, 'light')) {
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
export function initPageMode () {
  if (!isBrowser()) return
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
