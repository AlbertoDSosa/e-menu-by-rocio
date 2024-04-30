import React from 'react';
import { DataContextState, useData } from 'contexts/DataContext';
// import styles from './styles.module.css';
import { List, ListItem } from 'definitions/models';
import { IonGrid, IonRow, IonCol, IonText } from '@ionic/react';
import InfoCard from 'components/ui/InfoCard';

interface InfoCardListProps {
  list: List;
  lang: string;
}

const InfoCardList: React.FC<InfoCardListProps> = ({ list, lang }) => {
  const { getData }: DataContextState = useData();

  const listItems = getData({ collection: 'listItems', from: 'state' });
  const listInfo = list.displayInfo[lang];

  return (
    <IonGrid style={{ height: '80vh', width: '85vw' }}>
      <IonRow>
        {list.showTitle && (
          <IonCol color="dark" size="12">
            <IonText className="ion-text-center">
              <h2 style={{ fontWeight: 'bold' }}>{listInfo?.title}</h2>
              {list.showExtraInfo && <p>{listInfo?.extraInfo}</p>}
            </IonText>
          </IonCol>
        )}
      </IonRow>
      <IonRow
        style={{ height: '70vh', margin: '0 auto' }}
        className="ion-align-items-center ion-justify-content-center"
      >
        {list.items.map((itemId) => {
          const listItem: ListItem = listItems.dictionary[itemId];
          return (
            listItem.show && (
              <IonCol key={itemId} size="4">
                <InfoCard listItem={listItem} lang={lang} />
              </IonCol>
            )
          );
        })}
      </IonRow>
    </IonGrid>
  );
};

export default InfoCardList;
