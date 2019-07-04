import React from 'react'
import fetch from './../../utils/fetch'
import { IStore } from './../../store/types'
import { observer, useObservable, useObserver, useLocalStore, useStaticRendering, useComputed } from "mobx-react-lite"
import { useStore } from './../../utils/use'
import classNames from 'classnames'
import Constance from './../../config/constance'
import Switch from './../../components/Switch'
import { changePageMode } from './../../utils/utils'

interface ISettingProps {}

const Setting = observer((props: ISettingProps) => {
  const classString = classNames({
    [`${Constance.PROJECT_NAME}-setting`]: true,
    [`dw-page-router`]: true
  })
  return (
    <div className={classString}>
      <h2 className={`${Constance.PROJECT_NAME}-setting-title`}>Setting</h2>
      <p>基本设置</p>
      <li>
        <span>护眼模式</span>
        <Switch checked={useStore().colorStore.mode === 'dark'} onChange={changePageMode}/>
      </li>
      <p>音乐设置</p>
      <p>音乐设置</p>
    </div>
  )
})

export default Setting