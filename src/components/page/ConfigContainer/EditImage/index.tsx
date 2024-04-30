import React, { useState } from 'react';
import {
  IonList,
  IonListHeader,
  IonItem,
  IonLabel,
  IonButton,
  IonIcon
} from '@ionic/react';
import {
  EditImageEntity,
  useData,
  DataContextState
} from 'contexts/DataContext';
import { ImageSaveParams } from 'definitions/editions';
import { addOutline } from 'ionicons/icons';
import ImageList from './ImageList';
import AddImageModal from './AddImageModal';
interface EditImageProps {
  entity: EditImageEntity;
}

const EditImage: React.FC<EditImageProps> = ({ entity }) => {
  const { create }: DataContextState = useData();
  const [showImageEditor, setShowImageEditor] = useState<boolean>(false);

  const doSaveImage = (imageSaveParams: ImageSaveParams) => {
    create({
      collection: 'images',
      entity: 'image',
      addToEntity: 'slide',
      entityId: entity.id,
      payload: {
        lang: 'es',
        image: imageSaveParams.src,
        displayInfo: {
          es: { title: imageSaveParams.title, slug: imageSaveParams.title }
        }
      }
    });
  };

  return (
    <IonList>
      <IonListHeader color="dark">
        <IonLabel>
          <h2>Editar Imagen</h2>
        </IonLabel>
        <IonButton onClick={() => setShowImageEditor(true)}>
          <IonIcon icon={addOutline} />
          Añadir Imagen
        </IonButton>
        <AddImageModal
          showModal={showImageEditor}
          setShowModal={setShowImageEditor}
          doSaveImage={doSaveImage}
          size={{ width: 1920, height: 1080 }}
        />
      </IonListHeader>
      <IonItem>
        <ImageList entity={entity} />
      </IonItem>
    </IonList>
  );
};

export default EditImage;
