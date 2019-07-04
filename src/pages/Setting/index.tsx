import React from 'react'
import fetch from './../../utils/fetch'
import { IStore } from './../../store/types'
import classNames from 'classnames'
import Constance from './../../config/constance'
import Switch from './../../components/Switch'

interface ISettingProps {}

const Setting = (props: ISettingProps) => {
  const classString = classNames({
    [`${Constance.PROJECT_NAME}-setting`]: true,
    [`dw-page-router`]: true
  })
  return (
    <div className={classString}>
      <h1>this is Setting </h1>
      <Switch checked/>
    </div>
  )
}

export default Setting