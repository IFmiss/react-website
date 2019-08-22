import { checkType } from 'd-utils/lib/storeUtils'
import './../style/type-writer.less'

interface ItyperConfig {
  interver?: number
  sleep?: number
}

interface IDomAttr {
  [propName: string]: any;
}

export interface ITypeWriterList {
  text: string;
  tagName: string;
  config: ItyperConfig;
  container?: Element;
  domAttr: IDomAttr;
  reactAttr: IDomAttr;
}

export function getAttrEntries (propName: string, obj: any): any[] {
  const val = obj[propName]
  const type = checkType(val)
  switch (checkType(val)) {
    case 'string':
    case 'function':
      return [type, val]
    case 'object':
      return [type, {...val}]
    default:
      return [type, val]
  }
}

export default function typeWriter (typeWriterList: ITypeWriterList): Promise<void> {
  console.log(typeWriterList)
  const {text, tagName, container, config, domAttr } = typeWriterList
  const el = document.createElement(tagName)

  Object.keys(domAttr).forEach(((item) => {
    const [type, prop] = getAttrEntries(item, domAttr)
    if (type === 'function') {
      el.addEventListener(item, prop)
    } else {
      el.setAttribute(item, prop)
    }
  }))
  
  const splitBar = document.createElement('span')
  splitBar.className = 'type-writer-bar'

  el.appendChild(splitBar)

  try {
    container && container.appendChild(el)
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
