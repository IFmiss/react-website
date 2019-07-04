import { INavLists } from './../config/nav'

export interface IStore {
  colorStore: NameSpaceStore.IColorModel;
  navStore: NameSpaceStore.INavModel;
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
}

