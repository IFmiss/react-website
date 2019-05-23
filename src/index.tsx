import * as ReactDOM from 'react-dom'
import App from './app'
import * as React from 'react'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.render(
  <BrowserRouter>
    <App/>
  </BrowserRouter>,
  document.getElementById('react-website')
)
