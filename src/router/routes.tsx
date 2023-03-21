import Download from '../pages/download'
import Home from '../pages/home'
import Keyword from '../pages/keyword'
import Login from '../pages/login'
import MyRouteProp from './MyRouteProp'

export const ROUTE = {
  HOME: '/',
  LOGIN: '/login',
  DOWNLOAD: '/download',
  KEYWORD: '/keyword',
}

const routes: Array<MyRouteProp> = [
  {path: ROUTE.HOME, element: <Home />},
  {
    path: ROUTE.LOGIN,
    element: <Login />,
  },
  {path: ROUTE.DOWNLOAD, element: <Download />},
  {path: ROUTE.KEYWORD, element: <Keyword />},
]
export default routes
