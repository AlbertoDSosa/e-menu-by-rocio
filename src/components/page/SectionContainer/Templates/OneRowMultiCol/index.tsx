import React from 'react';

import { IonCol, IonGrid, IonRow, IonText } from '@ionic/react';

import { TemplatesProps } from '../index';
import { DataContextState, useData } from 'contexts/DataContext';
import { List } from 'definitions/models';

import ChunkItemList from 'components/page/ListContainer/Templates/ChunkItemList';

const OneRowMultiCol: React.FC<TemplatesProps> = ({ section, lang }) => {
  const { getData }: DataContextState = useData();

  const lists = getData({ collection: 'lists', from: 'state' });

  const list: List = lists.dictionary[section.lists[0]];

  const sectionInfo = section.displayInfo[lang];

  return (
    <IonGrid style={{ height: '80vh' }}>
      <IonRow style={{ width: '80vw', margin: '0 auto' }}>
        {section.showTitle && (
          <IonCol color="dark" size="12">
            <IonText className="ion-text-center">
              <h2 style={{ marginTop: '0.45em', fontWeight: 'bold' }}>
                {sectionInfo?.title}
              </h2>
              {section.showExtraInfo && <p>{sectionInfo?.extraInfo}</p>}
            </IonText>
          </IonCol>
        )}
      </IonRow>
      <IonRow style={{ width: '85vw', margin: '0 auto', padding: '1em' }}>
        <ChunkItemList
          list={list}
          chunkNumber={section.listItemsForCol}
          lang={lang}
        />
      </IonRow>
      <IonRow style={{ width: '65vw', margin: '0 auto' }}></IonRow>
    </IonGrid>
  );
};

export default OneRowMultiCol;
