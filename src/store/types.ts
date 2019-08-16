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
  SHEET
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
                      list: MusicGroupList,
                      type: MusicPlayType) => void;
  }
}

