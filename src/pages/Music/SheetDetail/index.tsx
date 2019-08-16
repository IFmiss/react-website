import React, { useState } from 'react'
import classNames from 'classnames'
import './sheet-detail.less'
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { PROJECT_NAME, MUSIC_SEARCH_DEFAULT_LISMIT } from '../../../config/constance'

const SheetDetail: React.FC = (props) => {

  const classString = classNames({
    [`${PROJECT_NAME}-music-sheet-detail`]: true
  })
  return (
    <div className={classString}>
      this is sheet detail
    </div>
  )
}

export default SheetDetail
