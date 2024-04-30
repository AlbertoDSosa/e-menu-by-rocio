import React from 'react';
import { IonGrid, IonRow, IonCol } from '@ionic/react';
import { TemplatesProps } from '../index';
import { DataContextState, useData } from 'contexts/DataContext';
import {
  ProductList,
  InfoList,
  Image,
  SectionTemplate
} from 'definitions/models';

import ItemList from 'components/page/ListContainer/Templates/ItemList';

const MultiRowsTwoCols: React.FC<TemplatesProps> = ({ section, lang }) => {
  const { getData }: DataContextState = useData();
  const lists = getData({ collection: 'lists', from: 'state' });
  const templates = getData({ collection: 'templates', from: 'system' });
  const sectionTemplate = templates.dictionary[section.template];
  const { styles: sectionStyles } = sectionTemplate as SectionTemplate;

  return (
    <IonGrid
      style={{
        height: sectionStyles.grid?.height,
        width: sectionStyles.grid?.width,
        padding: sectionStyles.grid?.padding
      }}
    >
      {section.lists.map((listId) => {
        const list: ProductList | InfoList = lists.dictionary[listId];
        const images = getData({ collection: 'images', from: 'system' });
        const listImg: Image =
          images.dictionary[list.mainImg || list.defaultImg];
        return (
          <IonRow style={{ width: '85vw', margin: '0 auto' }} key={listId}>
            <IonCol
              style={{ paddingLeft: '1em' }}
              size={sectionStyles.list?.colSize}
            >
              <ItemList list={list} lang={lang} />
            </IonCol>
            <IonCol size={sectionStyles.img?.colSize}>
              <img src={listImg.full.src} alt={listImg.full.title} />
            </IonCol>
          </IonRow>
        );
      })}
    </IonGrid>
  );
};

export default MultiRowsTwoCols;
