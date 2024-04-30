import React from 'react';
import { IonContent, IonList, IonItem, IonLabel } from '@ionic/react';

import { DataContextState, useData } from 'contexts/DataContext';

const ConfigMenus: React.FC = () => {
  const { getData, generalInfo }: DataContextState = useData();

  const menus = getData({ collection: 'pageMenus', from: 'state' });
  const language = generalInfo?.baseLanguage;

  return (
    <IonContent>
      <IonList>
        {menus.array?.map((menu: any) => {
          const info = menu.displayInfo[language];

          return (
            menu.active && (
              <IonItem key={menu?.id} routerLink={`/config/menus/${menu?.id}`}>
                <IonLabel>
                  <h3>{info?.title}</h3>
                  {info.description && <p>{info.description}</p>}
                </IonLabel>
              </IonItem>
            )
          );
        })}
      </IonList>
    </IonContent>
  );
};

export default ConfigMenus;
