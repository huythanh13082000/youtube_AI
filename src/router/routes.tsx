import Home from '../pages/home'
import MyRouteProp from './MyRouteProp'
const routes: Array<MyRouteProp> = [
  {
    path: '/home',
    element: <Home />,
  },
  {
    path: '/',
    element: <Home />,
  },
]
export default routes
