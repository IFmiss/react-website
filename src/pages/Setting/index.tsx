import React, { useState } from 'react'
import fetch from './../../utils/fetch'
import { IStore } from './../../store/types'
import { observer, useObservable, useObserver, useLocalStore, useStaticRendering, useComputed } from "mobx-react-lite"
import { useStore } from './../../utils/use'
import classNames from 'classnames'
import './setting.less'
import { PROJECT_NAME } from './../../config/constance'
import Switch from './../../components/Switch'
import { changePageMode } from './../../utils/utils'
import { randomPrimaryColor } from './../../utils/utils'
import LogUtils from '@dw/d-utils/lib/logUtils';

interface ISettingProps {}

const Setting = observer((props: ISettingProps) => {
  const classString = classNames({
    [`${PROJECT_NAME}-setting`]: true,
    [`dw-page-router`]: true
  })

  let [isDark, setDark] = useState(useStore().colorStore.mode === 'dark')
  
  const changePageModeFn = (isDarkMode: boolean) => {
    setDark(isDark = isDarkMode)
    changePageMode()
  }

  let [testProps, setTestProps] = useState(true)
  const changeTest = (checked: boolean) => {
    setTestProps(testProps => checked)
  }
  return (
    <div className={classString}>
      <h2 className={`${PROJECT_NAME}-setting-title`}>Setting</h2>
      <h4 className={`${PROJECT_NAME}-setting-wrap-title`}>
        基本设置
      </h4>
      <ul className={`${PROJECT_NAME}-setting-wrap-content`}>
        <li className={`${PROJECT_NAME}-setting-wrap-content-list`}>
          <span>护眼模式</span>
          <Switch checked={isDark} onChange={changePageModeFn}/>
        </li>
        <li className={`${PROJECT_NAME}-setting-wrap-content-list`}>
          <span>护眼模式</span>
          <Switch checked={isDark} onChange={changePageModeFn}/>
        </li>
        <li className={`${PROJECT_NAME}-setting-wrap-content-list`}>
          <span>护眼模式</span>
          <Switch checked={isDark} onChange={changePageModeFn}/>
        </li>
      </ul>
      <h4 className={`${PROJECT_NAME}-setting-wrap-title`}>
        音乐设置
      </h4>
      <ul className={`${PROJECT_NAME}-setting-wrap-content`}>
        <li className={`${PROJECT_NAME}-setting-wrap-content-list`}>
          <span>歌词显示</span>
          {/* <Switch checked={false}
                  // onChange={changePageMode}
                  unCheckedName="关"
                  checkedName="开"/> */}
          {/* <Switch checked={testProps} onChange={changeTest}/> */}
          <Switch checked={testProps} onChange={changeTest}/>
        </li>
      </ul>
    </div>
  )
})

export default Setting