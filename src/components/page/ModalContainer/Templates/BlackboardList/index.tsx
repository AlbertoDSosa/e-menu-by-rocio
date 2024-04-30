import React from 'react';
import styles from './styles.module.css';

import { TemplatesProps } from '../index';
import { DataContextState, useData } from 'contexts/DataContext';
import ItemList from './ItemList';

import { IonGrid, IonRow, IonCol, IonText } from '@ionic/react';
import { List, ListModal } from 'definitions/models';
const BlackboardList: React.FC<TemplatesProps> = ({ modal, lang }) => {
  const { getData }: DataContextState = useData();
  const images = getData({ collection: 'images', from: 'system' });
  const lists = getData({ collection: 'lists', from: 'state' });
  const backgroundImg = images.dictionary[modal.backgroundImg];
  const modalInfo = modal.displayInfo[lang];

  const listModal: ListModal = modal;

  const listMain = lists.dictionary[listModal.lists[0]];
  const listInfo = listMain.displayInfo[lang];
  const modalImg = images.dictionary[modal.mainImg || modal.defaultImg];

  return (
    <div className={styles.container}>
      <IonGrid className={styles.list}>
        <IonRow className="ion-justify-content-center">
          <IonText className="ion-text-center">
            <h1 style={{ fontWeight: 'bold' }}>
              {listModal.lists.length === 1 ? listInfo.title : modalInfo?.title}
            </h1>
            <h2>
              {listModal.lists.length === 1
                ? listInfo.extraInfo
                : modalInfo?.extraInfo}
            </h2>
          </IonText>
        </IonRow>
        <IonRow className="ion-justify-content-center">
          {listModal?.lists.map((listKey) => {
            const list: List = lists.dictionary[listKey];
            return (
              <IonCol style={{ paddingLeft: '2em' }} key={listKey} size="6">
                <ItemList list={list} lang={lang} />
              </IonCol>
            );
          })}
          <IonCol size="6">
            <img src={modalImg?.full.src} alt="" />
          </IonCol>
        </IonRow>
      </IonGrid>
      {backgroundImg && (
        <img loading="lazy" alt="Background" src={backgroundImg.full?.src} />
      )}
    </div>
  );
};

export default BlackboardList;
