import React, { useRef, useState } from 'react';

import {
  IonPage,
  IonContent,
  IonSlides,
  IonSlide,
  IonIcon,
  IonButton,
  IonText
} from '@ionic/react';
import { DataContextState, useData } from 'contexts/DataContext';
import { play, restaurant, pause } from 'ionicons/icons';
import { Slide } from 'definitions/models';

const ScreensaverPage: React.FC = () => {
  const { getData, screensaver }: DataContextState = useData();
  const slides = getData({ collection: 'slides', from: 'state' });
  const images = getData({ collection: 'images', from: 'state' });
  const slideRef = useRef<HTMLIonSlidesElement>(null);

  const [slideRun, setSlideRun] = useState(true);

  const autoplayToggle = async () => {
    const slide = await slideRef.current;
    if (slideRun) {
      slide?.stopAutoplay();
      setSlideRun(false);
    } else {
      slide?.startAutoplay();
      setSlideRun(true);
    }
  };

  const slideOpts = {
    speed: 1000,
    autoplay: {
      delay: 5000
    }
  };

  return (
    <IonPage>
      <IonContent fullscreen style={{ position: 'relative' }}>
        <div
          style={{
            position: 'absolute',
            top: 60,
            left: 60,
            zIndex: 3,
            backgroundColor: 'rgba(255,255,255,90%)'
          }}
        >
          <IonButton
            onClick={() => {
              autoplayToggle();
            }}
            fill="outline"
            size="large"
            color="dark"
          >
            <IonIcon icon={slideRun ? pause : play} />
          </IonButton>
          <IonText>
            <h2 className="ion-text-center" style={{ margin: '.1em' }}>
              {slideRun ? 'Pause' : 'Play'}
            </h2>
          </IonText>
        </div>
        <div
          style={{
            position: 'absolute',
            top: 60,
            right: 60,
            zIndex: 3,
            backgroundColor: 'rgba(255,255,255,90%)'
          }}
        >
          <IonButton href="/flags" fill="outline" color="dark" size="large">
            <IonIcon icon={restaurant} />
          </IonButton>
          <IonText>
            <h2 style={{ margin: '.1em' }}>Menu</h2>
          </IonText>
        </div>
        <div
          style={{
            position: 'absolute',
            bottom: 60,
            right: 60,
            zIndex: 3,
            backgroundColor: 'rgba(255,255,255,90%)'
          }}
        >
          <img
            width={150}
            height={150}
            src="assets/img/touch-screen.png"
            alt="touchscreen"
          />
          <IonText>
            <h2 className="ion-text-center" style={{ margin: '.1em' }}>
              Touch Screen
            </h2>
          </IonText>
        </div>
        <div
          style={{
            position: 'absolute',
            bottom: 60,
            left: 60,
            zIndex: 3,
            backgroundColor: 'rgba(255,255,255,90%)'
          }}
        >
          <img
            width={200}
            height={150}
            src="assets/img/flags/qr-flag-bw.png"
            alt="touchscreen"
          />
          <IonText>
            <h2 className="ion-text-center" style={{ margin: '.1em' }}>
              e-Menu
            </h2>
          </IonText>
        </div>
        <IonSlides ref={slideRef} options={slideOpts}>
          {screensaver?.slides.map((slideId: string) => {
            const slide: Slide = slides.dictionary[slideId];
            const slideImg =
              images.dictionary[slide.mainImg || slide.defaultImg];

            return (
              <IonSlide key={slideId}>
                {slideImg.full && (
                  <img
                    loading="lazy"
                    src={slideImg.full?.src}
                    alt={slideImg.full?.title}
                  />
                )}
              </IonSlide>
            );
          })}
        </IonSlides>
      </IonContent>
    </IonPage>
  );
};

export default ScreensaverPage;
