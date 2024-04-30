import React from 'react';

import { DataContextState, useData } from 'contexts/DataContext';
import { RouteComponentProps, withRouter } from 'react-router-dom';

import { IonContent } from '@ionic/react';

// import styles from './styles.module.css';

import CardList from './CardList';
interface MenusProps
  extends RouteComponentProps<{
    menuId: string;
    lang: string;
  }> {}

const MenusContainer: React.FC<MenusProps> = ({ match }) => {
  const { getData }: DataContextState = useData();
  const lang = match.params.lang;
  const menuId = match.params.menuId;
  const pageMenus = getData({ collection: 'pageMenus', from: 'state' });
  const menu = pageMenus.dictionary[menuId];

  return (
    <IonContent fullscreen>
      <CardList menus={menu.items} lang={lang} />
    </IonContent>
  );
};

export default withRouter(MenusContainer);
