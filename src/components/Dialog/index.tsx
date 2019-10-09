
import React from 'react'
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import { PROJECT_NAME } from './../../config/constance'
export interface IAlertOption {
  title?: string;
  desc?: string;
  btnText?: string;
  onClose?: () => void;
  onBtnClick?: () => void;
}

export default function alert (
  title = 'title',
  desc = 'desc',
  btnText = '确定',
  onClose = () => {},
  onBtnClick = () => {}
) {
  // console.log(title)
  // console.log(desc)
  // console.log(btnText)
  // console.log(onClose)
  // console.log(onBtnClick)
  const div: any = document.createElement('div');
  document.body.appendChild(div);

  function close () {
    onClose && onClose()
    ReactDOM.unmountComponentAtNode(div);
    if (div && div.parentNode) {
      div.parentNode.removeChild(div);
    }
  }

  function confirm () {
    onBtnClick && onBtnClick()
    ReactDOM.unmountComponentAtNode(div);
    if (div && div.parentNode) {
      div.parentNode.removeChild(div);
    }
  }

  function handleTouchMove (e: any) {
    e.preventDefault()
    e.stopPropagation()
  }

  const classString = classNames({
    [`${PROJECT_NAME}-comp-dialog`]: true
  })
  // const { title, btnText, desc } = props

  ReactDOM.render(
    <div className={classString}>
      <div className={classString} onTouchMove={handleTouchMove}>
        <div className={`${classString}-mask`}></div>
        <div className={`${classString}-content`}>
          {
            title ? (<div className={`${classString}-content-title`}>{title}</div>) : null
          }
          {
            desc ? (<div className={`${classString}-content-desc`}>{desc}</div>) : null
          }
          {
            btnText ? (<div className={`${classString}-content-button`} onClick={confirm}>{btnText}</div>) : null
          }
        </div>
      </div>
    </div>
  , div)
}
