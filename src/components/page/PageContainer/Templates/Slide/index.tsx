import { useState, useRef } from 'react';

import styles from '../../styles.module.css';
import slideStyles from './styles.module.css';

import {
  IonSlides,
  IonGrid,
  IonRow,
  IonCol,
  IonIcon,
  IonButton
} from '@ionic/react';

import { TemplatesProps } from '../index';

import { chevronBackOutline, chevronForwardOutline } from 'ionicons/icons';
import SlideList from './SlideList';

const SlideSection: React.FC<TemplatesProps> = ({ page, lang }) => {
  const slidesRef = useRef<HTMLIonSlidesElement>(null);

  const slideOpts = {
    speed: 400
  };

  const [isBeginning, setIsBeginning] = useState<boolean>(true);
  const [isEnd, setIsEnd] = useState<boolean>(false);

  const slideNext = async () => {
    const slides = await slidesRef.current;
    slides?.slideNext(400);
    const _isEnd = (await slides?.isEnd()) as boolean;
    const _isBeginning = (await slides?.isBeginning()) as boolean;

    if (_isEnd) {
      setIsEnd(_isEnd);
    }

    if (!_isBeginning) {
      setIsBeginning(_isBeginning);
    }
  };

  const slidePrev = async () => {
    const slides = await slidesRef.current;
    slides?.slidePrev(400);
    const _isBeginning = (await slides?.isBeginning()) as boolean;
    const _isEnd = (await slides?.isEnd()) as boolean;

    if (_isBeginning) {
      setIsBeginning(_isBeginning);
    }

    if (!_isEnd) {
      setIsEnd(_isEnd);
    }
  };

  return (
    <IonGrid className={styles.backgroundImg} style={{ height: '90vh' }}>
      <IonRow
        className="ion-align-items-center"
        style={{
          width: '90vw',
          height: '89vh',
          margin: '0 auto',
          backgroundColor: 'rgba(255,255,255,90%)'
        }}
      >
        <IonCol>
          <IonSlides
            ref={slidesRef}
            pager={true}
            options={slideOpts}
            onIonSlideNextStart={async () => {
              const slides = await slidesRef.current;
              const _isEnd = (await slides?.isEnd()) as boolean;
              const _isBeginning = (await slides?.isBeginning()) as boolean;

              if (_isEnd) {
                setIsEnd(_isEnd);
              }

              if (!_isBeginning) {
                setIsBeginning(_isBeginning);
              }
            }}
            onIonSlidePrevStart={async () => {
              const slides = await slidesRef.current;
              const _isBeginning = (await slides?.isBeginning()) as boolean;
              const _isEnd = (await slides?.isEnd()) as boolean;

              if (_isBeginning) {
                setIsBeginning(_isBeginning);
              }

              if (!_isEnd) {
                setIsEnd(_isEnd);
              }
            }}
          >
            <SlideList lang={lang} sectionIds={page.sections} />
          </IonSlides>
          <IonButton
            onClick={slidePrev}
            className={slideStyles.navigationButton}
            size="large"
            style={{
              position: 'absolute',
              top: '40%',
              left: '0',
              fontSize: '2.5em',
              zIndex: '10'
            }}
            color="dark"
            fill="clear"
            disabled={isBeginning}
          >
            <IonIcon icon={chevronBackOutline} />
          </IonButton>
          <IonButton
            onClick={slideNext}
            className={slideStyles.navigationButton}
            size="large"
            style={{
              position: 'absolute',
              top: '40%',
              right: '0',
              fontSize: '2.5em',
              zIndex: '10'
            }}
            color="dark"
            fill="clear"
            disabled={isEnd}
          >
            <IonIcon icon={chevronForwardOutline} />
          </IonButton>
        </IonCol>
      </IonRow>
    </IonGrid>
  );
};

export default SlideSection;
