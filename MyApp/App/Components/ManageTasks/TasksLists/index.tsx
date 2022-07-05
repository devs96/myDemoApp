import React, {FC} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import Colors from '../../../Theme/Colors/Colors';

import Tasks from '../Tasks';

export interface Data {
  projectId: string;
  title: string;
  company: string;
  priority: string;
  taskName: string;
  assigneeName: string;
  dueDate: string;
  dueTime: string;
  progress: string;
}

interface TaskListModel {
  data: Data[];
  navigation: any;
  passDataToParent: (projectId: string) => void;
}

const TasksLists: FC<TaskListModel> = ({
  data,
  navigation,
  passDataToParent,
}) => {
  return (
    <View style={styles.mainView}>
      <FlatList
        data={data}
        showsVerticalScrollIndicator={false}
        renderItem={({item, index}) => {
          return (
            <View style={styles.taskOuterView}>
              <Tasks
                data={item}
                navigation={navigation}
                passDataToParent={passDataToParent}
                key={index.toString()}
              />
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    marginBottom: '10%',
  },
  taskOuterView: {
    backgroundColor: Colors.WHITE,
    borderRadius: 3,
    marginVertical: '2%',
  },
});

export default TasksLists;
