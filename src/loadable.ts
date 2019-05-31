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
