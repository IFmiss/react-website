import { useContext, useState } from 'react'
import { debounce } from 'd-utils/lib/genericUtils'
import { MUSIC_SHEET_TRANSITION_DURATION } from './../config/constance'
import React, { useEffect, useLayoutEffect } from 'react'
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
  if (!ref) return
  const eventHandler = (e: any) => {
    const newRef = ref.current ? ref.current : ref
    console.log('clientHeight', newRef.clientHeight)
    console.log('clientHeight', newRef.scrollTop)
    console.log('clientHeight', newRef.scrollHeight)
    console.log('====================================')
    if (newRef.clientHeight + newRef.scrollTop === newRef.scrollHeight) {
      requestCallBack()
    }
  }

  useEffect(() => {
    const newRef = ref.current ? ref.current : ref
    newRef.addEventListener('scroll', eventHandler)

    return () => {
      newRef.removeEventListener('scroll', eventHandler)
    }
  }, [])
}