import React, {useEffect, useState} from 'react'
import fetch from './../../utils/fetch'
import { IStore } from './../../store/types'
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import classNames from 'classnames'
import { PROJECT_NAME } from './../../config/constance'
import BlogList from './../../components/BlogList'

interface IBlogProps {}

const Blog: React.FC = (props: IBlogProps) => {
  const classString = classNames({
    [`${PROJECT_NAME}-blog`]: true,
    [`dw-page-router`]: true
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
    </div>
  )
}

export default Blog
