import React, {FC} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

import FontFamily from '../../../Theme/FontNames';
import Colors from '../../../Theme/Colors/Colors';
import {GroupData, PeopleData} from '../SegmentControl';

interface ChatItemProps {
  data: PeopleData | GroupData;
}

const ChatItem: FC<ChatItemProps> = ({data}) => {
  return (
    <>
      <View style={styles.mainOuterView}>
        <Image source={{uri: data.imageUrl}} style={styles.profilePhoto} />

        <View style={styles.mainMiddleView}>
          <View style={styles.messageView}>
            <Text numberOfLines={1} style={styles.personName}>
              {data.name}
            </Text>
            <Text numberOfLines={1}>{data.lastMessage}</Text>
          </View>
          <View style={styles.rightView}>
            <Text>{data.lastMessageTime}</Text>
            {data.unreadCount && (
              <View style={styles.unreadView}>
                <Text style={styles.unreadText}>{data.unreadCount}</Text>
              </View>
            )}
          </View>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  personName: {
    fontSize: 18,
    fontFamily: FontFamily.medium,
    color: Colors.BLACK,
  },
  unreadText: {
    color: Colors.WHITE,
    fontSize: 12,
    alignSelf: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  unreadView: {
    backgroundColor: Colors.PURPLE,
    padding: 5,
    borderRadius: 26,
    width: 26,
    height: 26,
    alignItems: 'center',
    justifyContent: 'center',
  },
  rightView: {
    alignItems: 'flex-end',
  },
  messageView: {
    flex: 0.95,
  },
  mainMiddleView: {
    marginLeft: '3%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
  },
  profilePhoto: {
    width: 48,
    height: 48,
    borderRadius: 48,
  },
  mainOuterView: {
    flexDirection: 'row',
    marginVertical: '3%',
  },
});

export default ChatItem;
