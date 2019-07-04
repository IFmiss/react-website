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
      <h1>this is Setting { useStore().colorStore.mode } </h1>
      <Switch checked={useStore().colorStore.mode === 'dark'} onChange={changePageMode}/>
    </div>
  )
})

export default Setting