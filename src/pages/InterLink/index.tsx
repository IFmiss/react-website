import React from "react";
import { PROJECT_NAME } from "./../../config/constance";
import classNames from 'classnames'

const InterLink: React.FC = () => {
  const classString = classNames({
    [`${PROJECT_NAME}-home`]: true,
    [`dw-page-router`]: true
  })
  return (
    <div className={classString}>
      this is inter link
    </div>
  )
}

export default InterLink
