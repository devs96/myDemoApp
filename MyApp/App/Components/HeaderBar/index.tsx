import React, {FC} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import Colors from '../../Theme/Colors/Colors';
import FontFamily from '../../Theme/FontNames';

interface HeaderBarProps {
  RenderMainComponent?: React.FC;
  RenderRightComponent?: React.FC;
  leftIconName?: string;
  leftIconClick?: () => void;
}

const HeaderBar: FC<HeaderBarProps> = ({
  RenderMainComponent,
  RenderRightComponent,
  leftIconName = 'menu',
  leftIconClick,
}) => {
  return (
    <View style={styles.navBarMainView}>
      <View style={styles.leftMainView}>
        <View style={styles.drawerView}>
          <TouchableOpacity onPress={leftIconClick}>
            <Icon name={leftIconName} size={25} color={Colors.BLACK} />
          </TouchableOpacity>
        </View>
        {RenderMainComponent && <RenderMainComponent />}
      </View>
      <View style={styles.rightMainView}>
        {RenderRightComponent && <RenderRightComponent />}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  navBarMainView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: '3%',
  },
  title: {
    fontFamily: FontFamily.medium,
    fontSize: 16,
    color: Colors.BLACK,
    marginLeft: 10,
    alignSelf: 'center',
  },
  leftMainView: {
    flexDirection: 'row',
  },
  rightMainView: {
    flexDirection: 'row',
  },
  drawerView: {
    marginRight: 10,
  },
});

export default HeaderBar;
