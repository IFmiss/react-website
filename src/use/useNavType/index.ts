import store from './../../store'
import { useEffect } from 'react'
export default function useNavType(type: number) {
  useEffect(() => {
    store.navStore.setNavLists(type)
  }, [])
}