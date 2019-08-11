import ColorModel from './models/color'
import NavModel from './models/nav'
import MusicModel from './models/music'
import { IStore } from './types'
const store: IStore = {
  colorStore: new ColorModel(),
  navStore: new NavModel(),
  musicStore: new MusicModel()
}
export default store
