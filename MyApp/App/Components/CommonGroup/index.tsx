import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Colors from '../../Theme/Colors/Colors';
import ChatItem from '../Messages/ChatItem';
import {commonGroups} from './mockData';

const CommonGroup = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Groups In Common</Text>
      {commonGroups.map((item, index) => {
        return (
          <View key={index.toString()}>
            <ChatItem data={item} />
          </View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    color: Colors.NAVY_BLUE_COLOR,
    fontSize: 14,
    marginTop: '5%',
  },
  container: {
    paddingHorizontal: '5%',
  },
});

export default CommonGroup;
