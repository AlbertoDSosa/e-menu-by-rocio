import { Redirect, Route } from 'react-router-dom';

import { IonApp, IonRouterOutlet } from '@ionic/react';

import { IonReactRouter } from '@ionic/react-router';

import { DataContextProvider } from './contexts/DataContext';

import Home from './pages/Home';
import Menu from './pages/Menu';
import Page from './pages/Page';
import Config from './pages/Config';
import Screensaver from 'pages/Screensaver';
import Flags from 'pages/Flags';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import './theme/main.css';

// setupConfig({
//   animated: false
// });

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <DataContextProvider>
        <IonRouterOutlet>
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/screensaver">
            <Screensaver />
          </Route>
          <Route exact path="/config">
            <Config />
          </Route>
          <Route exact path="/config/categories">
            <Config />
          </Route>
          <Route exact path="/config/screensaver">
            <Config />
          </Route>
          <Route path="/config/categories/:key">
            <Config />
          </Route>
          <Route exact path="/config/items">
            <Config />
          </Route>
          <Route path="/config/items/:key">
            <Config />
          </Route>
          <Route exact path="/config/lists">
            <Config />
          </Route>
          <Route path="/config/lists/:key">
            <Config />
          </Route>
          <Route path="/config/listItem/:key">
            <Config />
          </Route>
          <Route exact path="/config/menus">
            <Config />
          </Route>
          <Route path="/config/menus/:key">
            <Config />
          </Route>
          <Route path="/config/pageMenuItem/:key">
            <Config />
          </Route>
          <Route path="/config/slides/:key">
            <Config />
          </Route>
          <Route path="/flags">
            <Flags />
          </Route>
          <Route path="/menu/:lang/:menuId">
            <Menu />
          </Route>
          <Route path="/page/:lang/:pageId">
            <Page />
          </Route>
        </IonRouterOutlet>
      </DataContextProvider>
    </IonReactRouter>
  </IonApp>
);

export default App;
