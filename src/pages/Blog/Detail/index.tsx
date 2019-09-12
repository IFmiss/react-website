import React, {useEffect, useState} from 'react'
import fetch from './../../../utils/fetch'
import { IStore } from './../../../store/types'
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import classNames from 'classnames'
import './detail.less'
import { PROJECT_NAME } from './../../../config/constance'
import SiderWarp from './../../../components/SiderWarp'

interface IBlogDetailProps {}

const BlogDetail: React.FC<IBlogDetailProps> = () => {
  const classString = classNames({
    [`${PROJECT_NAME}-blog-detail`]: true
  })
  return (
    <section className={classString}>
      <div className={`${classString}-content`}>
        1111
      </div>
      <SiderWarp show={false} switchTop="40px" type="auto">
        <h4 className="sider-title">目录</h4>
        <div>1111</div>
        <div>1111</div>
        <div>1111</div>
        <div>1111</div>
        <div>1111</div>
        <div>1111</div>
      </SiderWarp>
    </section>
  )
}

export default BlogDetail
