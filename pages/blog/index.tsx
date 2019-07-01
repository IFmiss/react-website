import * as React from 'react'
import fetch from './../../utils/fetch'
import { IStore } from './../../store/types'
import classNames from 'classnames'
import GenericComponent from './../../components/Generic'
import { isBrowser } from './../../utils/utils'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import typeWriter from './../../utils/typewriter'
import Constance from './../../config/constance'
import Head from "next/head"
import { withRouter } from "next/router"
import Nav from './../../components/Nav'
import { HomeNav } from './../../config/nav'

interface IBlogProps {
  store?: IStore;
  prefixClass?: string;
  router?: any;
  name: string;
}

interface IBlogState {
  star: boolean;
}

class Blog extends GenericComponent<IBlogProps, IBlogState> {
  constructor (props: any) {
    super(props)
    this.state = {
      star: false
    }
  }

  getInitialProps = async (ctx: any) => {
    console.log('ctxctxctxctx', ctx)
  }

  private homeRef: any = React.createRef()

  componentDidMount () {
  }

  componentWillUnmount () {
  }


  public render () {
    const { store, prefixClass } = this.props
    const { star } =this.state 
    console.log('blog', this.props)
    const classes = classNames({
      [`${prefixClass}-blog`]: true,
      [`dw-page-router`]: true
    })

    console.log('blog', this.props)

    return (
      <>
        <Head>
          <title>个人博客</title>
          <meta name="keywords" content={"个人博客 - 记录走过的每一步"} />
        </Head>
        <>
          {/* <Nav lists={HomeNav}>
          </Nav> */}
          <section className={classes}>
            blog
          </section>
        </>
      </>
    )
  }
}

export default withRouter(Blog)
