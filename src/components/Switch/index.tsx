import React, { useRef, useState } from 'react'
import classNames from 'classnames'
import Constance from './../../config/constance'
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './switch.less'

interface ISwitchProps {
  checked: boolean
}

const Switch = (props: ISwitchProps) => {
  const switchRef = useRef(null)

  let [checked, setChecked] = useState(props.checked)

  const setCheckedHandle = () => {
    setChecked(checked = !checked)
  }

  const classString = classNames({
    [`${Constance.PROJECT_NAME}-comp-switch`]: true,
    [`switch-checked`]: !!checked
  })

  return (
    <div className={classString} onClick={setCheckedHandle}>
      <CSSTransition in={checked}
                     timeout={100}
                     classNames="fade"
                     appear={true}
                     unmountOnExit={false}>
        <span className="switch-on">on</span>
      </CSSTransition>
      <CSSTransition in={!checked}
                     timeout={100}
                     classNames="fade"
                     appear={true}
                     unmountOnExit={false}>
        <span className="switch-off">off</span>
      </CSSTransition>
      <span className="switch-range"></span>
    </div>
  )
}

export default Switch
