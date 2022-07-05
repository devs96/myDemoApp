import React from 'react';
import {createIconSetFromIcoMoon} from 'react-native-vector-icons';
import {IconProps} from 'react-native-vector-icons/Icon';
import Colors from '../Colors/Colors';
const fontelloConfig = require('../../assets/fonts/selection.json');
export const Icon = createIconSetFromIcoMoon(fontelloConfig);

export const IconView: React.FC<IconProps> = ({
  name = 'aboutus',
  size = 24,
  color = Colors.BLACK,
}) => {
  return (
    <>
      <Icon name={name} size={size} color={color} />
    </>
  );
};
