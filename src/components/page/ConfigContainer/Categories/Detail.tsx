import { RouteComponentProps, withRouter } from 'react-router-dom';

import {
  IonContent,
  IonLabel,
  IonList,
  IonItem,
  IonListHeader
  // IonToggle
} from '@ionic/react';

import { DataContextState, useData } from 'contexts/DataContext';

// import EditDisplayInfo from '../EditDisplayInfo';
import { Category, Item } from 'definitions/models';

interface CategoryDetailPageProps
  extends RouteComponentProps<{
    key: string;
  }> {}

const CategoryDetail: React.FC<CategoryDetailPageProps> = ({ match }) => {
  const { getData, generalInfo }: DataContextState = useData();

  const language = generalInfo.baseLanguage;
  const categories = getData({ collection: 'categories', from: 'state' });
  const items = getData({ collection: 'items', from: 'state' });
  const category: Category = categories?.dictionary[match.params.key];

  return (
    <IonContent>
      {/* <EditDisplayInfo
        entityName="category"
        entity={category}
        update={updateDisplayInfo}
      /> */}
      {/* <IonList>
        <IonListHeader color="dark">
          <h4>Otra Información</h4>
        </IonListHeader>
        <IonItem>
          <IonLabel>Activa</IonLabel>
          <IonToggle
            color="dark"
            checked={category.active}
            onIonChange={() => {
              setActive('category', category.id);
            }}
          />
        </IonItem>
      </IonList> */}
      <IonList>
        <IonListHeader color="dark">
          <h4>Artículos de la Categoría</h4>
        </IonListHeader>
        {category.items?.map((itemId: string) => {
          const item: Item = items.dictionary[itemId];
          const info = item.displayInfo[language];
          return (
            <IonItem key={itemId} routerLink={`/config/items/${itemId}`}>
              <IonLabel>{info?.title}</IonLabel>
            </IonItem>
          );
        })}
      </IonList>
    </IonContent>
  );
};

export default withRouter(CategoryDetail);
