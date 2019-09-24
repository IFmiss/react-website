import React from 'react'
import { Link } from 'react-router-dom'
import './blog-list.less'
import { PROJECT_NAME } from './../../config/constance'
import classNames from 'classnames'
import Icon from './../Icon'

export interface IBlogListCategorieOrTag {
  id: string;
  name: string;
}

export interface IBlogList {
  id: string;
  name: string;
  readCount: string;
  editDate: string;
  createDate: string;
  categorie: IBlogListCategorieOrTag[];
  tagLists: IBlogListCategorieOrTag[];
  contentLite: string;
}

interface IBlogListProps {
  list: IBlogList;
}

const BlogList = (props: IBlogListProps) => {
  const classString = classNames({
    [`${PROJECT_NAME}-comp-blog-list`]: true
  })

  const { list } = props

  return (
    <li className={classString}>
      <Link to={`/blog/detail?id=${list.id}`}>
        <h2 className={`${classString}-title`}>{list.name}</h2>
        <div className={`${classString}-conf`}>
          <div className={`${classString}-date`} title={`创建于${list.createDate.split(' ')[0]}`}>
            <Icon svgId="creat" color="#999"> {list.createDate.split(' ')[0]} </Icon>
          </div>
          <div className={`${classString}-read`} title={`浏览量${list.readCount}`}>
            <Icon svgId="read" color="#999"> {list.readCount} </Icon>
          </div>
          <div className={`${classString}-tag`} title="分类">
            <Icon svgId="tag" color="#999">
              {
                list.tagLists && list.tagLists.map ((item, index) => (
                  <div className="cat-list" key={index}>
                    {
                      index > 0 ? (<span> , </span>) : null
                    }
                    {item.name}
                  </div>
                ))
              }
            </Icon>
          </div>
        </div>
      </Link>
    </li>
  )
}

BlogList.defaultProps = {
  list: {
    id: '1',
    name: '这是一个title',
    readCount: '2',
    editDate: '2013-12-18 22:99:11',
    createDate: '2013-12-18 22:99:11',
    contentLite: '这是一个content这是一个content这是一个content这是一个content这是一个content这是一个content这是一个content这是一个content',
    categorie: [{
      id: 1,
      name: '前端'
    }],
    tagLists: [{
      id: 1,
      name: 'js'
    }]
  }
}

export default BlogList
