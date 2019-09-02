import React, { useState, useEffect, useRef, useImperativeHandle } from 'react'
import classNames from 'classnames'
import ReactDOM from 'react-dom';
import { PROJECT_NAME } from './../../config/constance'
import { MUSCI_MENU } from './../../config/music'
import './lyric.less'
// import { useStore } from './../../utils/use'
import { useObserver, observer } from 'mobx-react-lite'
import store from '../../store';
import { MusicLyricType } from './../../store/types'
import { bool } from 'prop-types';

interface ILyricState {
  start: () => void;
  checkLrc: (lrc: string) => void;
}

interface ILyricProps {}

export const Lyric: React.FC = (props, ref) => {
  const lyricRef = useRef(null)
  const [currentLyric, setCurrentLyric] = useState<string>('')
  const [isShow, setIsShow] = useState<Boolean>(false)

  const classString = classNames({
    [`${PROJECT_NAME}-lyric-comp`]: true,
    [`show`]: isShow
  })

  const start = () => {
    console.log('this is lyric start')
  }

  const checkLrc = (lrc: string) => {
    if (!store.musicStore.musicLyric.isShow) return
    if (!isShow) setIsShow((isShow) => isShow = true)
    setCurrentLyric(currentLyric => currentLyric = lrc)
  }

  const close = () => {
    setIsShow((isShow) => isShow = false)
    Ins.destroy()
  }

  useImperativeHandle(ref, () => ({
    start,
    checkLrc
  }))

  return (
    <div className={classString} ref={lyricRef}>
      <ul className={`${PROJECT_NAME}-lyric-comp-content`}>
        <li className={`${PROJECT_NAME}-lyric-comp-content-list`}>{currentLyric}</li>
      </ul>
      <span className={`${PROJECT_NAME}-lyric-comp-close`}
         onClick={close}> 关闭 </span>
    </div>
  )
}

const LyricComponent = React.forwardRef(Lyric)

function newInstance (props: ILyricProps) {
  const LyricRef = React.createRef<ILyricState>()
  
  const div = document.createElement('div')
  document.body.appendChild(div)
  ReactDOM.render(<LyricComponent {...props} ref={LyricRef}/>, div)

  console.log(LyricRef.current)

  const destroy = () => {
    store.musicStore.musicLyric.isShow = false
    ReactDOM.unmountComponentAtNode(div);
    (div.parentNode as HTMLDivElement ).removeChild(div);
  }

  const { start, checkLrc } = LyricRef.current as ILyricState

  return {
    start,
    destroy,
    checkLrc
  }
}

const Ins = newInstance({})
export default Ins
