import { informationCircle, pricetags, list, grid } from 'ionicons/icons';
export const routes = {
  configPages: [
    {
      title: 'Información General',
      path: '/config',
      icon: informationCircle
    },
    { title: 'Categorías', path: '/config/categories', icon: pricetags },
    { title: 'Listas', path: '/config/lists', icon: list },
    { title: 'Menus', path: '/config/menus', icon: grid }
  ]
};

export interface IPage {
  title: string;
  path: string;
  icon: string;
  routerDirection?: string;
}
