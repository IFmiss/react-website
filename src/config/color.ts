import { StorageKeys } from './storage'

export interface IColorInfo {
  primaryColor: string
}

export const selfColor: IColorInfo = {
  primaryColor: 'blue'
}

export const getNewSelfColor = () => {
  const colorStorage = localStorage.getItem(StorageKeys.color)
  if (colorStorage) {
    return localStorage.getItem(JSON.parse(StorageKeys.color))
  }
  return selfColor
}

export const setNewSelfColor = (data: any) => {
  // const colorStorage = localStorage.getItem(StorageKeys.color)
  // if (colorStorage) {
  //   return localStorage.getItem(JSON.parse(StorageKeys.color))
  // }
  // return defaultColor
}
