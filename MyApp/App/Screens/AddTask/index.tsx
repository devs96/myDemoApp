import React, {useState} from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

import DropDown from '../../Components/DropDown';
import TextField from '../../Components/TextField';

import {useDispatch, useSelector} from 'react-redux';
import CustomButton from '../../Components/CustomButton/index';
import {Data} from '../../Components/ManageTasks/TasksLists';
import Popup from '../../Components/Popup';
import Colors from '../../Theme/Colors/Colors';
import FontFamily from '../../Theme/FontNames';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {MainStackParamList} from '../../Navigations/MainStack';
import {RootState} from '../../Store/Store';
import {typeActions} from '../../Store/Actions';

type AddTaskProps = NativeStackScreenProps<MainStackParamList, 'AddTask'>;

const AddTasks = ({route, navigation}: AddTaskProps) => {
  const {data} = {...route.params};
  const [companyValue, setCompanyValue] = useState<string>(
    data ? data!.company : 'Select Company',
  );
  const [title, setTitle] = useState<string>(!data ? 'Project' : data!.title);
  const [projectId, setProjectId] = useState<string>(
    !data ? '' : data!.projectId,
  );
  const [taskName, setTaskName] = useState<string>(!data ? '' : data!.taskName);
  const [assigneeName, setAssigneeName] = useState<string>(
    !data ? '' : data!.assigneeName,
  );
  const [progress, setProgress] = useState<string>(!data ? '' : data!.progress);
  const [priority, setPriority] = useState<string>(
    !data ? 'Select Priority' : data!.priority,
  );
  const [showPopup, setShowPopup] = useState<boolean>(false);

  const companyNames = ['5D', 'Google', 'Facebook', 'Microsoft'];
  const titles = ['Task/Goals', 'Training', 'Project'];
  const priorityValues = ['Emergency', 'Medium', 'Low'];

  const stateData = useSelector((state: RootState) => state.tasks.data);
  const dispatch = useDispatch();

  const onSubmit = () => {
    let tempData: Data[] = [...stateData];
    let objIndex = tempData.findIndex(obj => obj.projectId === projectId);
    if (objIndex === -1) {
      tempData.push({
        title,
        assigneeName: assigneeName,
        company: companyValue,
        dueDate: '23 DEC, 2021',
        dueTime: '05:00 PM',
        priority: priority,
        progress: progress,
        taskName: taskName,
        projectId: projectId,
      });
    } else {
      const newData: Data = {
        ...tempData[objIndex],
        title,
        assigneeName,
        company: companyValue,
        dueDate: '23 DEC, 2021',
        dueTime: '05:00 PM',
        priority,
        progress,
        taskName,
        projectId,
      };
      tempData[objIndex] = newData;
    }
    dispatch({type: typeActions.SET_DATA, payload: tempData});
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      {showPopup && (
        <Popup
          text={
            !data
              ? 'Are you sure you want to add?'
              : 'Are you sure you want to update?'
          }
          showPopup={setShowPopup}
          onOkayPress={() => {
            onSubmit();
          }}
        />
      )}

      <ScrollView style={styles.scrollView}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
          <View style={styles.container}>
            <Text style={styles.headerText}>Add Task</Text>

            <DropDown
              data={companyNames}
              placeholder={companyValue}
              setValue={setCompanyValue}
            />

            <View style={styles.marginVertical}>
              <Text style={styles.titleText}>Title</Text>
              <DropDown data={titles} placeholder={title} setValue={setTitle} />
            </View>

            <KeyboardAvoidingView>
              <View style={styles.marginVertical}>
                <Text style={styles.titleText}>Project ID</Text>
                <TextField
                  setValue={setProjectId}
                  placeholder={'Project ID'}
                  value={projectId}
                  isNumeric={true}
                />
              </View>

              <View style={styles.marginVertical}>
                <Text style={styles.titleText}>Task Name</Text>
                <TextField
                  setValue={setTaskName}
                  placeholder={'Task Name'}
                  value={taskName}
                />
              </View>

              <View style={styles.marginVertical}>
                <Text style={styles.titleText}>Assignee Name</Text>
                <TextField
                  setValue={setAssigneeName}
                  placeholder={'Assignee Name'}
                  isMultiLine={true}
                  value={assigneeName}
                />
              </View>

              <View style={styles.marginVertical}>
                <Text style={styles.titleText}>Progress</Text>
                <TextField
                  setValue={setProgress}
                  placeholder={'Enter Progress'}
                  value={progress}
                  isNumeric={true}
                />
              </View>

              <View style={styles.marginVertical}>
                <Text style={styles.titleText}>Priority</Text>
                <DropDown
                  data={priorityValues}
                  placeholder={priority}
                  setValue={setPriority}
                />
              </View>
            </KeyboardAvoidingView>
            <CustomButton
              text={'SUBMIT'}
              onPress={() => {
                setShowPopup(true);
              }}
            />
          </View>
        </TouchableWithoutFeedback>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: '5%',
    backgroundColor: Colors.BACKGROUND_WHITE,
  },
  scrollView: {
    flex: 1,
    paddingHorizontal: '5%',
  },
  headerText: {
    fontFamily: FontFamily.semiBold,
    fontSize: 28,
  },
  marginVertical: {
    marginVertical: '2%',
  },
  titleText: {
    color: Colors.BLACK,
    fontSize: 16,
  },
});

export default AddTasks;
