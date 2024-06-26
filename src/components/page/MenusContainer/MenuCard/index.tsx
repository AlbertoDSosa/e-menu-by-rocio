import { useState } from 'react';
import { DataContextState, useData } from 'contexts/DataContext';
import styles from './styles.module.css';

import Modal from 'components/page/ModalContainer';
import { Item, PageMenuItem } from 'definitions/models';
import {
  IonCol,
  IonCard,
  IonImg,
  IonModal,
  // IonCardContent
  IonCardHeader,
  IonCardTitle
  // IonCardSubtitle
} from '@ionic/react';

interface MenuCardPros {
  menuItem: PageMenuItem;
  lang: string;
}

const MenuCard: React.FC<MenuCardPros> = ({ menuItem, lang }) => {
  const { getData }: DataContextState = useData();

  const items = getData({ collection: 'items', from: 'state' });
  const images = getData({ collection: 'images', from: 'system' });
  const modals = getData({ collection: 'modals', from: 'system' });

  const item: Item = items.dictionary[menuItem.itemId];
  const info = item.displayInfo;
  const title = info[lang].title;
  const image = images.dictionary[item.mainImg || item.defaultImg];
  const subMenuPath = `/menu/${lang}/${menuItem.subMenu}`;
  const pagePath = `/page/${lang}/${menuItem.page}`;
  const modal = modals.dictionary[menuItem.modal];

  const [showModal, setShowModal] = useState(false);

  return menuItem.isModalMode ? (
    <IonCol size="3">
      <IonCard
        style={{ height: '24em' }}
        onClick={() => setShowModal(true)}
        key={menuItem.id}
      >
        {image && (
          <IonImg src={image.thumbnail.src} alt={image.thumbnail.title} />
        )}
        <IonCardHeader>
          <IonCardTitle className="ion-text-center">{title}</IonCardTitle>
          {/* <IonCardSubtitle>{info.title}</IonCardSubtitle> */}
        </IonCardHeader>
        {/* <IonCardContent>{info.description}</IonCardContent> */}
      </IonCard>
      <IonModal
        isOpen={showModal}
        onDidDismiss={() => setShowModal(false)}
        cssClass={styles.modal}
      >
        <Modal modal={modal} lang={lang} />
      </IonModal>
    </IonCol>
  ) : (
    <IonCol size="3">
      <IonCard
        style={{ height: '24em' }}
        routerLink={menuItem.hasSubMenu ? subMenuPath : pagePath}
        key={menuItem.id}
      >
        {image && (
          <IonImg src={image.thumbnail.src} alt={image.thumbnail.title} />
        )}
        <IonCardHeader>
          <IonCardTitle className="ion-text-center">{title}</IonCardTitle>
          {/* <IonCardSubtitle>{info.title}</IonCardSubtitle> */}
        </IonCardHeader>
        {/* <IonCardContent>{info.description}</IonCardContent> */}
      </IonCard>
    </IonCol>
  );
};

export default MenuCard;
