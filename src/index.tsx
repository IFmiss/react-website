import * as ReactDOM from 'react-dom'
import App from './app'
import * as React from 'react'
import './style/index.less'
import { initPageMode, initDAudiConfig } from './utils/utils'
import selfEvent from './utils/event'
import './assets/svg/index'

selfEvent.addVisiblityChange()
initDAudiConfig()

ReactDOM.render(
  <div id="dw-react-web-container" className={initPageMode()}>
    <App/>
  </div>,
  document.getElementById('react-website')
)
