import React from 'react';

import {
  IonPage,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonIcon,
  IonSplitPane,
  IonMenuButton,
  IonButtons,
  IonButton
} from '@ionic/react';

import { home, arrowBackOutline } from 'ionicons/icons';

import { RouteComponentProps, withRouter } from 'react-router-dom';

import ConfigMenu from './ConfigMenu';

import {
  DataContextState,
  useData,
  SystemCollection,
  StateColletion
} from 'contexts/DataContext';

interface ContainerProps
  extends RouteComponentProps<{
    key: string;
    lang: string;
  }> {
  title: string;
  collection?: SystemCollection | StateColletion;
}

const ConfigContainer: React.FC<ContainerProps> = ({
  children,
  history,
  match,
  collection,
  title
}) => {
  const { getData, generalInfo }: DataContextState = useData();
  const key = match.params.key;
  const lang = generalInfo?.baseLanguage;
  const collectionTitle = collection
    ? getData({ collection, from: 'state' }).dictionary[key].displayInfo[lang]
        ?.title
    : '';

  return (
    <IonSplitPane contentId="config">
      <ConfigMenu />
      <IonPage id="config">
        <IonHeader>
          <IonToolbar>
            <IonButtons>
              <IonMenuButton color="dark" />
              <IonButton color="dark" routerLink="/home">
                <IonIcon size="large" icon={home} />
              </IonButton>
              <IonButton color="dark" onClick={() => history.goBack()}>
                <IonIcon size="large" icon={arrowBackOutline} />
              </IonButton>
              <IonTitle>
                {title} {collectionTitle && `- ${collectionTitle}`}
              </IonTitle>
            </IonButtons>
          </IonToolbar>
        </IonHeader>
        {children}
      </IonPage>
    </IonSplitPane>
  );
};

export default withRouter(ConfigContainer);
