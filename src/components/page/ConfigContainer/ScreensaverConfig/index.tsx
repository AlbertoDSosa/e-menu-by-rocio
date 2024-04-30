import React from 'react';
import { useData } from 'contexts/DataContext';
import {
  IonContent,
  IonList,
  IonListHeader,
  IonItem,
  IonLabel,
  IonSelect,
  IonSelectOption
} from '@ionic/react';

import EditScreensaverSlides from './EditScreensaveSlides';
import AddSlide from './AddSlide';

const ScreensaverConfig: React.FC = () => {
  const { screensaver } = useData();
  const timeToShow = screensaver.selectableTimesToShow[screensaver.timeToShow];
  const timeToShowInfo = timeToShow.displayInfo['es'];
  const selectableTimesToShowArray = Object.values(
    screensaver?.selectableTimesToShow
  );

  const onChangeTimeToShow = (e: any) => {
    // console.log(e.detail.value);
  };

  return (
    <IonContent>
      <IonList>
        <IonListHeader>
          <h2>Editar Opciones de Salvapantallas</h2>
        </IonListHeader>
        <IonItem>
          <IonLabel>Duración de inactividad</IonLabel>
          <IonSelect
            value={timeToShow.id}
            placeholder={timeToShowInfo.title}
            onIonChange={onChangeTimeToShow}
          >
            {selectableTimesToShowArray.map((time: any) => {
              const displayInfo = time.displayInfo['es'];

              return (
                <IonSelectOption key={time.id} value={time.id}>
                  {displayInfo.title}
                </IonSelectOption>
              );
            })}
          </IonSelect>
        </IonItem>
      </IonList>
      <AddSlide />
      <EditScreensaverSlides />
    </IonContent>
  );
};

export default ScreensaverConfig;
