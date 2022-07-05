import React, {FC} from 'react';
import {
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';
import Colors from '../../Theme/Colors/Colors';
import FontFamily from '../../Theme/FontNames';

interface PriorityProps {
  priority: string;
}

const Priority: FC<PriorityProps> = ({priority}) => {
  const colorCode: StyleProp<TextStyle> | undefined = {
    color:
      priority === 'Emergency'
        ? Colors.RED
        : priority === 'Medium'
        ? Colors.TEXT_YELLOW
        : Colors.NAVY_BLUE_COLOR,
  };
  const backgroundColor: StyleProp<ViewStyle> | undefined = {
    backgroundColor:
      priority === 'Emergency'
        ? Colors.LIGHT_RED
        : priority === 'Medium'
        ? Colors.LIGHT_YELLOW
        : Colors.LIGHT_BLUE,
  };

  return (
    <View>
      <View style={[styles.priorityBoxInner, backgroundColor]}>
        <Text style={[styles.priorityText, colorCode]}>{priority}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  priorityBoxInner: {
    backgroundColor: Colors.LIGHT_RED,
    padding: '6%',
    borderRadius: 1.5,
  },
  priorityText: {
    fontFamily: FontFamily.medium,
  },
});

export default Priority;
