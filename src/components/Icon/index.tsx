import React, { useEffect, useRef, useState } from 'react'
import classNames from 'classnames'
import { PROJECT_NAME } from './../../config/constance'
import './icon.less'

interface IIconProps {
  svgId: string;
}

const Icon: React.FC<IIconProps> = (props) => {
  const classString = classNames({
    [`${PROJECT_NAME}-comp-icon`]: true
  })

  return (
    <div className={classString}>
      <svg>
        <use xlinkHref={`#${props.svgId}`}></use>
      </svg>
    </div>
  )
}

export default Icon
