import './../style/type-writer.less'

interface ItyperConfig {
  herf?: string
  interver?: number
  sleep?: number
}

export default function typeWriter (text: string, tagName: string, container: HTMLElement, config?: ItyperConfig): Promise<void> {
  const el = document.createElement(tagName)
  if (tagName === 'a') {
    console.log(config)
    if (config && config.herf) {
      el.setAttribute('href', config.herf)
    }
  }
  const splitBar = document.createElement('span')
  splitBar.className = 'type-writer-bar'

  el.appendChild(splitBar)

  try {
    container.appendChild(el)
  } catch (e) {}

  let timer: any = null,
      currentIndex: number = 0,
      interver = config && config.interver || 100,
      sleep = config && config.sleep || 300

  return new Promise((resolve, reject) => {
    function next () {
      const textNode = document.createTextNode(text[currentIndex])
      el.insertBefore(textNode, splitBar)
      currentIndex++
      if (currentIndex < text.length) {
        timer = setTimeout(() => {
          next()
        }, interver)
      } else {
        timer = setTimeout(() => {
          // el.removeChild(splitBar)
          clearTimeout(timer)
          resolve()
        }, sleep)
      }
    }
    next()
  })
}
