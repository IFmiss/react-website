import * as React from 'react'
import fetch from './../../utils/fetch'
import { IStore } from './../../store/types'
import classNames from 'classnames'
import Constance from './../../config/constance'

interface ISettingProps {}

const Setting = (props: ISettingProps) => {
  const classString = classNames({
    [`${Constance.PROJECT_NAME}-setting`]: true,
    [`dw-page-router`]: true
  })
  return (
    <div className={classString}>
      this is Setting 
    </div>
  )
}

export default Setting