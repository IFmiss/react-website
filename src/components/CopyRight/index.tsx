import React from 'react'
import { PROJECT_NAME, COPY_RIGHT_CONFIG } from './../../config/constance'
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
      <span className={`${classString}-info list`}>© 2016 - { formatDate('yyyy', new Date()) } from dw</span>
      <span className="list split"> | </span>
      <React.Fragment>
        {
          COPY_RIGHT_CONFIG.map((item) => (
            item.to.includes('http') ? (
              <a className="list" target="_black" key={item.name} href={item.to}>{item.name}</a>
            ) : (
              <Link className="list" key={item.name} to={item.to}>{item.name}</Link>
            )
          ))
        }
      </React.Fragment>
    </div>
  )
}
export default CopyRight
