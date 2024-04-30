import React from 'react';
import {
  IonContent,
  IonList,
  IonItem,
  IonLabel,
  IonListHeader
} from '@ionic/react';

import { DataContextState, useData } from 'contexts/DataContext';

const ConfigItems: React.FC = () => {
  const { getData, generalInfo }: DataContextState = useData();

  const items = getData({ collection: 'items', from: 'state' });
  const language = generalInfo?.baseLanguage;

  return (
    <IonContent>
      <IonList>
        <IonListHeader color="dark">
          <IonLabel>
            <h2>Productos</h2>
          </IonLabel>
        </IonListHeader>
        {items.array?.map((item: any) => {
          return (
            item?.type === 'product' && (
              <IonItem key={item?.id} routerLink={`/config/items/${item?.id}`}>
                <IonLabel>
                  <h2>{item.displayInfo[language]?.title}</h2>
                  <p>{item.displayInfo[language]?.description}</p>
                </IonLabel>
              </IonItem>
            )
          );
        })}
      </IonList>
      <IonList>
        <IonListHeader color="dark">
          <IonLabel>
            <h2>De Información</h2>
          </IonLabel>
        </IonListHeader>
        {items.array?.map((item: any) => {
          return (
            item.type === 'info' && (
              <IonItem key={item.id} routerLink={`/config/items/${item.id}`}>
                <IonLabel>
                  <h2>{item.displayInfo[language]?.title}</h2>
                  <p>{item.displayInfo[language]?.description}</p>
                </IonLabel>
              </IonItem>
            )
          );
        })}
      </IonList>
      <IonList>
        <IonListHeader color="dark">
          <IonLabel>
            <h2>Menus</h2>
          </IonLabel>
        </IonListHeader>
        {items.array?.map((item: any) => {
          return (
            item.type === 'menu' && (
              <IonItem key={item.id} routerLink={`/config/items/${item.id}`}>
                <IonLabel>
                  <h2>{item.displayInfo[language]?.title}</h2>
                  <p>{item.displayInfo[language]?.description}</p>
                </IonLabel>
              </IonItem>
            )
          );
        })}
      </IonList>
    </IonContent>
  );
};

export default ConfigItems;
