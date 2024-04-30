import React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';

import {
  IonContent,
  IonList,
  IonListHeader,
  IonItem,
  IonLabel,
  IonToggle
} from '@ionic/react';

import { DataContextState, useData } from 'contexts/DataContext';

import EditDisplayInfo from '../EditDisplayInfo';
import EditItems from '../EditItems';

interface ListDetailPageProps
  extends RouteComponentProps<{
    key: string;
  }> {}

const ListDetail: React.FC<ListDetailPageProps> = ({ match }) => {
  const { generalInfo, getData, set }: DataContextState = useData();

  const lang = generalInfo.baseLanguage;
  const key = match.params.key;
  const lists = getData({ collection: 'lists', from: 'state' });
  const list = lists?.dictionary[key];
  const listInfo = list.displayInfo[lang];

  return (
    <IonContent>
      <EditDisplayInfo entityName="list" entity={list} />

      <EditItems entityId={key} entity="list" />
      <IonList>
        <IonListHeader color="dark">
          <h3>Opciones de Lista</h3>
        </IonListHeader>

        {/* <IonItem>
          <IonLabel>Mostrar Lista</IonLabel>
          <IonToggle
            color="dark"
            checked={list.show}
            onIonChange={() => {
              set('list', list.id);
            }}
          />
        </IonItem> */}

        <IonItem>
          <IonLabel>Mostrar Título</IonLabel>
          <IonToggle
            color="dark"
            checked={list.showTitle}
            onIonChange={() => {
              // setShowTitle('list', list.id);
              set({
                action: 'show',
                info: 'title',
                entity: 'list',
                id: list.id
              });
            }}
          />
        </IonItem>

        {listInfo.description && (
          <IonItem>
            <IonLabel>Mostrar Descripción</IonLabel>
            <IonToggle
              color="dark"
              checked={list.showDescription}
              onIonChange={() => {
                // setShowDescription('list', list.id);
                set({
                  action: 'show',
                  info: 'description',
                  entity: 'list',
                  id: list.id
                });
              }}
            />
          </IonItem>
        )}
        {listInfo.extraInfo && (
          <IonItem>
            <IonLabel>Mostrar Información Extra</IonLabel>
            <IonToggle
              color="dark"
              checked={list.showExtraInfo}
              onIonChange={() => {
                // setShowExtraInfo('list', list.id);
                set({
                  action: 'show',
                  info: 'extra-info',
                  entity: 'list',
                  id: list.id
                });
              }}
            />
          </IonItem>
        )}
      </IonList>
    </IonContent>
  );
};

export default withRouter(ListDetail);
