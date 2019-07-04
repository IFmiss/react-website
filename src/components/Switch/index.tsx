import React, { useRef, useState, useEffect } from 'react'
import classNames from 'classnames'
import Constance from './../../config/constance'
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './switch.less'

interface ISwitchProps {
  checked: boolean
  onChange: (checked: boolean) => void
}

const Switch = (props: ISwitchProps) => {
  let [checked, setChecked] = useState(props.checked)

  // useEffect(() => {
  //   // setCheckedHandle()
  //   if (props.checked !== checked) {
  //     setCheckedHandle(props.checked)
  //   }
  // }, [])

  const setCheckedHandle = () => {
    setChecked(checked = !checked)
    props.onChange(checked)
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
