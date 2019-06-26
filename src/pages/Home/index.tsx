import * as React from 'react'
import fetch from './../../utils/fetch'
import { IStore } from './../../store/types'
import classNames from 'classnames'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import './index.less'

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

  componentDidMount () {
    this.handleClick()
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
        <div onClick={this.handleClick}>this is home </div>
        <TransitionGroup>
          <CSSTransition
            in={star}
            timeout={300}
            classNames="side-up-fade"
            appear={true}
            unmountOnExit={false}>
            <div>this is home </div>
          </CSSTransition>
          <CSSTransition
            in={star}
            timeout={500}
            appear={true}
            classNames="side-up-fade"
            unmountOnExit={false}>
            <div>this is home </div>
          </CSSTransition>
          <CSSTransition
            in={star}
            timeout={700}
            appear={true}
            classNames="side-up-fade"
            unmountOnExit={false}>
            <div>this is home </div>
          </CSSTransition>
          <CSSTransition
            in={star}
            timeout={900}
            appear={true}
            classNames="side-up-fade"
            unmountOnExit={false}>
            <div>this is home </div>
          </CSSTransition>
          <CSSTransition
            in={star}
            timeout={1100}
            appear={true}
            classNames="side-up-fade"
            unmountOnExit={false}>
            <div>this is home </div>
          </CSSTransition>
          <CSSTransition
            in={star}
            timeout={1300}
            appear={true}
            classNames="side-up-fade"
            unmountOnExit={false}>
            <div>this is home </div>
          </CSSTransition>
        </TransitionGroup>
      </div>
    )
  }
}
