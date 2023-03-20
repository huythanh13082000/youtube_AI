import Home from '../pages/home'
import MyRouteProp from './MyRouteProp'

export const ROUTE = {
  HOME: '/',
}

const routes: Array<MyRouteProp> = [{path: ROUTE.HOME, element: <Home />}]
export default routes
