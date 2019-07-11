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
  const imgRef = useRef(null)
  let [imageStatus, setImageStatus] = useState(IAMGE_LOAD_STATUS.LOADING)

  const classString = classNames({
    [`${PROJECT_NAME}-comp-lazy-img`]: true,
    [props.selfClassName || '']: true
  })

  const pic = props.src
  const img = new Image()
  img.crossOrigin = 'anonymous'
  img.src = pic

  const initImageEvent = () => {
    img.onload = () => {
      setImageStatus(() => imageStatus = IAMGE_LOAD_STATUS.SUCCES)
    }
    img.onerror = () => {
      setImageStatus(() => imageStatus = IAMGE_LOAD_STATUS.ERRER)
    }
  }

  useEffect(() => {
    initImageEvent()

    return () => {
      delete img.onload
      delete img.onerror
      delete img.crossOrigin
      delete img.src
    }
  }, [imageStatus, img])

  return (
    <div className={classString}>
      {
        imageStatus === IAMGE_LOAD_STATUS.LOADING ? (
          <div className="tips">图片加载中</div>
        ) : imageStatus === IAMGE_LOAD_STATUS.SUCCES ? (
          <img className={`${PROJECT_NAME}-sheet-list-content-top-img`}
            src={props.src}
            ref={imgRef}/>
        ) : (
          <div className="tips">图片加载失败</div>
        )
      }
    </div>
  )
}

export default LazyImg
