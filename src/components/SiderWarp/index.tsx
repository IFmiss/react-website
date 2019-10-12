import React, { useRef, useState, useEffect, useImperativeHandle } from 'react'
import classNames from 'classnames'
import { PROJECT_NAME } from './../../config/constance'
import './sider-warp.less'
import Icon from './../Icon'

interface ISiderWarpProps {
  show: boolean;
  switchTop?: string;
  type?: string;
  hideFn?: () => void;
  showFn?: () => void;
}

const SiderWarp: React.FC<ISiderWarpProps> = (props, ref) => {
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
    props.hideFn && props.hideFn()
  }

  const showComp = () => {
    setShow((show) => show = true)
    props.showFn && props.showFn()
  }

  const toggleSiderWarp = () => {
    show ? props.hideFn && props.hideFn() : props.showFn && props.showFn()
    // if (!show) {
    //   DomUtils.addClass(document.body, 'sider-s')
    // } else {
    //   DomUtils.removeClass(document.body, 'sider-s')
    // }
    setShow((show) => show = !show)
  }

  const svgId = show ? 'close' : 'menu'

  const mapRef = useRef(null)

  useImperativeHandle(ref, () => {
    return {
      showComp,
      hideComp
    }
  })

  return (
    <section className={classString} ref={mapRef}>
      <div className='mask' onClick={hideComp}></div>
      <div className='content'>
        <div className="content-switch" onClick={toggleSiderWarp} style={styleTop}>
          <Icon svgId={svgId} color="#aaa"></Icon>
        </div>
        {props.children}
      </div>
    </section>
  )
}

// SiderWarp.defaultProps = {
//   show: false,
//   switchTop: '50px',
//   type: 'fixed'
// }

const SiderWarpComponent = React.forwardRef(SiderWarp)

export default SiderWarpComponent as any