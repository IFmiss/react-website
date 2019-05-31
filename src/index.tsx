import * as ReactDOM from 'react-dom'
import App from './app'
import * as React from 'react'
import store from './store/index'

store.colorStore.initSelfColor()

ReactDOM.render(
  <App store={store}/>,
  document.getElementById('react-website')
)
