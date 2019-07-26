import { useContext, useState } from 'react'
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
