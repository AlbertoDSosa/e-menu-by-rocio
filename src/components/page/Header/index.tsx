import React, { useState } from 'react';

import {
  IonHeader,
  IonToolbar,
  IonIcon,
  IonButtons,
  IonButton,
  IonTitle,
  IonLabel,
  IonModal
} from '@ionic/react';

import styles from './styles.module.css';

import { RouteComponentProps, withRouter } from 'react-router-dom';
import { DataContextState, useData } from 'contexts/DataContext';
import {
  home,
  arrowBackOutline,
  informationCircleOutline,
  qrCode
} from 'ionicons/icons';

interface MenuHeaderProps
  extends RouteComponentProps<{
    pageId: string;
    menuId: string;
    lang: string;
  }> {}

const Header: React.FC<MenuHeaderProps> = ({ history, match }) => {
  const { getData, generalInfo }: DataContextState = useData();
  const lang = match.params.lang;
  const pages = getData({ collection: 'pages', from: 'system' });
  const menus = getData({ collection: 'pageMenus', from: 'state' });
  const images = getData({ collection: 'images', from: 'system' });
  const info = generalInfo.displayInfo[lang];

  const qrImage = images.dictionary[generalInfo.qrImg!];

  const [showQRModal, setShowQRModal] = useState(false);

  let title = '';

  if (match.path === '/page/:lang/:pageId') {
    const pageId = match.params.pageId;
    title = pages?.dictionary[pageId].displayInfo[lang].title;
  } else {
    const menuId = match.params.menuId;
    title = menus?.dictionary[menuId].displayInfo[lang].title;
  }

  return (
    <IonHeader>
      <IonToolbar style={{ height: '10vh' }}>
        <IonButtons
          style={{ height: '10vh' }}
          className="justify-header-content"
        >
          <IonButton
            style={{ height: '100%' }}
            color="dark"
            routerLink="/flags"
          >
            <IonIcon style={{ fontSize: '64px' }} icon={home} />
          </IonButton>
          <IonButton
            style={{ height: '100%' }}
            color="dark"
            onClick={() => history.goBack()}
          >
            <IonIcon style={{ fontSize: '64px' }} icon={arrowBackOutline} />
          </IonButton>
          <IonTitle
            style={{
              fontSize: '2em',
              fontWeight: 'bold'
            }}
            size="large"
          >
            {title}
          </IonTitle>
          <IonButton
            onClick={() => {
              setShowQRModal(!showQRModal);
            }}
          >
            <IonIcon size="large" icon={qrCode} />
          </IonButton>
          <IonLabel style={{ marginRight: '1em' }}>e-Menu</IonLabel>
          <IonIcon
            style={{ marginRight: '.25em' }}
            size="large"
            icon={informationCircleOutline}
          />
          <IonLabel>{info.extraInfo}</IonLabel>
        </IonButtons>
      </IonToolbar>
      <IonModal
        isOpen={showQRModal}
        cssClass={styles.modal}
        onDidDismiss={() => setShowQRModal(!showQRModal)}
      >
        <img src={qrImage.full.src} alt="" />
      </IonModal>
    </IonHeader>
  );
};

export default withRouter(Header);
