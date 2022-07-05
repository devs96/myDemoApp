import React, {FC} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Colors from '../../Theme/Colors/Colors';
import FontFamily from '../../Theme/FontNames';
import {PeopleData} from '../Messages/SegmentControl';

interface DetailsPopupProps {
  setShowPopup: (val: boolean) => void;
  data: PeopleData | undefined;
  onViewClick: () => void;
  onRemoveClick: () => void;
}

const DetailsPopup: FC<DetailsPopupProps> = ({
  setShowPopup,
  data,
  onViewClick,
  onRemoveClick,
}) => {
  return (
    <View style={styles.blackView}>
      <View style={styles.innerView}>
        <TouchableOpacity
          onPress={() => {
            setShowPopup(false);
          }}
          style={styles.closeView}>
          <Icon name="close" size={25} color={Colors.BLACK} />
        </TouchableOpacity>
        <TouchableOpacity onPress={onViewClick}>
          <Text style={styles.text}>View {data?.name}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onRemoveClick}>
          <Text style={styles.text}>Remove {data?.name}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  blackView: {
    position: 'absolute',
    backgroundColor: Colors.TRANSPARENT_BLACK,
    width: '100%',
    height: '100%',
    zIndex: 3,
  },
  innerView: {
    backgroundColor: Colors.WHITE,
    position: 'absolute',
    width: '100%',
    bottom: 0,
    padding: '5%',
  },
  text: {
    color: Colors.BLACK,
    fontFamily: FontFamily.medium,
    fontSize: 18,
    marginVertical: '4%',
  },
  closeView: {
    alignSelf: 'flex-end',
  },
});

export default DetailsPopup;
