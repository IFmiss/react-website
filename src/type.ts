export type SheetGroupLists = SheetGroupList[] | any
export interface SheetGroupList {

}

export type artists = artist[]
export interface artist {
  id: number;
  img1v1Url: string;
  name: string;
  picId: number;
}

export type MusicGroupLists = MusicGroupList[]
export interface MusicGroupList {
  album: any;
  alias: any[];
  artists: artists;
  duration: number;
  id: number;
  name: string;
  status: number;
  rtype: number;
  fee: number;
  ftype: number;
}
