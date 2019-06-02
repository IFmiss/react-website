import ColorModel from './models/color'
import NavModel from './models/nav'
import { IStore } from './types'
const store: IStore = {
  colorStore: new ColorModel(),
  navStore: new NavModel()
}
export default store
