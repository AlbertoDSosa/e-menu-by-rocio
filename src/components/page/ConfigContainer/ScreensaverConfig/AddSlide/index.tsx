import React, { useState } from 'react';
import { useData, DataContextState } from 'contexts/DataContext';
import slugify from 'slugify';
import styles from './styles.module.css';
import { Collapse } from 'react-collapse';
import {
  IonList,
  IonListHeader,
  IonItem,
  IonLabel,
  IonButton,
  IonIcon,
  IonItemSliding,
  IonItemOptions,
  IonItemOption,
  IonModal,
  IonTextarea
} from '@ionic/react';

import {
  addOutline,
  chevronDownCircle,
  chevronForwardCircle
} from 'ionicons/icons';
import { DisplayInfo, Slide } from 'definitions/models';

export interface AddSlideInfo {
  title: string;
  description: string;
  slug: string;
}

const AddSlide: React.FC = () => {
  const { screensaver, getData, create }: DataContextState = useData();
  const slides = getData({ collection: 'slides', from: 'state' });

  const [showAddSlideModal, setShowAddSlideModal] = useState<boolean>(false);
  const [collapseList, setCollapseList] = useState<boolean>(false);
  const [slideInfoValue, setSlideInfoValue] = useState<AddSlideInfo>(
    {} as AddSlideInfo
  );

  const onAddSlide = () => {
    create({
      entity: 'slide',
      payload: {
        lang: 'es',
        displayInfo: { es: slideInfoValue }
      },
      addToEntity: 'screensaver',
      collection: 'slides'
    });
    setShowAddSlideModal(false);
    setSlideInfoValue({} as AddSlideInfo);
  };

  return (
    <IonList>
      <IonListHeader>
        <IonLabel>
          <h1>Editar Diapositivas Disponibles</h1>
        </IonLabel>
        <IonButton
          onClick={() => {
            setShowAddSlideModal(true);
          }}
        >
          <IonIcon slot="start" icon={addOutline} />
          Añadir Diapositiva
        </IonButton>
        <IonModal
          isOpen={showAddSlideModal}
          cssClass={styles.modal}
          backdropDismiss={false}
        >
          <IonList>
            <IonListHeader>
              <h1>Añadir Diapositiva</h1>
            </IonListHeader>
            <IonItem>
              <IonLabel>Título:</IonLabel>
              <IonTextarea
                inputmode="text"
                wrap="off"
                cols={30}
                rows={6}
                value={slideInfoValue.title}
                onIonChange={(e) => {
                  setSlideInfoValue((info: any) => {
                    return {
                      ...info,
                      title: e.detail.value,
                      slug: slugify(e.detail.value as string, { lower: true })
                    };
                  });
                }}
              />
            </IonItem>
            <IonItem>
              <IonLabel>Descripción:</IonLabel>
              <IonTextarea
                inputmode="text"
                wrap="off"
                cols={30}
                rows={6}
                value={slideInfoValue.description}
                onIonChange={(e) => {
                  setSlideInfoValue((info: any) => {
                    return { ...info, description: e.detail.value };
                  });
                }}
              />
            </IonItem>
            <IonItem>
              <IonLabel>Slug:</IonLabel>
              <IonTextarea
                inputmode="text"
                wrap="off"
                cols={30}
                rows={6}
                value={slideInfoValue.slug}
                onIonChange={(e) => {
                  setSlideInfoValue((info: any) => {
                    return { ...info, slug: e.detail.value };
                  });
                }}
              />
            </IonItem>
            <IonItem className="ion-padding-vertical" lines="none">
              <IonButton
                expand="block"
                slot="end"
                size="default"
                onClick={() => {
                  setShowAddSlideModal(false);
                }}
              >
                Cancelar
              </IonButton>
              <IonButton
                slot="end"
                size="default"
                expand="block"
                onClick={() => {
                  onAddSlide();
                }}
              >
                Guardar
              </IonButton>
            </IonItem>
          </IonList>
        </IonModal>
        {!!screensaver.selectableSlides.length && (
          <IonButton
            color="dark"
            onClick={() => setCollapseList(!collapseList)}
          >
            <IonIcon
              icon={collapseList ? chevronDownCircle : chevronForwardCircle}
            />
          </IonButton>
        )}
      </IonListHeader>
      <Collapse isOpened={collapseList} checkTimeout={800}>
        {screensaver.selectableSlides.map((slideId: string) => {
          const slide: Slide = slides.dictionary[slideId];
          const slideInfo: DisplayInfo = slide.displayInfo['es'];

          return (
            <IonItemSliding key={slideId}>
              <IonItemOptions side="end">
                <IonItemOption
                  onClick={() => {
                    // doDeleteItem(itemId);
                  }}
                  color="danger"
                  expandable
                >
                  Borrar
                </IonItemOption>
              </IonItemOptions>

              <IonItem routerLink={`/config/slides/${slideId}`}>
                <IonLabel>{slideInfo.title}</IonLabel>
              </IonItem>
            </IonItemSliding>
          );
        })}
      </Collapse>
    </IonList>
  );
};

export default AddSlide;
