import React from 'react';
import { IonContent, IonList, IonItem, IonLabel } from '@ionic/react';

import { DataContextState, useData } from 'contexts/DataContext';

const ConfigGeneralInfo: React.FC = () => {
  const { generalInfo }: DataContextState = useData();

  return (
    <IonContent>
      <IonList>
        <IonItem>
          <IonLabel>{`Nombre: ${generalInfo?.companyName}`}</IonLabel>
        </IonItem>
        <IonItem>
          <IonLabel>{`Web: ${generalInfo?.url}`}</IonLabel>
        </IonItem>
        <IonItem>
          <IonLabel>Lenguaje base: Español</IonLabel>
        </IonItem>
      </IonList>
    </IonContent>
  );
};

export default ConfigGeneralInfo;
