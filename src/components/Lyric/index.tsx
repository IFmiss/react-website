import React, { useState, useEffect, useRef, useImperativeHandle } from 'react'
import classNames from 'classnames'
import ReactDOM from 'react-dom';
import { PROJECT_NAME } from './../../config/constance'
import { MUSCI_MENU } from './../../config/music'
import './lyric.less'
// import { useStore } from './../../utils/use'
import { useObserver } from 'mobx-react-lite'
import store from '../../store';

interface ILyricState {
  start: () => void;
}

interface ILyricProps {}

export const Lyric: React.FC = (props, ref) => {
  const lyricRef = useRef(null)

  const classString = classNames({
    [`${PROJECT_NAME}-lyric-comp`]: true,
    // ['dark']: useStore().colorStore.mode
  })

  const start = () => {
    console.log('this is lyric start')
  }

  const close = () => {
    console.log('you click close')
    Ins.destroy()
  }

  useImperativeHandle(ref, () => ({
    start
  }))

  return useObserver(() => {
    console.log(store)
    return (
      <div className={classString} ref={lyricRef}>
        <ul className={`${PROJECT_NAME}-lyric-comp-content`}>
          <li className={`${PROJECT_NAME}-lyric-comp-content-list`}>this is lyric</li>
        </ul>
        <i className={`${PROJECT_NAME}-lyric-comp-close`}
           onClick={close}></i>
      </div>
    )
  })
}

const LyricComponent = React.forwardRef(Lyric)

function newInstance (props: ILyricProps) {
  const LyricRef = React.createRef<ILyricState>()
  
  const div = document.createElement('div')
  document.body.appendChild(div)
  ReactDOM.render(<LyricComponent {...props} ref={LyricRef}/>, div)

  console.log(LyricRef.current)

  const destroy = () => {
    ReactDOM.unmountComponentAtNode(div);
    (div.parentNode as HTMLDivElement ).removeChild(div);
  }

  const { start } = LyricRef.current as ILyricState

  return {
    start,
    destroy
  }
}

const Ins = newInstance({})
export default Ins
