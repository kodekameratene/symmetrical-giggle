import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonPage, IonRouterOutlet, IonSplitPane } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { AppPage } from './declarations';

import Menu from './components/Menu';
import Home from './pages/Home';
import List from './pages/List';
import DocumentCreator from './pages/DocumentCreator';
import { home, list } from 'ionicons/icons';

/* Core CSS required for Ionic components to work properly */
import '@ionic/core/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/core/css/normalize.css';
import '@ionic/core/css/structure.css';
import '@ionic/core/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/core/css/padding.css';
import '@ionic/core/css/float-elements.css';
import '@ionic/core/css/text-alignment.css';
import '@ionic/core/css/text-transformation.css';
import '@ionic/core/css/flex-utils.css';
import '@ionic/core/css/display.css';

const appPages: AppPage[] = [
  {
    title: 'Home',
    url: '/home',
    icon: home
  },
  {
    title: 'List',
    url: '/home/list',
    icon: list
  },
  {
    title: 'Document Creator',
    url: '/document/creator',
    icon: list
  }
];

const App: React.FunctionComponent = () => (
  <IonApp>
    <IonReactRouter>
      <IonSplitPane contentId="main">
        <Menu appPages={appPages} />
        <IonPage id="main">
          <IonRouterOutlet>
            <Route path="/:tab(home)" component={Home} exact={true} />
            <Route path="/:tab(home)/list" component={List} exact={true} />
            <Route path="/document/creator" component={DocumentCreator} exact={true} />
            <Route exact path="/" render={() => <Redirect to="/home" />} />
          </IonRouterOutlet>
        </IonPage>
      </IonSplitPane>
    </IonReactRouter>
  </IonApp>
);

export default App;
