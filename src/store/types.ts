import { INavLists } from './../config/nav'
import { MusicGroupList, MusicGroupLists } from './../type'
import { DAudioPosition } from './../components/DAudio'

export interface IStore {
  colorStore: NameSpaceStore.IColorModel;
  navStore: NameSpaceStore.INavModel;
  musicStore: NameSpaceStore.IMusicModel;
}

export enum MusicPlayType {
  NO_TYPE,
  SEARCH,
  RANK,
  SHEET,
  HOME
}

export enum MusicLyricType {
  /** 关闭歌词显示 */
  CLOSE_LYRIC,

  /** 加载中。。。 */
  LOADING,
  /** 有歌词 */
  HAS_LYRIC,
  /** 纯音乐 */
  ABSOLUTE,
  /** 暂无歌词 */
  NOT_FOUND
}

interface ILrc {
  lyric: string | null;
  version: number;
}

export interface IMusicLyric {
  code: number;
  klyric?: ILrc;
  tlyric?: ILrc;
  lrc?: ILrc;
  qfy?: boolean;
  sfy?: boolean;
  sgc?: boolean;
  needDesc?: boolean;
  nolyric?: boolean;
  objLrc: any[];
  lrcType: MusicLyricType;
  isShow: boolean;
}

export namespace NameSpaceStore {
  export interface IColorModel {
    mode: string;
    changeMode: (mode?: string) => void;
  }

  export interface INavModel {
    lists: INavLists,
    setNavLists: (type: number) => void
  }

  export interface IMusicModel {
    currentList: MusicGroupList;
    musicListQueue: MusicGroupLists;
    playType: MusicPlayType;
    musicPlayIndex: number;
    changePosition: (position: DAudioPosition) => void;
    setMusicListQueue: (lists: MusicGroupLists) => void;
    setMusicPlayIndex: (index: number) => void;

    setPlayType: (type: MusicPlayType) => void;
    setMusicPlayTask: (lists: MusicGroupLists,
                      index: number,
                      type: MusicPlayType) => void;
    musicLyric: IMusicLyric;
    setMusicLyric: (lyric: IMusicLyric) => void;
    currentLyric: string;
    musicLyricIndex: number;
    setMusicLyricIndex: (index: number) => void;
  }
}

