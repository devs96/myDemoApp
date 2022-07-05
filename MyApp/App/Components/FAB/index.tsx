import React, {FC} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import Colors from '../../Theme/Colors/Colors';

interface FABProps {
  onPress: () => void;
  iconName: string;
}

const FAButton: FC<FABProps> = ({onPress, iconName}) => {
  return (
    <TouchableOpacity style={styles.buttonStyle} onPress={onPress}>
      <Icon name={iconName} size={20} color={Colors.WHITE} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonStyle: {
    position: 'absolute',
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    backgroundColor: Colors.NAVY_BLUE_COLOR,
    right: 15,
    bottom: 15,
    zIndex: 2,
  },
});

export default FAButton;
