import React, { useState, useEffect } from 'react'
import classNames from 'classnames'
import ReactDOM from 'react-dom'
import { PROJECT_NAME } from '../../config/constance'
import Notice, { NoticeType } from './Notice'
import './message.less'

export interface IMessageState {
  type: NoticeType;
  text: string | number;
  duration?: number;
  key?: string;
  onClose?: () => void;
}

export interface IMessageQueueState {
  addMessage (message: IMessageState): void;
}

export interface IMessageQueueProps {}

export const MessageQueue: React.FC<IMessageQueueProps> = () => {
  const transitionTime: number = 300
  const [messageQueue, setMessageQueue] = useState<IMessageState[]>([])
  
  const messageInclude = (message: IMessageState): boolean => {
    return messageQueue.some((item: IMessageState) => message.key === item.key)
  }

  const addMessage = (message: IMessageState) => {
    message.key = getMessagekey()
    message.duration = message.duration ? message.duration : 3000
    if (!messageInclude(message)) {
      // push message
      setMessageQueue((messageQueue: IMessageState[]) => messageQueue.concat([message]))
      if (message.duration > 0) {
        setTimeout(() => {
          removeMessage(message.key)
        }, message.duration)
      }
    }
  }

  const removeMessage = (key: string) => {
    setMessageQueue((messageQueue: IMessageState[]) => messageQueue.filter((item: IMessageState) => {
      if (item.key === key) {
        item.onClose && item.onClose()
        return false
      }
      return item
    }))
  }

  const getMessagekey = () => {
    return `message-${new Date().getTime()}-${messageQueue.length}`
  }

  const classString = classNames({
    [`${PROJECT_NAME}-comp-queue`]: true,
  })
  return (
    <div className={classString}>
      {
        messageQueue.map((message) => (
          <Notice type={message.type}
                  text={message.text}/>
        ))
      }
    </div>
  )
}

const MessageQueueComponent = React.forwardRef(MessageQueue)

function newInstance(props: IMessageQueueProps) {
  const MessageQueueRef = React.createRef<IMessageQueueState>();

  const div = document.createElement('div')
  document.body.appendChild(div)
  ReactDOM.render(<MessageQueueComponent {...props} ref={MessageQueueRef}/>, div)

  const { addMessage } = MessageQueueRef.current as IMessageQueueState

  const destroy = () => {
    ReactDOM.unmountComponentAtNode(div);
    (div.parentNode as HTMLDivElement ).removeChild(div);
  }

  return {
    addMessage (message: IMessageState) {
      return addMessage(message)
    },
    destroy
  }
}

export default newInstance({})
