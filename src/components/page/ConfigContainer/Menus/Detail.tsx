// import React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';

import { IonContent } from '@ionic/react';

// import { DataContextState, useData } from 'contexts/DataContext';

// import EditDisplayInfo from '../EditDisplayInfo';
import EditItems from '../EditItems';
interface ListDetailPageProps
  extends RouteComponentProps<{
    key: string;
  }> {}

const MenuDetail: React.FC<ListDetailPageProps> = ({ match }) => {
  // const {
  //   getData,
  // }: DataContextState = useData();

  const key = match.params.key;
  // const menus = getData({collection: 'pageMenus', from: 'state'});
  // const menu = menus?.dictionary[key];

  return (
    <IonContent>
      {/* <EditDisplayInfo
        entityName="pageMenu"
        entity={menu}
      /> */}
      <EditItems entityId={key} entity="pageMenu" />
    </IonContent>
  );
};

export default withRouter(MenuDetail);
