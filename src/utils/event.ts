import { TITLE, TITLE_ENTRY, TITLE_OUT } from './../config/constance'
class EventClass {
  private t: any = null
  public addVisiblityChange () {
    const self = this
    // visibilitychange
    const onVisibilityChange = function () {
      clearTimeout(self.t)
      if (!document['hidden']) {
        document.title = TITLE_ENTRY
        self.t = setTimeout(() => {
          document.title = TITLE
        }, 3000)
      } else {
        document.title = TITLE_OUT
      }
    }
    document.addEventListener('visibilitychange', onVisibilityChange)
  }
}

const selfEvent = new EventClass()
export default selfEvent
