import React from 'react'
import classNames from 'classnames'
import './d-audio.less'

interface IMusicInfo {
  url: string;
  coverUrl: string;
  name: string;
  singer: string;
}

enum DAudioStyle {
  // 矩形
  RECT = 1,

  // 圆
  CIRCLE,
}

interface IDAudioProps {}

interface IDAudioState {
  music: IMusicInfo;
  progress: boolean;
  loop: boolean;
  style: DAudioStyle;
  ended: () => void;
  next: () => void;
}
