import React from 'react';

import { IonGrid } from '@ionic/react';

import { TemplatesProps } from '../index';
import { DataContextState, useData } from 'contexts/DataContext';
import { PageSection } from 'definitions/models';
import PageSectionTemplate from 'components/page/SectionContainer';

const Gallery: React.FC<TemplatesProps> = ({ page, lang }) => {
  const { getData }: DataContextState = useData();
  const sections = getData({ collection: 'pageSections', from: 'system' });

  const section: PageSection = sections.dictionary[page.sections[0]];

  return (
    <IonGrid className="ion-padding ion-margin-top" style={{ width: '85vw' }}>
      <PageSectionTemplate section={section} lang={lang} />
    </IonGrid>
  );
};

export default Gallery;
