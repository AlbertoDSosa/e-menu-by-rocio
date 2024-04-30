import React from 'react';

import { IonGrid, IonRow, IonCol } from '@ionic/react';

import { TemplatesProps } from '../index';
import { DataContextState, useData } from 'contexts/DataContext';

import ItemList from 'components/page/ListContainer/Templates/ItemList';
import { Image } from 'definitions/models';

const SimplsList: React.FC<TemplatesProps> = ({ section, lang }) => {
  const { getData }: DataContextState = useData();

  const lists = getData({ collection: 'lists', from: 'state' });
  const images = getData({ collection: 'images', from: 'system' });
  const list = lists.dictionary[section.lists[0]];
  const sectionImg: Image =
    images.dictionary[section.mainImg || section.defaultImg];

  return (
    <IonGrid style={{ padding: 0 }}>
      <IonRow className="ion-justify-content-center" style={{ height: '85vh' }}>
        <IonCol
          className="ion-align-self-center"
          size="11"
          style={{ padding: 0 }}
        >
          <div style={{ width: '100%', height: '45vh' }}>
            <ItemList list={list} lang={lang} />
          </div>
          <div style={{ width: '100%', height: '40vh' }}>
            <img src={sectionImg.full.src} alt={sectionImg.full.title} />
          </div>
        </IonCol>
      </IonRow>
    </IonGrid>
  );
};

export default SimplsList;
