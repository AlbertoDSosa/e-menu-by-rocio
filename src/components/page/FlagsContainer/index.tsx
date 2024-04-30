import React from 'react';
import { DataContextState, useData } from 'contexts/DataContext';
import {
  IonContent,
  IonGrid,
  IonRow,
  IonCol,
  IonCard,
  IonImg
  // IonCardContent,
  // IonCardHeader,
  // IonCardTitle
  // IonCardSubtitle
} from '@ionic/react';

const FlagsContainer: React.FC = () => {
  const { generalInfo, getData }: DataContextState = useData();
  const appLanguages = generalInfo?.appLanguages;

  const languages = getData({ collection: 'languages', from: 'system' });
  const images = getData({ collection: 'images', from: 'system' });
  // const qrImg = images.dictionary['image->qr->qr-flag'];

  return (
    <IonContent fullscreen>
      <IonGrid style={{ width: '70vw' }}>
        <IonRow
          className="ion-justify-content-center ion-align-items-center"
          style={{ height: '90vh' }}
        >
          {appLanguages?.map((lang: string) => {
            const language = languages.dictionary[lang];
            // const title = language.title[baseLanguage];
            const image = images.dictionary[language.mainImg];

            return (
              <IonCol size="3" key={lang}>
                <IonCard routerLink={`/menu/${lang}/pageMenu->main-menu`}>
                  {image && (
                    <IonImg src={image.full.src} alt={image.full.title} />
                  )}
                  {/* <IonCardHeader>
                      <IonCardTitle>{title}</IonCardTitle>
                      <IonCardSubtitle>Plato</IonCardSubtitle>
                    </IonCardHeader> */}
                  {/* <IonCardContent>{title}</IonCardContent> */}
                </IonCard>
              </IonCol>
            );
          })}
          {/* <IonCol size="3">
              {qrImg && <IonImg src={qrImg.full.src} alt={qrImg.full.title} />}
            </IonCol> */}
        </IonRow>
      </IonGrid>
    </IonContent>
  );
};

export default FlagsContainer;
