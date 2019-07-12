import React, { useEffect, useRef, useState } from 'react'
import classNames from 'classnames'
import { PROJECT_NAME } from './../../config/constance'
import { IAMGE_LOAD_STATUS } from './../../enum'
import './lazy-img.less'

interface lazyImgProps {
  selfClassName?: string;
  src: string;
}

const LazyImg = (props: lazyImgProps) => {
  const imgRef: any = useRef(null)
  let [imageStatus, setImageStatus] = useState(IAMGE_LOAD_STATUS.LOADING)

  const classString = classNames({
    [`${PROJECT_NAME}-comp-lazy-img`]: true,
    [props.selfClassName || '']: true
  })

  const OnLoadHandler = () => {
    setImageStatus(() => imageStatus = IAMGE_LOAD_STATUS.SUCCES)
    imgRef.current.src = props.src
  }

  const OnErrorHandler = () => {
    setImageStatus(() => imageStatus = IAMGE_LOAD_STATUS.SUCCES)
  }

  const pic = props.src
  const img = new Image()
  img.crossOrigin = 'anonymous'
  img.src = pic

  const initImageEvent = () => {
    img.addEventListener('load', OnLoadHandler)
    img.addEventListener('error', OnErrorHandler)
  }

  const destoryImageEvent = () => {
    img.removeEventListener('load', OnLoadHandler)
    img.removeEventListener('error', OnErrorHandler)
  }

  useEffect(() => {
    initImageEvent()

    return () => {
      destoryImageEvent()
    }
  }, [imageStatus, img])

  return (
    <div className={classString}>
      {
        imageStatus === IAMGE_LOAD_STATUS.LOADING ? (
          <div className="tips">图片加载中</div>
        ) : imageStatus === IAMGE_LOAD_STATUS.ERRER ? (
          <div className="tips">图片加载失败</div>
        ) : imageStatus === IAMGE_LOAD_STATUS.SUCCES ? (
          <img className={`${PROJECT_NAME}-lazy-img`}
            ref={imgRef}/>
        ) : null
      }
    </div>
  )
}

export default LazyImg
