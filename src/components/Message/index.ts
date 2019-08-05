import Message from './Message'
import { NoticeType } from './Notice'

const notice = (type: NoticeType,
                text: string | number,
                duration: number = 3000,
                onClose?: () => void) => {
  return Message.addMessage({
    type,
    text,
    duration,
    onClose,
  })
}

export default {
  info (text: string | number, duration: number = 3000, onClose?: () => void) {
    return notice(NoticeType.INFO, text, duration, onClose)
  },

  success (text: string | number, duration: number = 3000, onClose?: () => void) {
    return notice(NoticeType.SUCCESS, text, duration, onClose)
  },

  error (text: string | number, duration: number = 3000, onClose?: () => void) {
    return notice(NoticeType.ERROR, text, duration, onClose)
  },

  warning (text: string | number, duration: number = 3000, onClose?: () => void) {
    return notice(NoticeType.WARNING, text, duration, onClose)
  },

  default (text: string | number, duration: number = 3000, onClose?: () => void) {
    return notice(NoticeType.DEFAULT, text, duration, onClose)
  }
}
