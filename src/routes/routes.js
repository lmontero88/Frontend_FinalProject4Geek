import Home from '../pages/Home';
import Match from '../pages/Match';
import Profesores from '../pages/Profesores';
import Clasificados from '../pages/Clasificados';
import NotFound from '../pages/NotFound';

const routes = [
  {
    path: '/',
    exact: true,
    page: Home
  },
  {
    path: '/match',
    exact: false,
    page: Match
  },
  {
    path: '/profesores',
    exact: false,
    page: Profesores
  },
  {
    path: '/clasificados',
    exact: false,
    page: Clasificados
  },
  {
    path: '*',
    page: NotFound
  },
]

export default routes;