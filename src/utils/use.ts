import { useContext, useState } from 'react'
import { debounce } from '@dw/d-utils/lib/genericUtils'
import { MUSIC_SHEET_TRANSITION_DURATION } from './../config/constance'
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
export const useScroll = (ref: any, requestCallBack: () => void) => {
  const eventHandler = (e: any) => {
    if (ref.clientHeight + ref.scrollTop === ref.scrollHeight) {
      requestCallBack()
    }
  }

  useEffect(() => {
    ref.addEventListener('scroll', eventHandler)

    return () => {
      ref.removeEventListener('scroll', eventHandler)
    }
  }, [])
}