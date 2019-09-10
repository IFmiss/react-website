import React, { useEffect, useRef, useState } from 'react'
import classNames from 'classnames'
import { PROJECT_NAME, SVG_DEFAULT_COLOR } from './../../config/constance'
import './icon.less'

interface IIconProps {
  svgId: string;
  size?: number;
  color?: string;
  hoverColor?: string;
  activeColor?: string;
  active?: boolean;
}

const Icon: React.FC<IIconProps> = (props) => {
  const [color, setColor] = useState<string | any>(props.active ? props.activeColor : (props.color || SVG_DEFAULT_COLOR))

  const svgStyle: any = {
    'width': `${ props.size ? props.size : 16 }px`,
    'height': `${ props.size ? props.size : 16 }px`,
  }

  const classString = classNames({
    [`${PROJECT_NAME}-comp-icon`]: true
  })

  const setHover = (): boolean => {
    if (props.hoverColor) {
      setColor((color: any) => color = props.hoverColor)
      return true
    }
    return false
  }

  const setDefault = (): boolean => {
    if (props.hoverColor) {
      setColor((color: any) => color = props.color || SVG_DEFAULT_COLOR)
      return true
    }
    return false
  }

  const mouseEnter = () => {
    setHover()
  }

  const mouseLeave = () => {
    setDefault()
  }

  return (
    <div className={classString}>
      <svg style={svgStyle} onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
        <use xlinkHref={`#${props.svgId}`} fill={color}></use>
      </svg>
    </div>
  )
}

export default Icon
