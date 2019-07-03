import { useContext } from 'react'
import * as React from 'react'
import store from './../store'

// react context
export const storeContext = React.createContext(store);

// store数据
export const useStore = () => {
  const store = useContext(storeContext)
  return store;
}
