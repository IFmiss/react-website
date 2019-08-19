import React, { useState, useEffect } from 'react'
import classNames from 'classnames'
import { PROJECT_NAME } from './../../config/constance'
import LogUtils from 'd-utils/lib/logUtils'
import './notice.less'
import { observer, useObservable, useObserver, useLocalStore, useStaticRendering, useComputed } from "mobx-react-lite"
// import { useStore } from './../../utils/use'
import store from './../../store'

export enum NoticeType {
  INFO = 'info',
  SUCCESS = 'success',
  ERROR = 'error',
  WARNING = 'warning',
  DEFAULT = 'default'
}

export interface INoticeProps {
  type: NoticeType;
  text: string | number;
}

const Notice: React.FC<INoticeProps> = observer((props) => {
  const { mode } = store.colorStore
  const { type, text } = props
  const theme = localStorage.getItem
  const classString = classNames({
    [`${PROJECT_NAME}-comp-notice`]: true,
    [`notice-${type}`]: true,
    [`${mode}`]: true
  })
  return (
    <div className={classString}>
      <span className="notice-text">{text}</span>
    </div>
  )
})

export default Notice
