import React, { useState, useMemo, useLayoutEffect, useRef, useImperativeHandle } from 'react'
import classNames from 'classnames'
import Vibrant from 'node-vibrant'
import ReactDOM from 'react-dom';
import './d-audio.less'

interface IMusicInfo {
  url: string;
  coverUrl: string;
  name: string;
  singer: string;
}

enum DAudioType {
  // 矩形
  RECT = 1,

  // 圆
  CIRCLE,
}

enum DAudioPosition {
  BOTTOM_LEFT = 1,
  BOTTOM_RIGHT
}

interface IDAudioProps {
  position?: DAudioPosition;
  type?: DAudioType;
  width?: number;
  height?: number;
}

interface IDAudioState {
  list: IMusicInfo;
  progress: boolean;
  loop: boolean;
  type: DAudioType;
  ended: () => void;
  next: () => void;
}

const defaultList = {
  url: '',
  coverUrl: 'http://www.daiwei.org/sunmmer.jpg',
  name: 'd-audio player',
  singer: '未曾遗忘的青春'
}

const DAudio: React.FC<IDAudioProps> = function (props, ref) {
  const audioWidth = props.width && props.width > 240 ? props.width : 240
  const audioHeight = props.height && props.height > 50 ? props.width : 50
  const audioRef = useRef(null)
  const [type, setType] = useState<DAudioType>(props.type || DAudioType.CIRCLE)
  const [list, setList] = useState<IMusicInfo>(defaultList)
  const [isPlay, setIsPlay] = useState<Boolean>(false)
  const [loading, setLoading] = useState<Boolean>(false)

  const imageColor = useMemo(() => {
    Vibrant.from(list.coverUrl).getPalette()
    .then((palette: any) => {
      const {r, g, b} = palette.LightMuted
      return {
        defaultColor: `rgba(${r}, ${g}, ${b}, 1)`,
        circleBorderColor: `rgba(${r}, ${g}, ${b}, 0.36)`,
        progressLeftColor: `rgba(${r}, ${g}, ${b}, 0.12)`,
        progressRightColor: `rgba(${r}, ${g}, ${b}, 0.66)`,
      }
    }).catch((err) => {
      return {
        defaultColor: `rgba(255, 56, 56, 1)`,
        circleBorderColor: `rgba(255, 56, 56, 0.36)`,
        progressLeftColor: `rgba(255, 56, 56, 0.12)`,
        progressRightColor: `rgba(255, 56, 56, 0.66)`,
      }
    })
  }, [list.coverUrl])

  // style
  const circleStyle = {
    width: audioWidth,
    height: audioHeight
  }

  const blurStyle = {
    backgroundImage: `url(${list.coverUrl})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center center'
  }

  const progressStyle = {
    backgroundImage: `linear-gradient(to right, ${imageColor.progressLeftColor} 30%, ${imageColor.progressRightColor})`
  }

  // const imageColorL

  const selfClass = classNames({
    [`d-audio`]: true,
  })

  const classString = classNames({
    selfClass,
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
    setList((list) => list = musicList)
    play()
  }

  const play = () => {
    console.log('play')
    audioRef.current
  }

  const next = () => {
    console.log('play')
    audioRef.current
  }

  const pause = () => {
    console.log('play')
    audioRef.current
  }

  useImperativeHandle(ref, () => ({
    start,
    next,
    play,
    pause,
  }));

  return (
    <div className={classString}>
      <div className={`${selfClass}-circle`}
           title={`${list.name} - ${list.singer}`}
           style={circleStyle}>
        <img src={list.coverUrl}/>
        <div className={`${selfClass}-range`}></div>
      </div>
      <div className={`${selfClass}-detail`}>
        <div className={`${selfClass}-detail-config`}>
          <div className={classPlayPause}></div>
          <div className="d-audio-next"></div>
        </div>
        <div className={`${selfClass}-detail-info`}>
          <div className="music-name">{list.name}</div>
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

  const destroy = () => {
    ReactDOM.unmountComponentAtNode(div);
    (div.parentNode as HTMLDivElement ).removeChild(div);
  }

  const { error, finish, start, reset } = DAudioRef.current as IDAudioState;
}

export default newInstance
