import RestoList from '../views/pages/restoList';
import Detail from '../views/pages/detail';

const routes = {
  '/': RestoList,
  '/detail/:id': Detail,
};

export default routes;
