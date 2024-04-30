import React from 'react';

import { IonRow, IonCol } from '@ionic/react';

import { TemplatesProps } from '../index';
import { DataContextState, useData } from 'contexts/DataContext';

import ItemList from './ItemList';

const AllergenicList: React.FC<TemplatesProps> = ({ section, lang }) => {
  const { getData }: DataContextState = useData();

  const lists = getData({ collection: 'lists', from: 'state' });
  const list = lists.dictionary[section.lists[0]];

  return (
    <IonRow>
      <IonCol>
        <ItemList list={list} lang={lang} />
      </IonCol>
    </IonRow>
  );
};

export default AllergenicList;
