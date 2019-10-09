import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'
import './style/index.less'
import { initPageMode, initDAudiConfig } from './utils/utils'
import selfEvent from './utils/event'
import './assets/svg'
import XingNeng from 'd-utils/lib/performanceUtils'

XingNeng.logger()

selfEvent.addVisiblityChange()
initDAudiConfig()

ReactDOM.render(
  <div id="dw-react-web-container" className={initPageMode()}>
    <App/>
  </div>,
  document.getElementById('react-website')
)
