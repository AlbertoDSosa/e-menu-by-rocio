import React from 'react';
import { DataContextState, useData } from 'contexts/DataContext';

import { IonSlide } from '@ionic/react';
import PageSectionTemplate from 'components/page/SectionContainer';
import { PageSection } from 'definitions/models';

interface SlideListProps {
  sectionIds: string[];
  lang: string;
}

const SlideList: React.FC<SlideListProps> = ({ sectionIds, lang }) => {
  const { getData }: DataContextState = useData();
  const sections = getData({ collection: 'pageSections', from: 'system' });
  return (
    <>
      {sectionIds.map((sectionKey) => {
        const section: PageSection = sections.dictionary[sectionKey];
        return (
          <IonSlide key={sectionKey}>
            <PageSectionTemplate section={section} lang={lang} />
          </IonSlide>
        );
      })}
    </>
  );
};

export default SlideList;
