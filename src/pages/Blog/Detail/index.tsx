import React, {useEffect, useState} from 'react'
import fetch from './../../../utils/fetch'
import { IStore } from './../../../store/types'
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import classNames from 'classnames'
import './detail.less'
import './../../../style/high-default.less'
import {
  getBlogDetail
} from './../action'
import { IBlogListCategorieOrTag } from '../../../components/BlogList'
import { PROJECT_NAME, DEFAULT_BLOG_DETAIL } from './../../../config/constance'
import SiderWarp from './../../../components/SiderWarp'
import * as UrlUtils from 'd-utils/lib/urlUtils'
const marked = require('marked');

marked.setOptions({
  renderer: new marked.Renderer(),
  highlight: function(code: any) {
    return require('highlight.js').highlightAuto(code).value;
  },
  pedantic: false,
  gfm: true,
  tables: true,
  breaks: false,
  sanitize: false,
  smartLists: true,
  smartypants: false,
  xhtml: false
});

interface IBlogDetailProps {
}

interface IBlogDetail {
  id: string;
  name: string;
  readCount: string;
  editDate: string;
  createDate: string;
  tagLists: IBlogListCategorieOrTag[];
  content: string;
}

const BlogDetail: React.FC<IBlogDetailProps> = () => {
  const [detail, setDetail] = useState<IBlogDetail>(DEFAULT_BLOG_DETAIL)

  const classString = classNames({
    [`${PROJECT_NAME}-blog-detail`]: true
  })

  const { id } = UrlUtils.parseUrl(decodeURIComponent(location.href))

  useEffect(() => {
    const fetchDetail = async () => {
      const res = await getBlogDetail(id)
      console.log(res.data)
      setDetail((detail) => detail = res.data)
    }
    fetchDetail()
  }, [])
  return (
    <section className={classString}>
      <div className={`${classString}-content`}
           dangerouslySetInnerHTML = {{__html: marked(detail.content)}}>
      </div>
      <SiderWarp show={false} switchTop="20px" type="auto">
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
