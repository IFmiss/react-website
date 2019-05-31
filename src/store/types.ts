export interface IStore {
  colorStore: NameSpaceStore.IColorModel;
}

export namespace NameSpaceStore {
  export interface IColorModel {
    primaryColor: string;
    initSelfColor: () => void;
  }
}

