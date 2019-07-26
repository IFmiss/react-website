import { debounce } from 'd-utils/lib/genericUtils'
import { useEffect } from 'react'

/**
 * 滚动监听
 * @param ref 
 * @param requestCallBack 
 */
export default function useScroll (ref: any, requestCallBack: () => void, t: number = 3000) {
  if (!ref) return
  const eventHandler = (e: any) => {
    const newRef = ref.current ? ref.current : ref
    if (newRef.clientHeight + newRef.scrollTop === newRef.scrollHeight) {
      debounce(requestCallBack, t)()
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
