import React, {FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {TouchableOpacity} from 'react-native-gesture-handler';
import Colors from '../../Theme/Colors/Colors';
import FontFamily from '../../Theme/FontNames';

interface CustomButtonProps {
  text: string;
  onPress: () => void;
}

const CustomButton: FC<CustomButtonProps> = ({text, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.buttonView}>
        <Text style={styles.text}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonView: {
    backgroundColor: Colors.NAVY_BLUE_COLOR,
    paddingVertical: '3%',
    borderRadius: 5,
  },
  text: {
    color: Colors.WHITE,
    textAlign: 'center',
    fontFamily: FontFamily.bold,
  },
});

export default CustomButton;
