import React from 'react'
import { PROJECT_NAME } from './../../config/constance'
import classNames from 'classnames'
import { formatDate } from 'd-utils/lib/genericUtils'
import './copy-right.less';
import { Link } from 'react-router-dom'

const CopyRight: React.FC = () => {
  const classString = classNames({
    [`${PROJECT_NAME}-comp-copy-right`]: true
  })

  return (
    <div className={classString}>
      <span className={`${classString}-info list`}>© 2016 - { formatDate('yyyy', new Date()) }</span>
      <Link className="list" to="/interlink">友情链接</Link>
    </div>
  )
}
export default CopyRight
