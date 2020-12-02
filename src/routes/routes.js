import Home from '../pages/Home';
import NotFound from '../pages/NotFound';

const routes = [
  {
    path: '/',
    exact: true,
    page: Home
  },
  {
    path: '*',
    page: NotFound
  }
]

export default routes;