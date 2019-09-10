import React, { useRef, useState, useEffect } from 'react'
import classNames from 'classnames'
import { PROJECT_NAME } from './../../config/constance'
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './sider-warp.less'
import Icon from './../Icon'

interface ISiderWarpProps {
  show: boolean;
  switchTop?: string;
  type?: string;
}

const SiderWarp: React.FC<ISiderWarpProps> = (props) => {
  const [show, setShow] = useState<boolean>(props.show)

  const classString = classNames({
    [`${PROJECT_NAME}-comp-sider-warp`]: true,
    [`show`]: show,
    ['fixed']: props.type && props.type === 'fixed',
    ['auto']: props.type && props.type !== 'fixed',
  })

  const styleTop = {
    top: props.switchTop ? props.switchTop : '50px'
  }

  const hideComp = () => {
    setShow((show) => show = false)
  }

  const showComp = () => {
    setShow((show) => show = true)
  }

  const toggleSiderWarp = () => {
    setShow((show) => show = !show)
  }

  return (
    <section className={classString}>
      <div className='mask' onClick={hideComp}></div>
      <div className='content'>
        <div className="content-switch" onClick={toggleSiderWarp} style={styleTop}>
          <Icon svgId="close" color="red" hoverColor="blue"></Icon>
        </div>
        {props.children}
      </div>
    </section>
  )
}

SiderWarp.defaultProps = {
  show: false,
  switchTop: '50px',
  type: 'fixed'
}

export default SiderWarp
