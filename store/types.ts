import { INavLists } from './../config/nav'

export interface IStore {
  colorStore: NameSpaceStore.IColorModel;
  navStore: NameSpaceStore.INavModel;
}

export namespace NameSpaceStore {
  export interface IColorModel {
    primaryColor: string;
    initSelfColor: () => void;
  }

  export interface INavModel {
    lists: INavLists,
    setNavLists: (lists: INavLists) => void
  }
}

