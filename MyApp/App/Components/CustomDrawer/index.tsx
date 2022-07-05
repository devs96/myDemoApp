import React, {FC} from 'react';

import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
} from '@react-navigation/drawer';

import {Image, StyleSheet, Text, View} from 'react-native';
import Colors from '../../Theme/Colors/Colors';
import FontFamily from '../../Theme/FontNames';
import {Icon} from '../../Theme/Icons';
import DrawerItem from './DrawerItem';
import {drawerData} from './DrawerData';

interface drawerProps {
  props: DrawerContentComponentProps;
}

export const CustomDrawerBar: FC<drawerProps> = () => {
  const RenderDrawerData = () => {
    return (
      <>
        {drawerData.map((element, index) => {
          return (
            <View key={index.toString()}>
              <DrawerItem
                iconName={element.iconName}
                text={element.title}
                subItemData={element.subHeaders}
              />
            </View>
          );
        })}
      </>
    );
  };

  return (
    <DrawerContentScrollView>
      <View>
        <View style={styles.profileMainView}>
          <Image
            source={{uri: 'https://picsum.photos/200'}}
            style={styles.profilePhoto}
          />
          <View style={styles.detailsView}>
            <Text numberOfLines={1} style={styles.name}>
              Leslie Alexandra
            </Text>
            <Text numberOfLines={1} style={styles.owner}>
              Company Owner
            </Text>
            <Text numberOfLines={1}>Company name</Text>
          </View>
          <View style={styles.iconView}>
            <Icon name="edit" size={25} color={Colors.BLACK} />
          </View>
        </View>
        <RenderDrawerData />
        <View style={styles.lowerDrawerView}>
          <DrawerItem iconName={'aboutus'} text={'About us'} />
          <DrawerItem iconName={'privacy'} text={'Privacy'} />
          <DrawerItem iconName={'terms_condition'} text={'Terms & condition'} />
        </View>
      </View>
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  profileMainView: {
    flexDirection: 'row',
    flex: 1,
    paddingHorizontal: '4%',
    paddingVertical: '4%',
  },
  profilePhoto: {
    width: 72,
    height: 72,
    borderRadius: 72,
  },
  name: {
    fontFamily: FontFamily.medium,
    fontSize: 20,
    color: Colors.BLACK,
  },
  owner: {
    fontSize: 16,
    color: Colors.BLACK,
  },
  detailsView: {
    flex: 0.9,
    marginLeft: '5%',
    justifyContent: 'space-between',
  },
  iconView: {
    justifyContent: 'center',
  },
  lowerDrawerView: {
    marginTop: '8%',
  },
});
