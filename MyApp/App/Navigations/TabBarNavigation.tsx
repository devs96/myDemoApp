import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Colors from '../Theme/Colors/Colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Calendar from '../Screens/Calendar/Calendar';
import Message from '../Screens/Message';
import ManageTask from '../Screens/ManageTask';

export type TabBarParamsList = {
  ManageTask: undefined;
  Calendar: undefined;
  Message: undefined;
};

const Tab = createBottomTabNavigator<TabBarParamsList>();

export const TabBarNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused}) => {
          let color = focused ? Colors.NAVY_BLUE_COLOR : Colors.BLACK;
          let iconName =
            route.name === 'Calendar'
              ? 'calendar-today'
              : route.name === 'Message'
              ? 'message'
              : 'assessment';
          return <Icon name={iconName} size={20} color={color} />;
        },
        tabBarActiveTintColor: Colors.NAVY_BLUE_COLOR,
        tabBarInactiveTintColor: Colors.BLACK,
        headerShown: false,
      })}>
      <Tab.Screen name="Calendar" component={Calendar} />
      <Tab.Screen name="Message" component={Message} />
      <Tab.Screen name="ManageTask" component={ManageTask} />
    </Tab.Navigator>
  );
};
