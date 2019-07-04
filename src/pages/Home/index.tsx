// import * as React from 'react'
import fetch from './../../utils/fetch'
import { IStore } from './../../store/types'
import classNames from 'classnames'
import typeWriter from './../../utils/typewriter'
import Constance from './../../config/constance'
import React, { useState, useEffect, useRef } from 'react'

interface IHomeProps {}

const Home = (props: IHomeProps) => {
  const homeRef: any = useRef(null);

  const initTypeWriter = () => {
    typeWriter(Constance.TYPE_WRITER[0].text, Constance.TYPE_WRITER[0].tagName, homeRef.current, Constance.TYPE_WRITER[0].config)
      .then(() => typeWriter(Constance.TYPE_WRITER[1].text, Constance.TYPE_WRITER[1].tagName, homeRef.current, Constance.TYPE_WRITER[1].config))
        .then(() => typeWriter(Constance.TYPE_WRITER[2].text, Constance.TYPE_WRITER[2].tagName, homeRef.current, Constance.TYPE_WRITER[2].config))
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
    [`${Constance.PROJECT_NAME}-home`]: true,
    [`dw-page-router`]: true
  })
  return (
    <div className={classString}>
      {
        !window.__FIRST_IN_HOME__ ? (
          <div ref={homeRef}></div>
        ) : (
          Constance.TYPE_WRITER.map((item, index) => {
            return (
              item.tagName === 'h1' ? (
                <h1 key={index}>{item.text}</h1>
              ) : item.tagName === 'h2' ? (
                <h2 key={index}>{item.text}</h2>
              ) : item.tagName === 'h3' ? (
                <h3 key={index}>{item.text}</h3>
              ) : item.tagName === 'h4' ? (
                <h4 key={index}>{item.text}</h4>
              ) : item.tagName === 'h5' ? (
                <h5 key={index}>{item.text}</h5>
              ) : item.tagName === 'h6' ? (
                <h6 key={index}>{item.text}</h6>
              ) : item.tagName === 'a' ? (
                <a href={item.config.herf || ''} key={index}>{item.text}</a>
              ) : item.tagName === 'p' ? (
                <p key={index}>{item.text}</p>
              ) : item.tagName === 'span' ? (
                <span key={index}>{item.text}</span>
              ) : (
                <p key={index}>{item.text}</p>
              )
            )
          })
        )
      }
    </div>
  )
}

export default Home
