import React, {useEffect} from 'react';

import {I18nextProvider} from 'react-i18next';
import {ThemeProvider} from 'styled-components/native';

import RootNavigator from './navigators/root.navigator';
import {defaultTheme} from './theme';
import i18n from './core/i18n';
import {Provider} from 'react-redux';
import createStore from './store';
import {
  requestUserPermission,
  notificationListener,
} from '@core/helpers/push-notification.helper';

export const {store} = createStore();

const App = () => {
  useEffect(() => {
    (async () => {
      await requestUserPermission();
      await notificationListener();
    })();
  }, []);

  return (
    <ThemeProvider theme={defaultTheme}>
      <Provider store={store}>
        <I18nextProvider i18n={i18n}>
          <RootNavigator />
        </I18nextProvider>
      </Provider>
    </ThemeProvider>
  );
};

export default App;
