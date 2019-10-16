import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'
import './style/index.less'
import { initPageMode, initDAudiConfig } from './utils/utils'
import selfEvent from './utils/event'
import './assets/svg'
import PF from 'd-utils/lib/performanceUtils'
import LogUtils from 'd-utils/lib/logUtils'
import { CONSOLE_TEXT, CONSOLE_BGS } from './config/constance'

PF.logger()
LogUtils.logBeauty(CONSOLE_TEXT, {
  isMax: true,
  colors: CONSOLE_BGS
})

selfEvent.addVisiblityChange()
initDAudiConfig()

ReactDOM.render(
  <div id="dw-react-web-container" className={initPageMode()}>
    <App/>
  </div>,
  document.getElementById('react-website')
)
