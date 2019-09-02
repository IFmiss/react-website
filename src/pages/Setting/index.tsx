import React, { useState, useMemo, useRef } from 'react'
import fetch from './../../utils/fetch'
import { IStore, MusicLyricType } from './../../store/types'
import { observer, useObservable, useObserver, useLocalStore, useStaticRendering, useComputed } from "mobx-react-lite"
import { useStore } from './../../utils/use'
import classNames from 'classnames'
import './setting.less'
import { PROJECT_NAME } from './../../config/constance'
import Switch from './../../components/Switch'
import { changePageMode } from './../../utils/utils'
import { randomPrimaryColor } from './../../utils/utils'
import LogUtils from 'd-utils/lib/logUtils';
import store from '../../store';
import Lyric from './../../components/Lyric'

interface ISettingProps {}

const Setting = observer((props: ISettingProps) => {
  const classString = classNames({
    [`${PROJECT_NAME}-setting`]: true,
    [`dw-page-router`]: true
  })

  let [isDark, setDark] = useState(useStore().colorStore.mode === 'dark')
  const selfSettingRef = useRef<null | any>(false)

  console.log('lyric isShowLyric', store.musicStore.lyricIsShow)
  selfSettingRef.current = store.musicStore.lyricIsShow

  const changePageModeFn = (isDarkMode: boolean) => {
    setDark(() => isDark = isDarkMode)
    changePageMode()
  }

  const changeMusicLyric = () => {
    // const show = useStore().musicStore.lyricIsShow
    if (selfSettingRef.current) {
      selfSettingRef.current = false
      Lyric.close()
    } else {
      selfSettingRef.current = true
      Lyric.show()
    }
  }

  let [testProps, setTestProps] = useState(true)
  const changeTest = (checked: boolean) => {
    setTestProps(testProps => checked)
  }
  return (
    <div className={classString} ref={selfSettingRef}>
      <h2 className={`${PROJECT_NAME}-setting-title`}>Setting</h2>
      <h4 className={`${PROJECT_NAME}-setting-wrap-title`}>
        基本设置
      </h4>
      <ul className={`${PROJECT_NAME}-setting-wrap-content`}>
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
          <Switch checked={selfSettingRef.current}
                  onChange={changeMusicLyric}
                  unCheckedName="关"
                  checkedName="开"/>
        </li>
      </ul>
    </div>
  )
})

export default Setting