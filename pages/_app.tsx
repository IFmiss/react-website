// import * as React from 'react'
// export default class Home extends React.Component {
//   render () {
//     return (
//       <div>111</div>
//     )
//   }
// }


// import * as ReactDOM from 'react-dom'
import App from './../app'
import * as React from 'react'
import store from './../store/index'
import './../style/index.less'
import { initPageMode } from './../utils/utils'
store.colorStore.initSelfColor()

// // 初始化页面主题
initPageMode()

export default class Index extends React.Component {
  render () {
    return (
      <div>11111</div>
    )
  }
}
