import * as Loadable from 'react-loadable'
import Loading from './components/Loading/index'

export const Home = Loadable({
  loader: () => import('./pages/home/index'),
  loading: Loading
})

export const Music = Loadable({
  loader: () => import('./pages/music/index'),
  loading: Loading
})

export const Blog = Loadable({
  loader: () => import('./pages/blog/index'),
  loading: Loading
})

export const Setting = Loadable({
  loader: () => import('./pages/setting/index'),
  loading: Loading
})

export const Nav = Loadable({
  loader: () => import('./components/Nav/index'),
  loading: Loading
})
