import Home from '../pages/Home';
import Match from '../pages/Match';
import Profesores from '../pages/Profesores';
import Clasificados from '../pages/Clasificados';
import Perfil from '../pages/Perfil';
import NotFound from '../pages/NotFound';
import MisMatch from '../pages/MisMatch';
import MisPublicaciones from '../pages/MisPublicaciones';
import FavJugadores from '../pages/Favoritos/Jugadores/FavJugadores';
import FavClasificados from '../pages/Favoritos/Clasificados/FavClasificados';
import FavProfesores from '../pages/Favoritos/Profesores/FavProfesores';
import EditarPerfil from '../pages/EditarPerfil/EditarPerfil';
import PageDetailPlayer from '../components/commons/PageDetailPlayer/PageDetailPlayer';

const routes = [
  {
    path: '/',
    exact: true,
    page: Home
  },
  {
    path: '/match',
    exact: true,
    page: Match
  },
  {
    path: '/match/:id',
    exact: true,
    page: PageDetailPlayer
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
    path: '/perfil',
    exact: false,
    page: Perfil
  },
  {
    path: '/editar_perfil',
    exact: false,
    page: EditarPerfil
  },
  {
    path: '/mis_match',
    exact: false,
    page: MisMatch
  },
  {
    path: '/mis_publiaciones',
    exact: false,
    page: MisPublicaciones
  },
  {
    path: '/favorito/jugadores',
    exact: false,
    page: FavJugadores
  },
  {
    path: '/favorito/clasificados',
    exact: false,
    page: FavClasificados
  },
  {
    path: '/favorito/profesores',
    exact: false,
    page: FavProfesores
  },
  {
    path: '*',
    page: NotFound
  },
]

export default routes;