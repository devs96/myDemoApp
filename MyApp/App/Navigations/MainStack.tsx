import React from 'react';

import {LinkingOptions, NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Data} from '../Components/ManageTasks/TasksLists';
import {GroupData, PeopleData} from '../Components/Messages/SegmentControl';
import AddTasks from '../Screens/AddTask';
import CreateGroup from '../Screens/CreateGroup';
import CreateGroupDetails from '../Screens/CreateGroupDetails';
import GroupInfo from '../Screens/GroupInfo';
import ManageTask from '../Screens/ManageTask';
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

//adb shell am start -W -a android.intent.action.VIEW -d "https://devtestingapp/creategroup/4"
//adb shell am start -W -a android.intent.action.VIEW -d "https://devtestingapp/bottombar/tasks/addtask
export const MainStack = () => {
  const linking: LinkingOptions<MainStackParamList> = {
    prefixes: ['devtestingapp://', 'https://devtestingapp'],
    config: {
      initialRouteName: 'BottomBar',
      screens: {
        BottomBar: {
          screens: {
            ManageTask: {
              initialRouteName: 'ManageTaskScreen',
              screens: {
                AddTask: {
                  path: 'addtask',
                },
              },
              path: 'tasks',
            },
          },
          path: 'bottombar',
        },
        CreateGroup: {
          path: 'creategroup/:personId',
        },
      },
    },
  };
  // const linking: LinkingOptions<MainStackParamList> = {
  //   prefixes: ['devtestingapp://', 'https://devtestingapp'],
  //   config: {
  //     initialRouteName: 'BottomBar',
  //     screens: {
  //       BottomBar: {
  //         screens: {
  //           ManageTask: {
  //             screens: {
  //               AddTask: {
  //                 path: 'addtask',
  //               },
  //             },
  //             path: 'tasks',
  //           },
  //         },
  //         path: 'bottombar',
  //       },
  //       // CreateGroup: {
  //       //   path: 'creategroup/:personId',
  //       // },
  //     },
  //   },
  // };

  return (
    <NavigationContainer linking={linking}>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName={'BottomBar'}>
        {/* <Stack.Screen name="AddTask" component={AddTask} /> */}
        <Stack.Screen name="BottomBar" component={TabBarNavigation} />
        <Stack.Screen name="CreateGroup" component={CreateGroup} />
        <Stack.Screen
          name="CreateGroupDetails"
          component={CreateGroupDetails}
        />
        <Stack.Screen name="GroupInfo" component={GroupInfo} />
        <Stack.Screen name="PersonInfo" component={PersonInfo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export type DemoStackParamList = {
  ManageTaskScreen: undefined;
  AddTask: undefined;
};

const DemoStack = createStackNavigator<DemoStackParamList>();

export const DemoStackList = () => {
  return (
    <DemoStack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={'ManageTaskScreen'}>
      <DemoStack.Screen name="ManageTaskScreen" component={ManageTask} />
      <DemoStack.Screen name="AddTask" component={AddTasks} />
    </DemoStack.Navigator>
  );
};
