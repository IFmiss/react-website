import { useContext, useState } from 'react'
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
      console.log('load-more')
      if (!scrollLoading) {
        // loading
        setScrollLoadingFn(true)
        // 请求数据
        console.log(requestCallBack)
        requestCallBack()
        setScrollLoadingFn(false)
      } else {
        return
      }
    }
  }
  console.log(ref)
  // ref.addEventLiseter () {}
  useEffect(() => {
    // do something
    ref.onscroll = eventHandler

    // return () => {
    //   ref.removeEventLiseter('onscroll', eventHandler)
    // }
  })
}