// import * as React from 'react'
import fetch from './../../utils/fetch'
import { IStore } from './../../store/types'
import classNames from 'classnames'
import './home.less'
import typeWriter, { ITypeWriterList } from './../../utils/typewriter'
import { PROJECT_NAME, TYPE_WRITER} from './../../config/constance'
import React, { useState, useEffect, useRef } from 'react'

interface IHomeProps {}

const Home = (props: IHomeProps) => {
  const homeRef: any = useRef(null);

  const initTypeWriter = async () => {
    for (let i = 0; i < TYPE_WRITER.length; i++) {
      let list: ITypeWriterList = TYPE_WRITER[i]
      list.container = homeRef.current
      await typeWriter(TYPE_WRITER[i] as ITypeWriterList)
    }
  }

  useEffect(() => {
    if (!window.__FIRST_IN_HOME__) {
      initTypeWriter()
    }

    return function clearWriter () {
      window.__FIRST_IN_HOME__ = true
    }
  })

  const classString = classNames({
    [`${PROJECT_NAME}-home`]: true,
    [`dw-page-router`]: true
  })
  return (
    <div className={classString}>
      {
        !window.__FIRST_IN_HOME__ ? (
          <div ref={homeRef}></div>
        ) : (
          TYPE_WRITER.map((item, index) => {
            return (
              item.tagName === 'h1' ? (
                <h1 {...item.config} key={index}>{item.text}</h1>
              ) : item.tagName === 'h2' ? (
                <h2 {...item.config} key={index}>{item.text}</h2>
              ) : item.tagName === 'h3' ? (
                <h3 {...item.config} key={index}>{item.text}</h3>
              ) : item.tagName === 'h4' ? (
                <h4 {...item.config} key={index}>{item.text}</h4>
              ) : item.tagName === 'h5' ? (
                <h5 {...item.config} key={index}>{item.text}</h5>
              ) : item.tagName === 'h6' ? (
                <h6 {...item.config} key={index}>{item.text}</h6>
              ) : item.tagName === 'a' ? (
                <a {...item.config} key={index}>{item.text}</a>
              ) : item.tagName === 'p' ? (
                <p {...item.config} key={index}>{item.text}</p>
              ) : item.tagName === 'span' ? (
                <span {...item.config} key={index}>{item.text}</span>
              ) : (
                <p {...item.config} key={index}>{item.text}</p>
              )
            )
          })
        )
      }
    </div>
  )
}

export default Home
