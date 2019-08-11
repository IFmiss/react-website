import { INavLists } from './../config/nav'
import { MusicGroupList, MusicGroupLists } from './../type'

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
    playLists: MusicGroupLists;
    playType: MusicPlayType;
  }
}

