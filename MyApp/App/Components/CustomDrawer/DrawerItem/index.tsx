import React, {FC, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Colors from '../../../Theme/Colors/Colors';
import {Icon} from '../../../Theme/Icons';

interface SubItems {
  title: string;
  iconName: string;
}

interface DrawerItemProps {
  onPress?: () => void;
  iconName: string;
  text: string;
  subItemData?: SubItems[];
}

const DrawerItem: FC<DrawerItemProps> = ({
  onPress,
  iconName,
  text,
  subItemData,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const RenderSubItems = () => {
    return (
      <>
        {subItemData?.map((item, index) => {
          return (
            <View key={index.toString()}>
              <TouchableOpacity style={Styles.subItemView}>
                <Icon name={item.iconName} size={20} color={Colors.BLACK} />
                <Text style={Styles.subText}>{item.title}</Text>
              </TouchableOpacity>
            </View>
          );
        })}
      </>
    );
  };

  return (
    <>
      <TouchableOpacity
        style={Styles.touchView}
        onPress={() => {
          switch (text) {
            case 'Report':
              setIsOpen(!isOpen);
              break;
            case 'Staff':
              setIsOpen(!isOpen);
              break;
            default:
              onPress?.();
              break;
          }
        }}>
        <Icon name={iconName} size={20} color={Colors.BLACK} />
        <Text style={Styles.text}>{text}</Text>
      </TouchableOpacity>
      {isOpen && <RenderSubItems />}
    </>
  );
};

const Styles = StyleSheet.create({
  text: {
    fontSize: 17,
    color: Colors.BLACK,
    marginLeft: '5%',
  },
  touchView: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: '5%',
    marginVertical: '5%',
  },
  subItemView: {
    marginHorizontal: '15%',
    flexDirection: 'row',
    marginBottom: '5%',
    alignItems: 'center',
  },
  subText: {
    fontSize: 14,
    color: Colors.BLACK,
    marginLeft: '5%',
  },
});

export default DrawerItem;
