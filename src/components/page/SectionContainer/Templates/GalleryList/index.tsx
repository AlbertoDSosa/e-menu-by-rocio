import { useState } from 'react';

import {
  IonRow,
  IonCol,
  IonCard,
  IonImg,
  IonCardHeader,
  IonCardSubtitle
} from '@ionic/react';

import { Image, Product, ProductListItem } from 'definitions/models';

import { TemplatesProps } from '../index';
import { DataContextState, useData } from 'contexts/DataContext';
import ItemDetailModal from 'components/page/ModalContainer/ItemDetail';

const GalleryList: React.FC<TemplatesProps> = ({ section, lang }) => {
  const { getData }: DataContextState = useData();
  const items = getData({ collection: 'items', from: 'state' });
  const listItems = getData({ collection: 'listItems', from: 'state' });
  const lists = getData({ collection: 'lists', from: 'state' });
  const images = getData({ collection: 'images', from: 'system' });
  const list = lists.dictionary[section.lists[0]];

  return (
    <IonRow>
      {list?.items.map((itemId: string) => {
        const listItem: ProductListItem = listItems.dictionary[itemId];
        const item: Product = items.dictionary[listItem.itemId];
        const info = item.displayInfo[lang];
        const image: Image = images.dictionary[item.mainImg || item.defaultImg];

        const [showModal, setShowModal] = useState(false);

        return (
          <IonCol size="3" key={itemId}>
            <ItemDetailModal
              lang={lang}
              item={item}
              listItem={listItem}
              showModal={showModal}
              setShowModal={setShowModal}
            />
            <IonCard
              style={{ height: '23em' }}
              onClick={() => setShowModal(true)}
            >
              {image && (
                <IonImg src={image.thumbnail.src} alt={image.thumbnail.title} />
              )}
              <IonCardHeader>
                <IonCardSubtitle color="dark">{info.title}</IonCardSubtitle>
              </IonCardHeader>
            </IonCard>
          </IonCol>
        );
      })}
    </IonRow>
  );
};

export default GalleryList;
