import React, {useEffect, useState} from 'react'
import fetch from '../../../utils/fetch'
import { IStore } from '../../../store/types'
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import classNames from 'classnames'
import './lists.less'
import { PROJECT_NAME } from '../../../config/constance'
import BlogList from '../../../components/BlogList'
import SiderWarp from '../../../components/SiderWarp'

interface IBlogProps {}

const Blog: React.FC = (props: IBlogProps) => {
  const classString = classNames({
    [`${PROJECT_NAME}-blog-lists-info`]: true,
  })
  const [data, setData] = useState([1, 2])
  const start = false

  useEffect(() => {
    const t = setTimeout(() => {
      setData(
        data.concat([1, 2, 3, 4])
      )
    }, 3000)

    return function remove () {
      clearTimeout(t)
    }
  }, [])

  return (
    <div className={classString}>
      <TransitionGroup>
        {
          data.map((item: any, index: number) => (
            <CSSTransition in={start}
                           key={index}
                           timeout={300 + index * 100}
                           classNames="side-left-fade"
                           appear={true}
                           unmountOnExit={false}>
              <BlogList></BlogList>
            </CSSTransition>
          ))
        }
      </TransitionGroup>
      <SiderWarp show={false} switchTop="40px" type="auto">
        <h4 className="sider-title">分类列表</h4>
        <div className="sider-lists">
          <span className="active">111</span>
          <span>222</span>
          <span>333</span>
          <span>444</span>
        </div>
        <h4 className="sider-title">标签列表</h4>
        <div className="sider-lists">
          <span className="active">111</span>
          <span>222</span>
          <span>333</span>
          <span>444</span>
        </div>
      </SiderWarp>
    </div>
  )
}

export default Blog
