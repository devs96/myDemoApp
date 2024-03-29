/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
import React from 'react';

import {Provider} from 'react-redux';
import {MainStack} from './App/Navigations/MainStack';
import {store} from './App/Store/Store';

const App = () => {
  return (
    <Provider store={store}>
      {/* <DrawerBar /> */}
      <MainStack />
    </Provider>
  );
};

export default App;
