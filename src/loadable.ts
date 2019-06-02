import * as Loadable from 'react-loadable'
import Loading from './components/Loading/index'

export const Home = Loadable({
  loader: () => import('./pages/Home/index'),
  loading: Loading
})

export const Music = Loadable({
  loader: () => import('./pages/Music/index'),
  loading: Loading
})

export const Blog = Loadable({
  loader: () => import('./pages/Blog/index'),
  loading: Loading
})

export const Setting = Loadable({
  loader: () => import('./pages/Setting/index'),
  loading: Loading
})

export const Nav = Loadable({
  loader: () => import('./components/Nav/index'),
  loading: Loading
})
