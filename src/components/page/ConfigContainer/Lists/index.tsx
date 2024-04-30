import React from 'react';
import { IonContent, IonList, IonItem, IonLabel } from '@ionic/react';

import { DataContextState, useData } from 'contexts/DataContext';

const ConfigLists: React.FC = () => {
  const { getData, generalInfo }: DataContextState = useData();

  const lists = getData({ collection: 'lists', from: 'state' });
  const language = generalInfo?.baseLanguage;

  return (
    <IonContent>
      <IonList>
        {lists.array?.map((list: any) => {
          const info = list.displayInfo[language];
          return (
            <IonItem key={list?.id} routerLink={`/config/lists/${list?.id}`}>
              <IonLabel>
                <h3>{info?.title}</h3>
                {info.description && <p>{info.description}</p>}
              </IonLabel>
            </IonItem>
          );
        })}
      </IonList>
    </IonContent>
  );
};

export default ConfigLists;
