import ColorModel from './models/color'
import NavModel from './models/nav'
// import { isBrowser } from './../utils/utils'
import { IStore } from './types'
const store: IStore = {
  colorStore: new ColorModel(),
  navStore: new NavModel(),
}

console.log('this is store index.ts', store)
export function initializeStore () {
  return store
}

export default store
