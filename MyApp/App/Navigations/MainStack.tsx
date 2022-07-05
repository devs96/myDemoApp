import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import AddTask from '../Screens/AddTask';
import CreateGroup from '../Screens/CreateGroup';
// import {NavigationContainer} from '@react-navigation/native';
import {Data} from '../Components/ManageTasks/TasksLists';
import {GroupData, PeopleData} from '../Components/Messages/SegmentControl';
import CreateGroupDetails from '../Screens/CreateGroupDetails';
import GroupInfo from '../Screens/GroupInfo';
import PersonInfo from '../Screens/PersonInfo';
import {TabBarNavigation} from './TabBarNavigation';

export type MainStackParamList = {
  AddTask?: {data?: Data};
  BottomBar: undefined;
  CreateGroup: undefined;
  CreateGroupDetails: {selectedPeople: PeopleData[]};
  GroupInfo: {groupData: GroupData};
  PersonInfo: {personData: PeopleData | undefined};
  DrawerBar: undefined;
};

const Stack = createStackNavigator<MainStackParamList>();

export const MainStack = () => {
  return (
    // <NavigationContainer>
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={'BottomBar'}>
      <Stack.Screen name="AddTask" component={AddTask} />
      <Stack.Screen name="BottomBar" component={TabBarNavigation} />
      {/* <Stack.Screen name="DrawerBar" component={DrawerBar} /> */}
      <Stack.Screen name="CreateGroup" component={CreateGroup} />
      <Stack.Screen name="CreateGroupDetails" component={CreateGroupDetails} />
      <Stack.Screen name="GroupInfo" component={GroupInfo} />
      <Stack.Screen name="PersonInfo" component={PersonInfo} />
    </Stack.Navigator>
    // </NavigationContainer>
  );
};
