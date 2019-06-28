import * as React from 'react'
import fetch from './../../utils/fetch'
import { IStore } from './../../store/types'
import classNames from 'classnames'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import typeWriter from './../../utils/typewriter'
import Constance from './../../config/constance'

interface IHomeProps {
  store?: IStore;
  prefixClass?: string;
}

interface IHomeState {
  star: boolean;
}

export default class Home extends React.Component<IHomeProps, IHomeState> {
  constructor (props: any) {
    super(props)
    this.state = {
      star: false
    }
  }

  private homeRef: any = React.createRef()

  componentDidMount () {
    this.handleClick()
    if (!window.__FIRST_IN_HOME__) {
      this.initTypeWriter()
    }
  }

  componentWillUnmount () {
    window.__FIRST_IN_HOME__ = true
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
      [`${prefixClass}-home`]: true,
      [`dw-page-router`]: true
    })
    return (
      <div className={classes}>
        {
          !window.__FIRST_IN_HOME__ ? (
            <div ref={this.homeRef}></div>
          ) : (
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
          )
        }
      </div>
    )
  }
}
