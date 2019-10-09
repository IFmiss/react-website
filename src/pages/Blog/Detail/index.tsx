import React, {useEffect, useState, useRef, useMemo, useLayoutEffect} from 'react'
import classNames from 'classnames'
import './detail.less'
import './../../../style/high-default.less'
import './../../../style/high-custom.less'
import {
  getBlogDetail,
  pv
} from './../action'
import LoadingTips from './../../../components/LoadingTips'
import { IBlogListCategorieOrTag } from '../../../components/BlogList'
import { PROJECT_NAME, DEFAULT_BLOG_DETAIL } from './../../../config/constance'
import * as UrlUtils from 'd-utils/lib/urlUtils'
import { isProduction } from './../../../utils/utils'
import * as HightLight from 'highlight.js'
import marked from "marked";

marked.setOptions({
  renderer: new marked.Renderer(),
  highlight: function(code: any) {
    return HightLight.highlightAuto(code).value;
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
  const contentRef = useRef(null);
  const classString = classNames({
    [`${PROJECT_NAME}-blog-detail`]: true
  })

  const { id } = UrlUtils.parseUrl(decodeURIComponent(location.href))

  useEffect(() => {
    const fetchDetail = async () => {
      const res = await getBlogDetail(id)
      if (isProduction()) await pv(id)
      setDetail((detail) => detail = res.data)
    }
    fetchDetail()
  }, [])

  return (
    <section className={classString}>
      {
        detail.id ? (
          <div>
            <div className={`${classString}-mian`}>
              <h2>{detail.name}</h2>
            </div>
            <div className={`${classString}-content`}
                 ref={contentRef}
                dangerouslySetInnerHTML = {{__html: marked(detail.content)}}>
            </div>
            {
              detail.editDate ? (
                <div>
                  <p>---------------</p>
                  最后编辑时间: {detail.editDate}
                </div>
              ) : null
            }
          </div>
        ) : (
          <LoadingTips show={!detail.id} text="加载中..."/>
        )
      }
    </section>
  )
}

export default BlogDetail
