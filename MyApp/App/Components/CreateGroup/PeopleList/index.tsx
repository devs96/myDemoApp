import React, {FC} from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';

import Colors from '../../../Theme/Colors/Colors';
import FontFamily from '../../../Theme/FontNames';
import {Icon} from '../../../Theme/Icons';
import {PeopleData} from '../../Messages/SegmentControl';

interface PeopleListProps {
  data: PeopleData;
  selectedList: PeopleData[];
  setSelected: (value: PeopleData[]) => void;
}

const PeopleList: FC<PeopleListProps> = ({data, selectedList, setSelected}) => {
  return (
    <TouchableOpacity
      onPress={() => {
        let tempData = [...selectedList];
        if (selectedList.some(item => item.id === data.id)) {
          tempData = selectedList.filter((item: PeopleData) => {
            return item.id !== data.id;
          });
        } else {
          tempData.push(data);
        }
        setSelected(tempData);
      }}>
      <View style={styles.mainOuterView}>
        <Image source={{uri: data.imageUrl}} style={styles.profilePhoto} />

        {selectedList.some(item => item.id === data.id) && (
          <View style={styles.tickMark}>
            <Icon name="done" size={20} color={Colors.WHITE} />
          </View>
        )}

        <Text style={styles.personName}>{data.name}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  profilePhoto: {
    width: 48,
    height: 48,
    borderRadius: 48,
  },
  mainOuterView: {
    flexDirection: 'row',
    marginVertical: '3%',
  },
  personName: {
    fontSize: 18,
    fontFamily: FontFamily.medium,
    color: Colors.BLACK,
    marginLeft: '3%',
    alignSelf: 'center',
    flex: 1,
  },
  tickMark: {
    backgroundColor: Colors.PRIMARY1,
    position: 'absolute',
    top: 30,
    left: 30,
    borderRadius: 20,
  },
});

export default PeopleList;
