import React, {FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

import Icon from 'react-native-vector-icons/MaterialIcons';
import Colors from '../../../Theme/Colors/Colors';
import FontFamily from '../../../Theme/FontNames';
import Priority from '../../Priority';

import ProgressBar from '../../ProgressBar';
import {Data} from '../TasksLists';

interface TasksProps {
  data: Data;
  navigation: any;
  passDataToParent: (projectId: string) => void;
}

const Tasks: FC<TasksProps> = ({data, navigation, passDataToParent}) => {
  return (
    <View style={styles.container}>
      <View style={styles.editTouchView}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('AddTask', {data: data});
          }}>
          <Icon name="edit" size={17} color={Colors.BLACK} />
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        onLongPress={() => {
          passDataToParent(data.projectId);
        }}>
        <View style={styles.titlePriorityView}>
          <View style={styles.projectIdView}>
            <Text style={styles.idText}>
              {`#${data.projectId}: ${data.title}`}
            </Text>
          </View>
          <View style={styles.priorityBoxOuter}>
            <Priority priority={data.priority} />
          </View>
        </View>
        <View>
          <Text style={styles.commonTextStyles}>{data.taskName}</Text>
          <Text style={styles.commonTextStyles}>{data.company}</Text>
          <Text style={styles.commonTextStyles}>{data.assigneeName}</Text>
          <Text style={styles.commonTextStyles}>Due date & time:</Text>
        </View>
        <View style={styles.calendarMainView}>
          <View style={styles.flexDirectionRow}>
            <View style={styles.calendarInnerView}>
              <Icon name="calendar-today" size={17} color={Colors.BLACK} />
              <Text style={styles.dateTimeText}>{data.dueDate}</Text>
            </View>
            <View style={styles.flexDirectionRow}>
              <Icon name="access-time" size={17} color={Colors.BLACK} />
              <Text style={styles.dateTimeText}>{data.dueTime}</Text>
            </View>
          </View>
          <View />
        </View>
        <ProgressBar progress={data.progress} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: '3%',
  },
  priorityBoxOuter: {
    flex: 0.3,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },

  commonTextStyles: {
    lineHeight: 23,
    fontSize: 16,
    color: Colors.TEXT_GRAY,
  },
  dateTimeText: {
    marginLeft: '2%',
    fontSize: 14,
    color: Colors.BLACK,
  },
  editTouchView: {
    alignItems: 'flex-end',
    marginBottom: '3%',
  },
  flexDirectionRow: {
    flexDirection: 'row',
  },
  projectIdView: {
    flex: 0.7,
    justifyContent: 'center',
  },
  idText: {
    fontFamily: FontFamily.medium,
    fontSize: 18,
    color: Colors.BLACK,
  },
  calendarMainView: {
    flexDirection: 'row',
    marginVertical: '2%',
  },
  calendarInnerView: {
    flexDirection: 'row',
    marginRight: '3%',
  },
  titlePriorityView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default Tasks;
