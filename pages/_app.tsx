// import App from './../app'
// import * as React from 'react'
// import store from './../store/index'
// import Head from 'next/head'
// import './../style/index.less'
// import Nav from './../components/Nav'
// import { isBrowser } from './../utils/utils'
// import { initPageMode } from './../utils/utils'
// import { observer } from 'mobx-react';

// isBrowser() && store.colorStore.initSelfColor()

// // // 初始化页面主题
// isBrowser() && initPageMode()

// @observer
// export default class Index extends React.Component {
//   render () {
//     // const { store } = this.props
//     console.log(this.props)
//     return (
//       <div>
//         <Head>
//           <title>个人网站</title>
//           <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
//         </Head>
//         <div>
//           <Nav/>
//         </div>
//       </div>
//     )
//   }
// }
import { observer } from 'mobx-react';
import App, {Container} from 'next/app'
import * as React from 'react'
import Nav from './../components/Nav'
import store, {initializeStore} from './../store/index'
import { Provider } from 'mobx-react'
import { isBrowser, initPageMode, changePageMode } from './../utils/utils'

interface IappContext {
  Component: any;
  ctx: any;
  router: any;
}

interface AppProps {}

interface AppState {
  mode?: string
}

@observer
export default class MyApp extends App<AppProps, AppState> {
  static async getInitialProps (appContext: IappContext) {
    let pageProps = {}
    if (appContext.Component.getInitialProps) {
      pageProps = await appContext.Component.getInitialProps(appContext.ctx)
    }
    return {pageProps}
  }

  // mode!: string;

  constructor (props: any) {
    super(props)

    // if (isBrowser()) {
    //   this.mode = initPageMode()
    // }
  }

  componentDidMount () {
    // setTimeout(() => {
    //   changePageMode(initPageMode() === 'light' ? 'dark' : 'light')
    // }, 3000)
    // changePageMode(initPageMode() === 'light' ? 'dark' : 'light')
  }

  render () {
    const {Component, pageProps} = this.props
    // const { mode } = this.state
    // console.log('_app.this.mode', this.mode)

    const vv = initPageMode()
    const a = {
      mode: vv
    }
    console.log('this is vv：', vv)
    console.log('this is vv：', a)
    return (
      <Container>
        <div id="dw-theme-container" className={vv}>
          <p>{vv}</p>
          <Nav {...store}></Nav>
          <Provider {...store}>
            <Component {...pageProps} {...store}/>
          </Provider>
        </div>
      </Container>
    )
  }
}