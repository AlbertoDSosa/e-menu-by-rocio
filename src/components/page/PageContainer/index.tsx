import React from 'react';
import { DataContextState, useData } from 'contexts/DataContext';
import Templates from './Templates';
import { IonContent } from '@ionic/react';
import { Page } from 'definitions/models';

interface PageProps {
  lang: string;
  pageId: string;
}

const PageContainer: React.FC<PageProps> = ({ pageId, lang }) => {
  const { getData }: DataContextState = useData();
  const pages = getData({ collection: 'pages', from: 'system' });
  const page: Page = pages.dictionary[pageId];

  return (
    <IonContent fullscreen>
      <Templates page={page} lang={lang} />
    </IonContent>
  );
};

export default PageContainer;
