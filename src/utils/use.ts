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
  const [scrollLoading, setScrollLoading] = useState(false)
  const setScrollLoadingFn = (isLoading: boolean) => {
    setScrollLoading((scrollLoading) => scrollLoading = isLoading)
  }
  const eventHandler = (e: any) => {
    if (ref.clientHeight + ref.scrollTop === ref.scrollHeight) {
      // 需要加载
      if (!scrollLoading) {
        // loading
        setScrollLoadingFn(true)
        // 请求数据
        debounce(() => {
          requestCallBack()
          setScrollLoadingFn(false)
        }, MUSIC_SHEET_TRANSITION_DURATION, false)()
      } else {
        return
      }
    }
  }
  // ref.addEventLiseter () {}
  useEffect(() => {
    // do something
    ref.onscroll = eventHandler

    // return () => {
    //   ref.removeEventLiseter('onscroll', eventHandler)
    // }
  }, [])
}