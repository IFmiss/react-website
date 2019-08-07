import React, { useState, useEffect, useRef, useImperativeHandle } from 'react'
import classNames from 'classnames'
import ReactDOM from 'react-dom'
import { PROJECT_NAME } from '../../config/constance'
import Notice, { NoticeType } from './Notice'
import './message.less'
import { CSSTransition, TransitionGroup } from 'react-transition-group';

export interface IMessageState {
  type: NoticeType;
  text: string | number;
  duration?: number;
  key?: string;
  id?: number;
  onClose?: () => void;
}

export interface IMessageQueueState {
  addMessage (message: IMessageState): void;
}

export interface IMessageQueueProps {}

const MessageQueue: React.FC<IMessageQueueProps> = (props, ref) => {
  let noticeId = 0
  const transitionTime: number = 300
  const [messageQueue, setMessageQueue] = useState<IMessageState[]>([])
  
  const messageInclude = (message: IMessageState): boolean => {
    return messageQueue.some((item: IMessageState) => message.key === item.key)
  }

  const addMessage = (message: IMessageState) => {
    noticeId ++
    message.key = getMessagekey()
    message.id = noticeId
    message.duration = message.duration ? message.duration : 3000
    if (!messageInclude(message)) {
      // push message
      setMessageQueue((messageQueue: IMessageState[]) => messageQueue.concat([message]))
      if (message.duration > 0) {
        setTimeout(() => {
          message.key && removeMessage(message.key)
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
    [`${PROJECT_NAME}-comp-notice-queue`]: true,
  })

  useImperativeHandle(ref, () => ({
    addMessage
  }))

  return (
    <div className={classString}>
      {
        messageQueue.map((message) => (
          <CSSTransition in={true}
                        timeout={0}
                        key={message.id}
                        classNames="side-left-fade"
                        appear={true}
                        unmountOnExit={false}>
            <Notice type={message.type}
                    key={message.id}
                    text={message.text}/>
          </CSSTransition>
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
  const destroy = () => {
    ReactDOM.unmountComponentAtNode(div);
    (div.parentNode as HTMLDivElement ).removeChild(div);
  }

  const { addMessage } = MessageQueueRef.current as IMessageQueueState
  return {
    addMessage (message: IMessageState) {
      return addMessage(message)
    },
    destroy
  }
}

export default newInstance({})
