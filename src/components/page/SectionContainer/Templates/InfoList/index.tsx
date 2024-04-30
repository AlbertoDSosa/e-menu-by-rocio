import React from 'react';

import { IonRow, IonCol } from '@ionic/react';

import { TemplatesProps } from '../index';
import { DataContextState, useData } from 'contexts/DataContext';
import InfoCardList from 'components/page/ListContainer/Templates/InfoCardList';

const InfoList: React.FC<TemplatesProps> = ({ section, lang }) => {
  const { getData }: DataContextState = useData();

  const lists = getData({ collection: 'lists', from: 'state' });
  const list = lists.dictionary[section.lists[0]];

  return (
    <IonRow>
      <IonCol>
        <InfoCardList list={list} lang={lang} />
      </IonCol>
    </IonRow>
  );
};

export default InfoList;
