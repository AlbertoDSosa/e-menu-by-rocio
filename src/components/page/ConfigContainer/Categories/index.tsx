import { IonContent, IonList, IonItem, IonLabel } from '@ionic/react';

import { useData, DataContextState } from 'contexts/DataContext';

const ConfigCategories: React.FC = () => {
  const { getData, generalInfo }: DataContextState = useData();

  const categories = getData({ collection: 'categories', from: 'state' });
  const language = generalInfo?.baseLanguage;

  return (
    <IonContent>
      <IonList>
        {categories.array?.map((category: any) => {
          return (
            <IonItem
              key={category?.id}
              routerLink={`/config/categories/${category?.id}`}
            >
              <IonLabel>
                <h3>{category.displayInfo[language]?.title}</h3>
                <p>{category.displayInfo[language]?.description}</p>
              </IonLabel>
            </IonItem>
          );
        })}
      </IonList>
    </IonContent>
  );
};

export default ConfigCategories;
