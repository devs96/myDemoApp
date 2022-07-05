import React, {FC} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import Colors from '../../../Theme/Colors/Colors';
import {Icon} from '../../../Theme/Icons';
import {PeopleData} from '../../Messages/SegmentControl';

interface PeopleProps {
  data: PeopleData;
  selectedPeople: PeopleData[];
  setSelectedPeople?: (value: PeopleData[]) => void;
  isEditable?: boolean;
}

const HorizontalPeopleList: FC<PeopleProps> = ({
  data,
  selectedPeople,
  setSelectedPeople,
  isEditable,
}) => {
  return (
    <View style={styles.selectedPeopleView}>
      <Image source={{uri: data.imageUrl}} style={styles.profilePhoto} />
      {isEditable && (
        <TouchableOpacity
          onPress={() => {
            let tempData = [...selectedPeople];
            tempData = selectedPeople.filter((item: PeopleData) => {
              return item.id !== data.id;
            });
            setSelectedPeople?.(tempData);
          }}
          style={styles.crossView}>
          {/* <Icon name="cancel" size={20} color={Colors.RED} /> */}
          <Icon name="close" size={20} color={Colors.BLACK} />
        </TouchableOpacity>
      )}
      <Text>{data.name.split(' ')[0]}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  selectedPeopleView: {
    alignItems: 'center',
    marginHorizontal: 10,
    marginTop: 20,
  },
  profilePhoto: {
    width: 48,
    height: 48,
    borderRadius: 48,
  },
  crossView: {
    position: 'absolute',
    top: 32,
    left: 32,
    borderRadius: 20,
    backgroundColor: Colors.MEDIUM_GRAY,
  },
});

export default HorizontalPeopleList;
