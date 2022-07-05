import React from 'react';

import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import {CustomDrawerBar} from '../Components/CustomDrawer';
import {MainStack} from './MainStack';

const Drawer = createDrawerNavigator();

export const DrawerBar = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={props => <CustomDrawerBar props={props} />}
        screenOptions={{headerShown: false, drawerStyle: {width: '85%'}}}>
        <Drawer.Screen name="My App" component={MainStack} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};
