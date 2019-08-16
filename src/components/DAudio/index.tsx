import React, { useState, useMemo, useLayoutEffect, useRef, useImperativeHandle, useCallback, useEffect } from 'react'
import classNames from 'classnames'
import Vibrant from 'node-vibrant'
import ReactDOM from 'react-dom';
import './d-audio.less'
import store from './../../store'
import { throttle } from 'd-utils/lib/genericUtils'
import { getMusicIndexById, getPlayMuiscList, getNextMusicList} from './../../utils/music'

export interface IMusicInfo {
  id: number;
  url: string;
  coverUrl: string;
  name: string;
  singer: string;
}

interface IDAudioImageColor {
  defaultColor: string;
  circleBorderColor: string;
  progressLeftColor: string;
  progressRightColor: string;
}

enum DAudioType {
  // 矩形
  RECT = 1,

  // 圆
  CIRCLE,
}

export enum DAudioPosition {
  BOTTOM_LEFT = 1,
  BOTTOM_RIGHT
}

export interface IDAudioProps {
  position?: DAudioPosition;
  type?: DAudioType;
}

interface IDAudioState {
  list: IMusicInfo;
  progress: boolean;
  loop: boolean;
  type: DAudioType;
  ended: () => void;
  start: (list: IMusicInfo) => void;
  next: () => void;
}

const defaultList = {
  id: -1,
  url: '',
  coverUrl: 'https://desk-fd.zol-img.com.cn/t_s720x360c5/g2/M00/03/09/ChMlWV06gc-IWeCjABDEZHv0cp8AAMHrQPh5vAAEMR8961.jpg',
  name: 'd-audio player',
  singer: '未曾遗忘的青春'
}

const defaultImageColor = {
  defaultColor: `rgba(255, 56, 56, 1)`,
  circleBorderColor: `rgba(255, 56, 56, 0.36)`,
  progressLeftColor: `rgba(255, 56, 56, 0.12)`,
  progressRightColor: `rgba(255, 56, 56, 0.66)`,
}

const DAudio: React.FC<IDAudioProps> = function (props, ref) {
  const audioRef = useRef(null)
  const [type, setType] = useState<DAudioType>(props.type || DAudioType.CIRCLE)
  const [list, setList] = useState<IMusicInfo>(defaultList)
  const [isPlay, setIsPlay] = useState<Boolean>(false)
  const [loading, setLoading] = useState<Boolean>(false)
  const [imageColor, setImageColor] = useState<IDAudioImageColor>({...defaultImageColor})
  const [progress, setProgress] = useState<number>(0)

  useEffect(() => {
    changeImageColor()
  }, [list.id])

  useEffect(() => {
    // audioRef
    addSelfObserver()
  }, [])

  const changeImageColor = useCallback(async () => {
    const palette: any = await Vibrant.from(list.coverUrl).getPalette()
    const {r, g, b} = palette.LightMuted
    setImageColor((imageColor: IDAudioImageColor): any => {
      return imageColor = {
        defaultColor: `rgba(${r}, ${g}, ${b}, 1)`,
        circleBorderColor: `rgba(${r}, ${g}, ${b}, 0.36)`,
        progressLeftColor: `rgba(${r}, ${g}, ${b}, 0.12)`,
        progressRightColor: `rgba(${r}, ${g}, ${b}, 0.66)`,
      }
    })
  }, [list.id])

  const blurStyle = {
    backgroundImage: `url(${list.coverUrl})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center center'
  }
  const rangeStyle = {
    border: `3px solid ${imageColor.circleBorderColor}`
  }

  const progressStyle = {
    backgroundImage: `linear-gradient(to right, ${imageColor.progressLeftColor} 30%, ${imageColor.progressRightColor})`,
    width: `${progress}%`
  }

  const addSelfObserver = () => {
    // 添加video 的事件监听
    (audioRef.current as any).addEventListener('timeupdate', handleProgress)
    
    return () => {
      (audioRef.current as any).removeEventListener('timeupdate', handleProgress)
    }
  }

  const handleProgress = throttle(() => {
    console.log(audioRef.current)
    // setProgress((progress: number) => progress = )
  }, 1500)

  // const imageColorL

  const selfClass = classNames({
    [`d-audio`]: true,
  })

  const classString = classNames({
    [`d-audio`]: true,
    [`bottom-left`]: props.position === DAudioPosition.BOTTOM_LEFT,
    [`bottom-right`]: props.position === DAudioPosition.BOTTOM_RIGHT,
    [`circle`]: type === DAudioType.CIRCLE,
    [`rect`]: type === DAudioType.RECT,
  })

  const classPlayPause = classNames({
    [`d-audio-play-pause`]: true,
    [`play`]: isPlay,
    [`pause`]: !isPlay
  })

  const classLoading = classNames({
    [`d-audio-loading`]: true,
    [`active`]: loading
  })

  const start = (musicList: IMusicInfo) => {
    console.log('musicList', musicList)
    setList((list) => list = musicList)
    play()
  }

  const play = () => {
    setIsPlay(isPlay => isPlay = true);
    (audioRef.current as any).play()
  }

  const next = async (e: any) => {
    e.preventDefault()
    e.stopPropagation()
    console.log('next')
    getNextMusicList(list.id)

    const selfList = await getPlayMuiscList(store.musicStore.currentList)
    start(selfList)
  }

  const pause = () => {
    setIsPlay(isPlay => isPlay = false);
    (audioRef.current as any).pause()
  }

  const playPause = (e: any) => {
    e.preventDefault()
    e.stopPropagation()
    isPlay ? pause() : play()
  }

  const checkType = () => {
    if (type === DAudioType.RECT) {
      setType((type) => type = DAudioType.CIRCLE)
    } else {
      setType((type) => type = DAudioType.RECT)
    }
  }

  useImperativeHandle(ref, () => ({
    start,
    next,
    play,
    pause,
  }));

  return (
    <div className={classString} onClick={checkType}>
      <div className={`${selfClass}-circle`}
           title={`${list.name} - ${list.singer}`}>
        <img className="avatar" src={list.coverUrl}/>
        <div className={`${selfClass}-range`} style={rangeStyle}></div>
      </div>
      <div className={`${selfClass}-detail`}>
        <div className={`${selfClass}-detail-config`}>
          <div className={classPlayPause} onClick={playPause}></div>
          <div className="d-audio-next" onClick={next}></div>
        </div>
        <div className={`${selfClass}-detail-info`}>
          <h3 className="music-name">{list.name}</h3>
          <div className="music-singer">{list.singer}</div>
        </div>
      </div>
      <div className={`${selfClass}-blur-bg`} style={blurStyle}></div>
      <div className={classLoading}></div>
      <div className={`${selfClass}-progress`} style={progressStyle}></div>
      <audio src={list.url} ref={audioRef}></audio>
    </div>
  )
}

const DuadioComponent = React.forwardRef(DAudio)

function newInstance(props: IDAudioProps) {
  const DAudioRef = React.createRef<IDAudioState>();

  const div = document.createElement('div')
  document.body.appendChild(div)
  ReactDOM.render(<DuadioComponent {...props} ref={DAudioRef}/>, div)
  console.log(DAudioRef.current)
  const destroy = () => {
    ReactDOM.unmountComponentAtNode(div);
    (div.parentNode as HTMLDivElement ).removeChild(div);
  }

  console.log(DAudioRef.current)
  const { list, loop, type, ended, next, start  } = DAudioRef.current as IDAudioState;

  return {
    list,
    loop,
    type,
    start,
    ended,
    next,
    destroy
  }
}

export default newInstance({
  position: DAudioPosition.BOTTOM_LEFT
})
