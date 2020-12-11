import RestoList from '../views/pages/restoList';
import Detail from '../views/pages/detail';
import Favorite from '../views/pages/favorite';

const routes = {
  '/': RestoList,
  '/list': RestoList,
  '/detail/:id': Detail,
  '/favorite': Favorite,
};

export default routes;
