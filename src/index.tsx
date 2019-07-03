import * as ReactDOM from 'react-dom'
import App from './app'
import * as React from 'react'
import './style/index.less'
import { initPageMode } from './utils/utils'

ReactDOM.render(
  <div id="dw-react-web-container" className={initPageMode()}>
    <App/>
  </div>,
  document.getElementById('react-website')
)
