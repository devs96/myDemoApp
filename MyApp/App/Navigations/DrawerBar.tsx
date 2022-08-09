import React, {useEffect} from 'react';

import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import {CustomDrawerBar} from '../Components/CustomDrawer';
import {MainStack} from './MainStack';

import * as RootNavigation from './RootNavigation';
import {Alert, Linking} from 'react-native';

const Drawer = createDrawerNavigator();

export const DrawerBar = () => {
  const linking = {
    prefixes: ['devtestingapp://', 'https://devtestingapp'],
  };

  useEffect(() => {
    // Get the deep link used to open the app
    const getUrl = async () => {
      const initialUrl = await Linking.getInitialURL();

      if (initialUrl === null) {
        return;
      }

      if (initialUrl.includes('AddTask')) {
        Alert.alert(initialUrl);
        // RootNavigation.navigate('AddTask');
      }
    };

    getUrl();
  });
  return (
    <NavigationContainer linking={linking} ref={RootNavigation.navigationRef}>
      <Drawer.Navigator
        drawerContent={props => <CustomDrawerBar props={props} />}
        screenOptions={{headerShown: false, drawerStyle: {width: '85%'}}}>
        <Drawer.Screen name="My App" component={MainStack} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};
