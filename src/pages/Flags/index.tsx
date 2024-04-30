import React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { IonPage } from '@ionic/react';
import FlagsContainer from 'components/page/FlagsContainer';

const Flags: React.FC<RouteComponentProps> = ({ history }) => {
  let touchScreen: any;

  const activeScreensaver = () => {
    clearTimeout(touchScreen);
    touchScreen = setTimeout(() => {
      history.push('/screensaver');
    }, 90000);
  };

  document.addEventListener('click', () => {
    activeScreensaver();
  });

  document.addEventListener('mousemove', () => {
    activeScreensaver();
  });

  document.addEventListener('touchmove', () => {
    activeScreensaver();
  });

  return (
    <IonPage>
      <FlagsContainer />
    </IonPage>
  );
};

export default withRouter(Flags);
