import React from 'react'
import { Link } from 'react-router-dom'
import './blog-list.less'
import Constance from './../../config/constance'
import classNames from 'classnames'

interface IBlogList {
  id: string;
  title: string;
  date: string;
  disc: string;
  tags: string[];
}

interface IBlogListProps {
  list: IBlogList;
}

const BlogList = (props: IBlogListProps) => {
  const classString = classNames({
    [`${Constance.PROJECT_NAME}-comp-blog-list`]: true
  })

  const { list } = props

  return (
    <li className={classString}>
      <Link to={`/blog/detail?id=${list.id}`}>
        <h2 className={`${classString}-title`}>{list.title}</h2>
        <p className={`${classString}-disc`}>{list.disc}</p>
        <span className={`${classString}-date`}>编辑于: {list.date}</span>
      </Link>
    </li>
  )
}

BlogList.defaultProps = {
  list: {
    id: '12',
    title: '这是一个title',
    date: '2013-12-18 22:99:11',
    disc: '这是一个content这是一个content这是一个content这是一个content这是一个content这是一个content这是一个content这是一个content',
    tags: ['JavaScript', 'css', 'div']
  }
}

export default BlogList
