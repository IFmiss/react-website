import { useContext } from 'react'
import React, { useEffect } from 'react'
import store from './../store'

// react context
export const storeContext = React.createContext(store);

// store数据
export const useStore = () => {
  const store = useContext(storeContext)
  return store;
}


// 滚动监听
export const useScroll = (ref: any) => {
  // ref.addEventLiseter () {}
  useEffect(() => {
    // do something
  })
}