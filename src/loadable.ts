import Loadable from 'react-loadable';
import Loading from './components/Loading'

export const Home = Loadable({
  loader: () => import('./pages/Home'),
  loading: Loading
})

export const BlogLists = Loadable({
  loader: () => import('./pages/Blog/Lists'),
  loading: Loading
})

export const Blog = Loadable({
  loader: () => import('./pages/Blog'),
  loading: Loading
})

export const BlogDetail = Loadable({
  loader: () => import('./pages/Blog/Detail'),
  loading: Loading
})

export const Setting = Loadable({
  loader: () => import('./pages/Setting'),
  loading: Loading
})

export const Nav = Loadable({
  loader: () => import('./components/Nav'),
  loading: Loading
})

export const Music = Loadable({
  loader: () => import('./pages/Music/index'),
  loading: Loading
})

export const MusicSheet = Loadable({
  loader: () => import('./pages/Music/Sheet'),
  loading: Loading
})

export const MusicRank = Loadable({
  loader: () => import('./pages/Music/Rank'),
  loading: Loading
})

export const MusicSearch = Loadable({
  loader: () => import('./pages/Music/Search'),
  loading: Loading
})

export const MusicSheetDetail = Loadable({
  loader: () => import('./pages/Music/SheetDetail'),
  loading: Loading
})

export const InterLink = Loadable({
  loader: () => import('./pages/InterLink'),
  loading: Loading
})
