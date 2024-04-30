import React from 'react';
import { Image } from 'definitions/models';
import {
  EditImageEntity,
  useData,
  DataContextState
} from 'contexts/DataContext';
import { IonGrid, IonRow } from '@ionic/react';
import ImageCard from './ImageCard';

interface ImageListProps {
  entity: EditImageEntity;
}
const ImageList: React.FC<ImageListProps> = ({ entity }) => {
  const { getData }: DataContextState = useData();
  const images = getData({ collection: 'images', from: 'state' });
  const imageList = entity.images!;

  return (
    <IonGrid>
      <IonRow>
        {imageList?.map((img: string) => {
          const itemListImg: Image = images.dictionary[img];

          return (
            <ImageCard
              key={img}
              img={itemListImg}
              isMainImg={img === entity.mainImg}
              entityId={entity.id}
            />
          );
        })}
      </IonRow>
    </IonGrid>
  );
};

export default ImageList;
