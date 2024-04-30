import { useState } from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import {
  IonContent,
  IonLabel,
  IonList,
  IonItem,
  IonListHeader,
  IonIcon,
  IonInput
} from '@ionic/react';

import { createOutline, saveOutline, closeCircleOutline } from 'ionicons/icons';

import { DataContextState, useData } from 'contexts/DataContext';

import EditDisplayInfo from '../EditDisplayInfo';
import EditAllergens from '../EditAllergens';

import PriceInput from './PriceInput';
import VariantsPriceInput from './VariantsPriceInput';
import { Product } from 'definitions/models';

interface ItemDetailPageProps
  extends RouteComponentProps<{
    key: string;
  }> {}

const ItemDetail: React.FC<ItemDetailPageProps> = ({ match }) => {
  const { getData, update }: DataContextState = useData();

  const items = getData({ collection: 'items', from: 'state' });
  const item: Product = items?.dictionary[match.params.key];
  const { number, type } = item;

  const [showNumberInput, setShowNumberInput] = useState(false);
  const [numberValue, setNumberValue] = useState(number);

  const updateNumber = (number: string) => {
    update({
      action: 'number',
      entity: 'item',
      payload: { id: item.id, number }
    });
    setShowNumberInput(!showNumberInput);
  };

  return (
    <IonContent>
      <EditDisplayInfo entityName="item" entity={item} />
      <IonList>
        <IonListHeader color="dark">
          <h4>Otra Información</h4>
        </IonListHeader>
        {type === 'product' && !item.hasVariants && (
          <PriceInput product={item} />
        )}
        {type === 'product' && item.hasVariants && (
          <VariantsPriceInput product={item} />
        )}
        {item.number && (
          <IonItem>
            {!showNumberInput ? (
              <>
                <IonLabel>{`Número de Artículo: ${numberValue}`}</IonLabel>
                <IonIcon
                  icon={createOutline}
                  size="large"
                  color="dark"
                  onClick={() => setShowNumberInput(!showNumberInput)}
                  slot="end"
                />
              </>
            ) : (
              <>
                <IonLabel>Número de Artículo: </IonLabel>
                <IonInput
                  value={numberValue}
                  onIonChange={(e) => setNumberValue(e.detail.value || '')}
                />
                <IonIcon
                  icon={closeCircleOutline}
                  size="large"
                  color="dark"
                  onClick={() => {
                    setNumberValue(number);
                    setShowNumberInput(!showNumberInput);
                  }}
                />
                <IonIcon
                  icon={saveOutline}
                  size="large"
                  color="dark"
                  onClick={() => updateNumber(numberValue)}
                />
              </>
            )}
          </IonItem>
        )}
        {/* <IonItem>
          <IonLabel>Activo</IonLabel>
          <IonToggle
            color="dark"
            checked={item.active}
            onIonChange={() => {
              setActive('item', item.id);
            }}
          />
        </IonItem> */}
      </IonList>
      {item.hasAllergens && <EditAllergens product={item} />}
    </IonContent>
  );
};

export default withRouter(ItemDetail);
