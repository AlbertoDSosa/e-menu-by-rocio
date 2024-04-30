import React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import PageContainer from 'components/page/PageContainer';
import { IonPage } from '@ionic/react';
import Header from 'components/page/Header';

interface MenuPageProps
  extends RouteComponentProps<{
    pageId: string;
    lang: string;
  }> {}

const MenuPage: React.FC<MenuPageProps> = ({ history, match }) => {
  const { pageId, lang } = match.params;
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
      <Header />
      <PageContainer lang={lang} pageId={pageId} />
    </IonPage>
  );
};

export default withRouter(MenuPage);
