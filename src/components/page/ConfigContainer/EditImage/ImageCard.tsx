import React from 'react';
import { useData, DataContextState } from 'contexts/DataContext';
import { IonCol, IonCard, IonImg } from '@ionic/react';
import { Image } from 'definitions/models';

interface ImageCardProps {
  img: Image;
  isMainImg: boolean;
  entityId: string;
}

const ImageCard: React.FC<ImageCardProps> = ({ img, isMainImg, entityId }) => {
  const { set }: DataContextState = useData();
  const doSetMainImage = () => {
    set({ entity: 'slide', entityId, action: 'id', id: img.id, info: 'image' });
  };

  return (
    <IonCol size="4" style={{ border: isMainImg ? '2px solid blue' : '' }}>
      <IonCard onClick={doSetMainImage} button={!isMainImg}>
        <IonImg src={img.thumbnail.src} alt={img.thumbnail.title} />
      </IonCard>
    </IonCol>
  );
};

export default ImageCard;
