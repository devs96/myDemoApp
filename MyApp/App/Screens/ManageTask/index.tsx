import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {CompositeScreenProps} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';

import {useDispatch, useSelector} from 'react-redux';

import {NativeStackScreenProps} from '@react-navigation/native-stack';

import FAButton from '../../Components/FAB';
import TasksLists, {Data} from '../../Components/ManageTasks/TasksLists';
import Popup from '../../Components/Popup';
import {MainStackParamList} from '../../Navigations/MainStack';
import {TabBarParamsList} from '../../Navigations/TabBarNavigation';
import FontFamily from '../../Theme/FontNames';
import Colors from '../../Theme/Colors/Colors';
import {RootState} from '../../Store/Store';
import {typeActions} from '../../Store/Actions';

type ManageTaskProps = CompositeScreenProps<
  BottomTabScreenProps<TabBarParamsList, 'ManageTask'>,
  NativeStackScreenProps<MainStackParamList, 'BottomBar'>
>;

const ManageTask = ({navigation}: ManageTaskProps) => {
  const selector = useSelector((state: RootState) => state.tasks.data);
  const [showPopup, setShowPopup] = useState<boolean>(false);
  const [projectId, setProjectId] = useState<string>('');
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(selector);
  });

  const deleteData = () => {
    let tempData = selector.filter((item: Data) => {
      return item.projectId !== projectId;
    });
    dispatch({type: typeActions.SET_DATA, payload: tempData});
  };

  const getProjectId = (projectIdValue: string) => {
    setShowPopup(true);
    setProjectId(projectIdValue);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <FAButton
        onPress={() => {
          navigation.navigate('AddTask');
        }}
        iconName={'add'}
      />
      {showPopup && (
        <Popup
          text={'Are you sure you want to delete?'}
          showPopup={setShowPopup}
          onOkayPress={deleteData}
        />
      )}

      <View style={styles.container}>
        <View>
          <Text style={styles.headerText}>Manage task</Text>
        </View>
        <View style={styles.taskView}>
          {selector.length < 1 ? (
            <Text style={styles.noTaskText}>No tasks to show.</Text>
          ) : (
            <TasksLists
              data={selector}
              navigation={navigation}
              passDataToParent={getProjectId}
            />
          )}
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: '5%',
    marginTop: '5%',
    flex: 1,
  },
  safeArea: {
    flex: 1,
    backgroundColor: Colors.BACKGROUND_WHITE,
  },
  headerText: {
    fontFamily: FontFamily.semiBold,
    fontSize: 28,
    color: Colors.BLACK,
  },
  taskView: {
    marginTop: '3%',
  },
  noTaskText: {
    textAlign: 'center',
    marginTop: '5%',
  },
});

export default ManageTask;
