import React, {useEffect, useState} from 'react'
import fetch from './../../../utils/fetch'
import { IStore } from './../../../store/types'
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import classNames from 'classnames'
import './blog.less'
import { PROJECT_NAME } from './../../../config/constance'
import BlogList from './../../../components/BlogList'
import SiderWarp from './../../../components/SiderWarp'

interface IBlogDetailProps {}

