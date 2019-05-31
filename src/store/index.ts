import ColorModel from './models/color'
import { IStore } from './types'
const store: IStore = {
  colorStore: new ColorModel()
}
export default store
