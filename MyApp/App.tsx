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
import {DrawerBar} from './App/Navigations/DrawerBar';
import {store} from './App/Store/Store';

const App = () => {
  return (
    <Provider store={store}>
      <DrawerBar />
    </Provider>
  );
};

export default App;
