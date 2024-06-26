import React from 'react';

import styles from '../../styles.module.css';

import { IonGrid, IonRow, IonCol } from '@ionic/react';

import { TemplatesProps } from '../index';
import { DataContextState, useData } from 'contexts/DataContext';
import PageSectionTemplate from 'components/page/SectionContainer';
import { PageSection } from 'definitions/models';

const OneRowTwoCols: React.FC<TemplatesProps> = ({ page, lang }) => {
  const { getData }: DataContextState = useData();
  const sections = getData({ collection: 'pageSections', from: 'system' });

  let colOneSection: PageSection = sections.dictionary[page.sections[0]];
  let colTwoSection: PageSection = sections.dictionary[page.sections[1]];

  return (
    <IonGrid
      className={styles.backgroundImg}
      style={{ height: '90vh', padding: '.5em' }}
    >
      <IonRow
        style={{
          width: '90vw',
          height: '88.5vh',
          margin: '0 auto',
          backgroundColor: 'rgba(255,255,255,90%)'
        }}
      >
        <IonCol size="8" style={{ padding: 0 }}>
          <PageSectionTemplate section={colOneSection} lang={lang} />
        </IonCol>
        <br />
        <IonCol size="4" style={{ padding: 0 }}>
          <PageSectionTemplate section={colTwoSection} lang={lang} />
        </IonCol>
      </IonRow>
    </IonGrid>
  );
};

export default OneRowTwoCols;
