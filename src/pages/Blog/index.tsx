import * as React from 'react'
import fetch from './../../utils/fetch'
import { IStore } from './../../store/types'
import { CSSTransition ,TransitionGroup } from 'react-transition-group';
import classNames from 'classnames'
import Constance from './../../config/constance'
import BlogList from './../../components/BlogList'

interface IBlogProps {}

const Blog = (props: IBlogProps) => {
  const classString = classNames({
    [`${Constance.PROJECT_NAME}-blog`]: true,
    [`dw-page-router`]: true
  })
  const data = [1, 2, 3, 4, 5]
  const start = false
  return (
    <div className={classString}>
      this is Blog 
      <TransitionGroup>
        {
          data.map((item: any, index: number) => (
            <CSSTransition in={start}
                           key={index}
                           timeout={300}
                           classNames="side-up-fade"
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
