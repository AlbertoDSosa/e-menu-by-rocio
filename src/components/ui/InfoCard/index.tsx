import React from 'react';
import { DataContextState, useData } from 'contexts/DataContext';
import { IonGrid, IonRow, IonCol, IonText } from '@ionic/react';
import { ListItem, Info, Image } from 'definitions/models';

interface InfoCardProps {
  listItem: ListItem;
  lang: string;
}

const InfoCard: React.FC<InfoCardProps> = ({ listItem, lang }) => {
  const { getData }: DataContextState = useData();

  const items = getData({ collection: 'items', from: 'state' });
  const images = getData({ collection: 'images', from: 'system' });
  const item: Info = items.dictionary[listItem.itemId];
  const itemInfo = item.displayInfo[lang];
  const infoImg: Image = images.dictionary[item.mainImg || item.defaultImg];

  return (
    <IonGrid>
      <IonRow>
        <IonCol>
          <img
            style={{ borderRadius: '50%', border: '1px solid' }}
            src={infoImg?.full.src}
            alt={infoImg?.full.title}
          />
        </IonCol>
        <IonCol className="ion-align-self-center">
          <IonText>
            {listItem.showTitle && (
              <h3 style={{ fontWeight: 'bold' }}>{itemInfo?.title}</h3>
            )}
          </IonText>
          <IonText>
            {listItem.showDescription && (
              <h4 style={{ margin: '.8em' }}>{itemInfo?.description}</h4>
            )}
          </IonText>
        </IonCol>
      </IonRow>
    </IonGrid>
  );
};

export default InfoCard;
