import React from 'react';

import { IonGrid } from '@ionic/react';

import { TemplatesProps } from '../index';
import { DataContextState, useData } from 'contexts/DataContext';
import { PageSection } from 'definitions/models';
import PageSectionTemplate from 'components/page/SectionContainer';

const AllergensTable: React.FC<TemplatesProps> = ({ page, lang }) => {
  const { getData }: DataContextState = useData();

  const sections = getData({ collection: 'pageSections', from: 'system' });
  const section: PageSection = sections.dictionary[page.sections[0]];

  return (
    <IonGrid style={{ width: '95vw' }}>
      <PageSectionTemplate section={section} lang={lang} />
    </IonGrid>
  );
};

export default AllergensTable;
