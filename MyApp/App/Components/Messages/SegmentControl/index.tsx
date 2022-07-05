import React, {FC, useState} from 'react';
import {
  FlatList,
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import {MessageProps} from '../../../Screens/Message';

import Colors from '../../../Theme/Colors/Colors';
import FontFamily from '../../../Theme/FontNames';
import Chats from '../Chats';
import Groups from '../Groups';

export interface PeopleData {
  id: number;
  name: string;
  imageUrl: string;
  lastMessage: string;
  unreadCount?: number;
  lastMessageTime: string;
  email: string;
  mobile: string;
  designation: string;
  location: string;
}

export interface GroupData {
  name: string;
  imageUrl: string;
  lastMessage?: string;
  unreadCount?: number;
  lastMessageTime?: string;
  groupMembers: PeopleData[];
}

interface SegmentControlProps {
  peopleData: PeopleData[];
  groupData: GroupData[];
  props: MessageProps;
}

const SegmentControl: FC<SegmentControlProps> = ({
  peopleData,
  groupData,
  props,
}) => {
  const {navigate} = {...props.navigation};
  const [selectedValue, setSelectedValue] = useState<string>('Chats');
  const highlightSelectedView: StyleProp<ViewStyle> | undefined = {
    borderBottomWidth: 3,
    borderBottomColor: Colors.NAVY_BLUE_COLOR,
  };

  const onGroupPress = (data: GroupData) => {
    navigate('GroupInfo', {groupData: data});
  };
  const onPersonPress = (data: PeopleData) => {
    navigate('PersonInfo', {personData: data});
  };

  return (
    <View style={styles.container}>
      <View style={styles.tabsMainView}>
        <TouchableOpacity
          style={[
            styles.chatsView,
            selectedValue === 'Chats' && highlightSelectedView,
          ]}
          onPress={() => setSelectedValue('Chats')}>
          <Text style={styles.controlTabText}>Chats</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.groupsView,
            selectedValue === 'Groups' && highlightSelectedView,
          ]}
          onPress={() => setSelectedValue('Groups')}>
          <Text style={styles.controlTabText}>Groups</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        {selectedValue === 'Chats' ? (
          <FlatList
            data={peopleData}
            showsVerticalScrollIndicator={false}
            renderItem={({item}) => {
              return <Chats data={item} onPersonPress={onPersonPress} />;
            }}
          />
        ) : (
          <FlatList
            data={groupData}
            showsVerticalScrollIndicator={false}
            renderItem={({item}) => {
              return <Groups data={item} onGroupPress={onGroupPress} />;
            }}
          />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  controlTabText: {
    fontSize: 16,
    fontFamily: FontFamily.medium,
    color: Colors.BLACK,
    textAlign: 'center',
  },
  tabsMainView: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginVertical: '3%',
  },
  chatsView: {
    paddingVertical: '2%',
    paddingHorizontal: '10%',
  },
  groupsView: {
    paddingVertical: '3%',
    paddingHorizontal: '10%',
  },
  container: {
    flex: 1,
  },
});

export default SegmentControl;
