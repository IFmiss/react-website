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
import { parseUrl } from 'd-utils/lib/urlUtils'
import { isProduction } from './../../../utils/utils'
import marked from "marked";

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
  history: any;
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

interface IBlogPrevNext {
  id: string | null;
  name: string | null;
}

interface IBlogDetailInfo {
  next: IBlogPrevNext;
  prev: IBlogPrevNext;
  detail: IBlogDetail;
}

const BlogDetail: React.FC<IBlogDetailProps> = (props) => {
  const [blog, setBlog] = useState<IBlogDetailInfo>(DEFAULT_BLOG_DETAIL)
  const contentRef = useRef(null);
  const classString = classNames({
    [`${PROJECT_NAME}-blog-detail`]: true
  })

  const { id } = parseUrl(decodeURIComponent(location.href))

  const handleGo = (info: IBlogPrevNext) => {
    if (info.id) {
      props.history.push(`/blog/detail?id=${info.id}`)
    }
  }

  useEffect(() => {
    setBlog((blog) => blog = DEFAULT_BLOG_DETAIL)
    const fetchDetail = async () => {
      const res = await getBlogDetail(id)
      if (isProduction()) await pv(id)
      setBlog((blog) => blog = res.data)
    }
    fetchDetail()
  }, [id])

  return (
    <section className={classString}>
      {
        blog.detail.id ? (
          <div>
            <div className={`${classString}-mian`}>
              <h2>{blog.detail.name}</h2>
            </div>
            <div className={`${classString}-content`}
                 ref={contentRef}
                dangerouslySetInnerHTML = {{__html: marked(blog.detail.content)}}>
            </div>
            {
              blog.detail.editDate ? (
                <div>
                  <p>---------------</p>
                  最后编辑时间: {blog.detail.editDate}
                </div>
              ) : null
            }
            <div className={`${classString}-entry`}>
              <a className={`${classString}-entry-prev`}
                 onClick={handleGo.bind(null, blog.prev)}
                 title={blog.prev.name || ''}>
                { blog.prev.name ? `上一篇 : ${blog.prev.name}` : '' }
              </a>

              <a className={`${classString}-entry-next`}
                 onClick={handleGo.bind(null, blog.next)}
                 title={blog.next.name || ''}>
                { blog.next.name ? `下一篇 : ${blog.next.name}` : '' }
              </a>
            </div>
          </div>
        ) : (
          <LoadingTips show={!blog.detail.id} text="加载中..."/>
        )
      }
    </section>
  )
}

export default BlogDetail
