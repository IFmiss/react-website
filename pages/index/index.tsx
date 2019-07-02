import * as React from 'react'
import fetch from '../../utils/fetch'
import { IStore } from '../../store/types'
import classNames from 'classnames'
import GenericComponent from '../../components/Generic'
import { isBrowser, initPageMode } from '../../utils/utils'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import typeWriter from '../../utils/typewriter'
import Constance from '../../config/constance'
import Head from "next/head"
import { withRouter } from "next/router"
import Nav from '../../components/Nav'
import { HomeNav } from '../../config/nav'

interface IHomeProps {
  store?: IStore;
  prefixClass?: string;
  router?: any;
  name: string;
}

interface IHomeState {
  star: boolean;
}

class Home extends GenericComponent<IHomeProps, IHomeState> {
  constructor (props: any) {
    super(props)
    this.state = {
      star: false
    }
  }

  getInitialProps = async (ctx: any) => {
    initPageMode()
  }

  private homeRef: any = React.createRef()

  componentDidMount () {
    this.handleClick()
    console.log(window.__FIRST_IN_HOME__)
    if (isBrowser() && !window.__FIRST_IN_HOME__) {
      this.initTypeWriter()
    }
  }

  componentWillUnmount () {
    if (isBrowser()) {
      window.__FIRST_IN_HOME__ = true
    }
  }

  initTypeWriter = () => {
    typeWriter(Constance.TYPE_WRITER[0].text, Constance.TYPE_WRITER[0].tagName, this.homeRef.current, Constance.TYPE_WRITER[0].config)
      .then(() => typeWriter(Constance.TYPE_WRITER[1].text, Constance.TYPE_WRITER[1].tagName, this.homeRef.current, Constance.TYPE_WRITER[1].config))
        .then(() => typeWriter(Constance.TYPE_WRITER[2].text, Constance.TYPE_WRITER[2].tagName, this.homeRef.current, Constance.TYPE_WRITER[2].config))
  }

  handleClick = () => {
    this.setState({
      star: !this.state.star
    })
  }

  public render () {
    const { store, prefixClass } = this.props
    const { star } =this.state 
    console.log('Home', this.props)
    const classes = classNames({
      [`${prefixClass}-home`]: true
    })
    const classesContent = classNames({
      [`dw-page-router`]: true
    })

    console.log('home', this.props)

    return (
      <>
        <Head>
          <title>未曾遗忘的青春</title>
          <meta name="keywords" content={"未曾遗忘的青春 - 记录走过的每一步"} />
        </Head>
        <>
          {/* <Nav lists={HomeNav}>
          </Nav> */}
          <section className={classes}>
            {
              isBrowser() && !window.__FIRST_IN_HOME__ ? (
                <section className={classesContent} ref={this.homeRef}></section>
              ) : (
                <section className={classesContent}>
                  {
                    Constance.TYPE_WRITER.map((item, index) => {
                      return (
                        item.tagName === 'h1' ? (
                          <h1 key={index}>{item.text}</h1>
                        ) : item.tagName === 'h2' ? (
                          <h2 key={index}>{item.text}</h2>
                        ) : item.tagName === 'h3' ? (
                          <h3 key={index}>{item.text}</h3>
                        ) : item.tagName === 'h4' ? (
                          <h4 key={index}>{item.text}</h4>
                        ) : item.tagName === 'h5' ? (
                          <h5 key={index}>{item.text}</h5>
                        ) : item.tagName === 'h6' ? (
                          <h6 key={index}>{item.text}</h6>
                        ) : item.tagName === 'a' ? (
                          <a href={item.config.herf || ''} key={index}>{item.text}</a>
                        ) : item.tagName === 'p' ? (
                          <p key={index}>{item.text}</p>
                        ) : item.tagName === 'span' ? (
                          <span key={index}>{item.text}</span>
                        ) : (
                          <p key={index}>{item.text}</p>
                        )
                      )
                    })
                  }
                </section>
              )
            }
          </section>
        </>
      </>
    )
  }
}

export default withRouter(Home)
